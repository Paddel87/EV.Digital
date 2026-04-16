# Implementierungsfahrplan

**Projekt:** Einsatzversorgung Digital (`ev-digital`)
**Stand:** April 2026
**Bezug:** [KONZEPT.md](KONZEPT.md) v1.5.0

---

## 🎯 Leitlinien

- **Bottom-to-Top:** Zuerst tragfähige Infrastruktur (DB, Auth, API, Socket.IO, Deployment), dann fachliche Features. Jede Schicht ist allein lauffähig und testbar.
- **Vertikale Scheiben ab Phase 3:** Pro Feature gehen Backend, Frontend, Tests und Doku gemeinsam live – keine monatelange „Schublade".
- **MVP vor Kür:** Der MVP umfasst Phasen 0–5. Barcode-Warenwirtschaft und Statistiken (KONZEPT §Zukunftsperspektiven) sind explizit Post-MVP.
- **Namenskonvention beachten:** Technisch `ev-digital` / `ev_digital`, Markenname `EV.Digital` nur in UI-Texten (vgl. KONZEPT §Namenskonvention).
- **DSGVO by Design:** Datenminimierung, Löschkonzept und Einwilligung werden nicht als Abschlussphase angeheftet, sondern in jeder Phase mitgedacht.

---

## 🗺️ Meilensteine im Überblick

| Phase | Ziel | Status |
|---|---|---|
| **0** | Projektfundament (Monorepo, Docker Compose, CI) | ⏳ Bevorstehend |
| **1** | Kern-Infrastruktur (DB, Auth, API- & Frontend-Skelett) | ⏳ Geplant |
| **2** | Einsatz-Lifecycle & Rollenzugang | ⏳ Geplant |
| **3** | Sortiment & Lagerverwaltung | ⏳ Geplant |
| **4** | Bestell- und Auftragsflow (Kern-MVP) | ⏳ Geplant |
| **5** | Karte, Tracking & Navigation | ⏳ Geplant |
| **6** | Nachschubfahrzeug & Betriebsmodi | ⏳ Geplant |
| **7** | Kommunikation & Protokollierung | ⏳ Geplant |
| **8** | Offline-Fähigkeit / PWA-Härtung | ⏳ Geplant |
| **9** | Testing, Security, Release 1.0 | ⏳ Geplant |
| **10** | Post-MVP (Barcode, Statistiken, KI-Routing) | 🔮 Zukunft |

Ende von Phase 5 = **Lauffähiger MVP** (Bestellung → Auftrag → Lieferung auf der Karte).
Ende von Phase 9 = **Release 1.0**.

---

## Phase 0 – Projektfundament

**Ziel:** Ein `docker-compose up` startet ein leeres, aber lauffähiges System.

**Deliverables**
- Monorepo-Struktur `frontend/`, `backend/`, `database/`, `docs/` gemäß README
- `docker-compose.yml` mit Services `frontend`, `backend`, `postgres` (inkl. PostGIS)
- TypeScript-Setup (Root-`tsconfig`, strict mode) für beide Pakete
- Code-Quality: ESLint, Prettier, Husky + lint-staged, Conventional Commits
- CI via GitHub Actions: `lint`, `typecheck`, `test`, Docker-Build
- `CONTRIBUTING.md`, `.env.example`, Entwickler-Quickstart in README

**Erfolgskriterium:** Neuer Mitwirkender kann das Projekt in < 15 Min. lokal starten.

---

## Phase 1 – Kern-Infrastruktur

**Ziel:** Authentifizierte REST-API spricht mit Datenbank, Frontend-Shell rendert.

**Backend**
- Express + Socket.IO-Grundgerüst, strukturierte Fehlerbehandlung
- Winston Structured Logging, Request-ID, Health-Endpoint (`/healthz`)
- PostgreSQL-Migrationstool (z. B. `node-pg-migrate` oder Prisma Migrate)
- JWT-Auth mit Refresh-Token für interne Rollen, HttpOnly-Cookie-Session für Besteller
- Joi-Validierung als Middleware
- OpenAPI/Swagger-Spec-Gerüst

**Frontend**
- Vite + Vue 3 + Vuetify 3 + Pinia + Vue Router
- PWA-Grundkonfiguration (Manifest, Service-Worker-Skelett, Offline-Shell)
- i18n-Gerüst (Deutsch als Primärsprache)
- Auth-Store, geschützte Routen, globaler Fetch-Client mit Auto-Retry/401-Handling

**Datenbank-Schema (Initialmigrationen)**
- `users`, `sessions`, `events` (Einsätze), `roles`, `audit_log`
- PostGIS-Erweiterung aktiviert, Geometrie-Felder vorbereitet

**Erfolgskriterium:** Login als Disponent → geschützte Dummy-Seite sichtbar, Socket.IO-Ping kommt an.

---

## Phase 2 – Einsatz-Lifecycle & Rollenzugang

**Ziel:** Ein Einsatz lässt sich vorbereiten, aktivieren und beenden; QR-Codes funktionieren.

**Features**
- Einsatz-CRUD mit Status `Vorbereitung → Aktiv → Beendet` (KONZEPT §1)
- Einsatzgebiet per Kartenausschnitt speichern (GeoJSON in PostGIS)
- Automatische QR-Code-/Event-Link-Generierung (getrennte Tokens für Besteller vs. interne Rollen)
- PIN-Login für interne Rollen (Zugang an Einsatz gebunden, Gültigkeit = Laufzeit)
- Cookie-basierte anonyme Besteller-Session mit Wiederanknüpfung
- Automatische Stornierung offener Bestellungen bei „Einsatz beenden"
- Protokoll-/Export-Stub (JSON) für Nachbereitung

**Erfolgskriterium:** Disponent legt Einsatz an, aktiviert ihn, Besteller-QR öffnet Platzhalter-Bestellseite mit korrekter Session.

---

## Phase 3 – Sortiment & Lagerverwaltung

**Ziel:** Warenbestand als Quelle der Wahrheit für spätere Bestellungen.

**Features**
- Artikelstamm mit Kategorien, Einheiten, Mengenlimits
- Sortiment-Vorlagensystem: persistenter Standardkatalog → pro Einsatz kopiert & editierbar (KONZEPT §6)
- Zwei Lagertypen: `lokales_lager` (Geschäftsstelle) + `mobiles_lager` pro Nachschubfahrzeug
- Bestandsführung mit Zu-/Abgängen, Bestandswarnung bei Unterschreitung
- Disponenten-Oberfläche: Artikel pflegen, Befüllung Nachschubfahrzeug erfassen
- Echtzeit-Verfügbarkeit via Socket.IO (Gesamtbestand aus lokal + mobil)

**Erfolgskriterium:** Disponent legt Sortiment an, Bestand wird konsistent über beide Lager geführt und live aktualisiert.

---

## Phase 4 – Bestell- und Auftragsflow (Kern-MVP)

**Ziel:** Komplette Kette Bestellung → Auftrag → Lieferung, ohne Karte.

**Besteller-Seite**
- Standort via Browser-Geolocation, Fallback: Karten-Pin oder Auswahl aus vordefinierten Orten
- Sortiment-Ansicht mit Gesamtbestand und Kategorien
- Bestellabgabe + Status-Screen (Bestellt → Angenommen → Übernommen → Unterwegs → Geliefert)
- Mehrfachbestellungen pro Session, Statuspersistenz über Browserneustart

**Disponent-Seite**
- Eingangskorb mit Echtzeit-Updates, Priorisieren/Bündeln/Ablehnen
- Bestellungen gleicher Location zu einem Auftrag zusammenführen
- Manuelle Bestellerfassung (WhatsApp-Fallback)
- Zuweisung / Übersteuerung von Auftragsannahmen

**Versorger-Seite**
- Liste offener Aufträge, Selbstübernahme
- Statuswechsel „Übernommen → Unterwegs → Geliefert"
- Lieferbestätigung bucht reservierte Artikel vom Fahrzeugbestand ab

**Erfolgskriterium:** End-to-End-Durchlauf ohne Karte, alle Statuswechsel propagieren live an alle Rollen.

---

## Phase 5 – Karte, Tracking & Navigation  _(MVP-Abschluss)_

**Ziel:** Die Lage wird sichtbar – Standorte, Routen, Verkehr.

**Karten-Basis**
- Leaflet + OpenStreetMap-Tiles, responsive
- Rollenbasierte Sichtbarkeitsmatrix (KONZEPT §3) als zentrale Berechtigungslogik
- Versorger-Tracking per Browser-Geolocation, Socket.IO-Broadcast an berechtigte Rollen

**TomTom-Integration (serverseitig)**
- Cron-Job ruft Traffic Flow & Traffic Incidents zentral ab (Default 15 Min.), cached Ergebnisse
- Routing-Endpoint nutzt TomTom Routing API mit aktuellem Verkehrsbild
- Clients erhalten fertiges GeoJSON per Socket.IO – kein Direktzugriff auf TomTom
- Monitoring von Request-Kontingent + Fallback bei Ausfall

**Sperrungen & Filter**
- CRUD für manuelle Sperrungen (Polygon, Linie, Punkt) mit zwei Stufen („für Versorgungsfahrzeuge befahrbar" / „für alle gesperrt")
- Disponenten-Filter für TomTom-Meldungen (einzeln / Einsatzgebiet / Meldungstyp)
- Merge-Logik serverseitig: externes + internes Lagebild

**Navigation**
- Routen-Vorschlag bei Auftragsübernahme, manueller Start
- Dauerhafter Button „Route zu Nachschub/Geschäftsstelle"
- Optionales freies Routing

**Erfolgskriterium:** Versorger:in sieht Besteller-Ping, startet Route, Verkehrsdaten und Sperrungen beeinflussen die Route korrekt. → **MVP ist spielbar.**

---

## Phase 6 – Nachschubfahrzeug & Betriebsmodi

**Ziel:** Nachschublogik vollständig inkl. drei Modi.

**Features**
- Mehrere Nachschubfahrzeuge pro Einsatz, unabhängige Modi `mobil` / `stationär` / `hybrid`
- Stationär-Sichtbarkeit für Besteller konfigurierbar (als Abholstation)
- Hybrid-Modus: akzeptiert Besteller-Aufträge + versorgt Versorger:innen
- Kartendarstellung pro Modus (bewegliches Icon / Versorgungspunkt / Hybrid-Kennzeichnung)
- Bestands-Übergabe Nachschubfahrzeug → Versorgungsfahrzeug (vereinfachte Liste, Barcode folgt in Phase 10)

**Erfolgskriterium:** Ein Einsatz mit zwei Nachschubfahrzeugen in verschiedenen Modi läuft stabil.

---

## Phase 7 – Kommunikation & Protokollierung

**Ziel:** Weg von WhatsApp – interne Kommunikation und Nachbereitung.

**Features**
- Kurznachrichten (1:1 und Broadcast an Rolle/Team)
- Automatische Systemereignisse im Protokoll (Bestellung, Statuswechsel, Filter-Änderung, Sperrung)
- Optionale Team-Gruppierung von Versorger:innen durch Disponent
- Export-Formate: PDF-Einsatzbericht, CSV, JSON (KONZEPT §Zukunft „Statistiken" liefert später die erweiterten Reports)
- Push-Benachrichtigungen (Web Push) bei Statuswechsel

---

## Phase 8 – Offline-Fähigkeit / PWA-Härtung

**Ziel:** Versorgung bleibt funktionsfähig bei Funklöchern.

**Features**
- Service-Worker: Tiles-Cache, App-Shell, Queue für ausstehende Aktionen
- Offline-Bestellung (Besteller), Offline-Statuswechsel (Versorger:in)
- Konfliktauflösung beim Re-Sync (Server gewinnt bei „Geliefert", Warnung bei Dubletten)
- Lighthouse PWA-Score ≥ 90

---

## Phase 9 – Testing, Security, Release 1.0

**Ziel:** Produktionsreife.

**Qualität**
- Unit-Tests (Vitest) ≥ 80 % Coverage auf Backend + Frontend-Stores
- Integrationstests gegen echte PostgreSQL-Instanz (Testcontainers)
- E2E-Tests (Playwright) für die fünf Kernflows: Bestellung, Auftragslebenszyklus, Nachschub, Sperrungen, Einsatz-Lifecycle
- Lasttest (Artillery) mit 100 parallelen Bestellern

**Sicherheit & Betrieb**
- Security-Audit: OWASP Top 10, Rate Limiting, Secret-Scanning in CI
- DSGVO-Paket: Datenschutzerklärung, Einwilligung, Löschkonzept, Verarbeitungsverzeichnis
- Backup-Strategie PostgreSQL (täglich, verschlüsselt)
- Deployment-Runbook (Docker Compose + optional Cloud-Variante)
- Benutzerhandbuch + Schulungsmaterial pro Rolle

**Release-Kriterien**
- Alle Kernflows grün in E2E
- Keine High/Critical-Findings im Security-Audit
- Health-Endpoint, Logging, Backups nachweislich funktionsfähig

---

## Phase 10 – Post-MVP (Ausblick)

- **Barcode-basierte Warenwirtschaft:** Scan per Kamera/Hardware, Hybrid-Auflösung Open Food Facts + UPCitemdb, Ladungs-Vorlagen, Reservierung/Abbuchung
- **Einsatz-Statistiken:** Live-Dashboard, erweiterte KPIs, Karten-Heatmap, historischer Vergleich, Export
- **KI-Routenoptimierung:** Mehrauftrags-Bündelung, prädiktive Verteilung
- **Multi-Tenant-Fähigkeit:** Mehrere Organisationen pro Instanz
- **Mobile App** (nativ) für bessere Offline-Erfahrung bei intensiver Nutzung

---

## 🧭 Arbeitsweise pro Phase

Jede Phase endet mit:

1. **Akzeptanzkriterien grün** (funktional + nicht-funktional)
2. **Doku aktualisiert:** CHANGELOG, README-Badges, relevante KONZEPT-Abschnitte
3. **Review-Durchlauf** inkl. Threat-Modelling für neue Endpunkte
4. **Demo-fähiger Stand** auf `main`, getaggt (`v0.x`)

---

## ⚠️ Risiken & Gegenmaßnahmen

| Risiko | Gegenmaßnahme |
|---|---|
| TomTom-Kontingent überschritten | Zentrales Caching im Backend, Monitoring, konfigurierbares Intervall, lokaler Fallback |
| Geolocation im Browser unzuverlässig | Drei-Wege-Fallback (GPS → Karten-Pin → vordefinierter Ort) bereits in Phase 4 |
| Socket.IO-Last bei vielen gleichzeitigen Clients | Rooms pro Einsatz, Event-Throttling, Lasttest in Phase 9 |
| Offline-Sync-Konflikte | Server-authoritatives Modell mit Warn-UI, Audit-Log für Dubletten |
| DSGVO-Überraschungen | Datenschutz-Artefakte ab Phase 1 pflegen, nicht erst vor Release |
| Scope Creep Richtung Barcode/Statistik | Harte MVP-Grenze hinter Phase 5, Phase 10 bleibt optional |

---

## 🔗 Offene Punkte vor Umsetzungsstart

- Hosting-Entscheidung (Self-hosted Server der Gewerkschaft vs. Cloud)
- Beschaffung TomTom-API-Key (inkl. Eigentümer-Account)
- Verbindlicher Designstand für Besteller-Interface (Low-Fidelity-Mockups reichen initial)
- Prozess für PIN-Ausgabe an interne Rollen am Einsatztag
- Verantwortlichkeit für Datenschutzerklärung + DPIA

---

*Dieser Fahrplan ist ein lebendes Dokument. Änderungen werden über Pull Requests diskutiert und im CHANGELOG vermerkt.*
