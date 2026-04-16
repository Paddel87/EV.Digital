# Changelog

Alle wichtigen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
und dieses Projekt folgt der [Semantischen Versionierung](https://semver.org/lang/de/).

## [Unreleased]

## [1.5.0] - 2026-04-16

### Hinzugefügt
- **Bestell-Interface für Einsatzkräfte:** Eigene Bestelloberfläche ohne Registrierung oder App
  - Zugang per QR-Code oder Event-Link
  - Standortfreigabe per GPS
  - Sortimentsauswahl mit Kategorien und Mengenangabe
  - Live-Bestellstatus (Bestellt → Angenommen → Unterwegs → Geliefert)
- **Sortimentsverwaltung:** Disponent kann Artikel anlegen, Verfügbarkeit steuern, Mengen begrenzen
- **Lagerverwaltung:** Zwei Lagerorte (lokales Lager in Geschäftsstelle + mobiles Lager im Nachschubfahrzeug)
  - Disponent pflegt Artikelstamm und Bestände beider Lager
  - Befüllung des mobilen Lagers wird vor Fahrtbeginn erfasst
  - Bestandswarnung bei niedrigem Vorrat
  - Besteller sehen nur tatsächlich verfügbare Artikel
- **Besteller als Benutzerrolle:** Einsatzkräfte sind jetzt Teil des Systems (statt externe Akteure)

### Geändert
- **Rollenmodell auf 4 Kernrollen reduziert:** Besteller, Disponent, Versorger:in, Nachschubfahrer:in
  - Koordinator:in, Teamleiter:in und Helfer:in entfernt (Überschneidungen bereinigt)
  - "Mobiles Nachschubfahrzeug" umbenannt zu "Nachschubfahrer:in" (Person statt Fahrzeug)
- **3 Betriebsmodi Nachschubfahrzeug:**
  - Mobil (Standard): Fährt herum, beliefert Versorger:innen
  - Stationär: Hält an, wird als fester Versorgungspunkt sichtbar
  - Hybrid: Liefert an Besteller UND versorgt Versorger:innen gleichzeitig
- **Kartensichtbarkeiten pro Rolle:** Rollenabhängige Sichtbarkeitsmatrix definiert
  - Disponent: Sieht alles
  - Versorger:in: Sieht alle Fahrzeuge + alle Aufträge
  - Nachschubfahrer:in: Sieht alle Versorger, Aufträge nur im Hybrid-Modus
- **Verkehrsdaten auf TomTom umgestellt:** Hybrid-Ansatz (3 APIs) durch TomTom ersetzt
  - Traffic Flow API + Traffic Incidents API
  - Kostenlos bis 5.000 Requests/Tag
  - Serverseitige Abfrage: Backend fragt zentral ab, cached, filtert und verteilt per Socket.IO
  - Clients fragen nie direkt externe APIs ab
- **Disponent: Verkehrsmeldungs-Filter:** Konfigurierbare Filterung von TomTom-Meldungen
  - Einzelne Meldungen ignorieren, Einsatzgebiet als "befahrbar" markieren
  - Zwei Ebenen: Externe Sperrungen (filterbar) vs. interne Sperrungen (gelten immer)
- **Bestellworkflow:** Direktbestellung ersetzt WhatsApp als primären Kanal
  - Neu: Einsatzkraft → Bestell-Interface → EV.Digital → Disponent prüft → Versorger liefert
  - WhatsApp bleibt als Fallback erhalten
- **Disponenten-Rolle:** Vom Daten-Abtipper zum Koordinator (priorisieren, bündeln, steuern)
- **Auftragsstatus:** Umbenannt für Besteller-Perspektive (Bestellt → Angenommen → Unterwegs → Geliefert)
- **Hauptansichten:** Besteller-Interface als eigene Ansicht, Sortimentsverwaltung ergänzt
- **TomTom Routing API:** Routenberechnung mit Echtzeit-Verkehr, serverseitig
- **Disponent mobil:** Kann auch mobil arbeiten, eigener Standort auf Karte
- **GPS-Fallback:** Besteller kann Standort alternativ auf Karte antippen oder aus vordefinierten Orten wählen
- **Gesamtbestand:** Besteller sehen Verfügbarkeit aus beiden Lagern zusammen
- **Stationär-Sichtbarkeit:** Disponent konfiguriert, ob Nachschubfahrzeug auch für Besteller sichtbar ist
- **Optionale Team-Gruppierung:** Versorger:innen arbeiten einzeln oder in Teams (Disponent konfiguriert)
- **Sperrungen vereinfacht:** Nur noch zwei Stufen (für Versorgungsfahrzeuge befahrbar / für alle gesperrt)
- **Konsistenzbereinigung:** Doppelte Nummerierung, fehlende Überschriften, veraltete Referenzen behoben
- **Routing-Logik definiert:** Route nur bei Auftragsübernahme (Vorschlag, manuell starten), dauerhafter Button für Nachschub/Geschäftsstelle, freies Routing optional

## [1.4.0] - 2026-04-16

### Geändert
- **Tech-Stack finalisiert:** Klare Entscheidungen statt offener Alternativen
  - Frontend: Vue.js 3 + Vuetify 3 (statt "Vue.js oder React")
  - Backend: Node.js + Express + Socket.IO (statt "Node.js oder Python Flask")
  - Durchgängig TypeScript im gesamten Projekt
- **Datenbank verschlankt:** PostgreSQL mit PostGIS, Redis entfernt (bei Bedarf nachrüstbar)
- **Infrastruktur vereinfacht:** Docker Compose als Standard-Deployment
  - Kubernetes entfernt (überdimensioniert für ehrenamtliches Projekt)
  - ELK Stack entfernt → Winston Structured Logging
  - Prometheus/Grafana entfernt → Health-Endpoint (bei Bedarf nachrüstbar)
- **Projektstruktur aktualisiert:** Flachere Struktur mit docker-compose.yml im Root
- **Testing:** Vitest statt Jest/Pytest

### Entfernt
- Redis als Pflichtkomponente (optional bei Skalierungsbedarf)
- Kubernetes Deployment-Option
- ELK Stack (Elasticsearch, Logstash, Kibana)
- Prometheus + Grafana als Standard-Monitoring
- Staging-Umgebung (Development + Production reicht initial)

## [1.3.0] - 2025-07-19

### Hinzugefügt
- **Hybrid-Ansatz Verkehrsdaten:** Integration von Autobahn GmbH API, OpenStreetMap Overpass API und HERE Maps
- **Autobahn GmbH API:** Kostenlose deutsche Autobahn-Baustellen, Sperrungen und Verkehrsmeldungen
- **OpenStreetMap Overpass API:** Detaillierte Integration für lokale Straßenbaustellen aus Community-Daten
  - Baustellen-Abfragen mit komplexer Overpass QL Syntax
  - Straßensperrungen und temporäre Hindernisse
  - Bounding Box basierte Abfragen mit Caching-Strategie
  - GeoJSON-Format für direkte Leaflet.js Integration
- **Manuelle Straßensperrungen (Disponent):** Interaktive Kartenerstellung von Sperrungen
  - Polygon-, Linien- und Punkt-Tools für verschiedene Sperrgebiete
  - Sperrungstypen: Vollsperrung, Teilsperrung, Einsatzfahrzeug-Sperrung, temporäre Sperrung
  - Einsatzfahrzeug-Korridore mit GPS-Koordinaten und Durchfahrtspunkten
  - Berechtigungsebenen für Feuerwehr, Einsatzversorger und Zivilverkehr
  - Real-time WebSocket-Updates und automatische Routenneuberechnung
- **Sperrungsmanagement Backend:** REST API für CRUD-Operationen manueller Straßensperrungen
- **Erweiterte Kartendarstellung:** Farbkodierte Bereiche und Popup-Informationen

### Geändert
- Technologie-Stack um Verkehrsdaten-APIs erweitert
- Kartenintegration um Hybrid-Ansatz für Verkehrsdaten erweitert
- Backend um Sperrungsmanagement-Funktionen erweitert
- Konzeptdokument um detaillierte Overpass API-Dokumentation erweitert

## [1.2.0] - 2025-07-18

### Hinzugefügt
- **Benutzerrollen:** Disponent, Ehrenamtliche Versorger:innen, Mobiles Nachschubfahrzeug
- **Örtlichkeiten:** Geschäftsstelle der Gewerkschaft, Mobile Nachschubfahrzeuge, Einsatzorte
- **WhatsApp-Bestellsystem:** Externe Bestellung über WhatsApp mit manueller Erfassung
- **Bestellworkflow:** Einsatzkraft → WhatsApp → Disponent → EV.Digital → Auftrag → Versorger
- **Echtzeit-Versorger-Tracking:** Live-Standorte aller Versorger auf der Karte
- **Dynamische Navigation:** Automatische Routenoptimierung mit Live-Updates
- **Versorger-Karte:** Spezialisierte UI mit Auftragsvisualisierung und Koordination
- **Externe Akteure:** Einsatzkräfte als Kunden ohne Systemzugriff (Lieferando-Modell)

### Geändert
- Rollensystem überarbeitet: Einsatzkräfte aus internem System entfernt
- Anwendungsszenarien um WhatsApp-Integration und Medienbruch-Management erweitert
- Kartenfunktionen um Echtzeit-Tracking und Live-Koordination erweitert
- Benutzeroberfläche um spezialisierte Versorger-Ansicht erweitert

## [1.1.0] - 2025-07-18

### Hinzugefügt
- **Entwicklungsphilosophie:** Vision Driven Development-Ansatz
- **Autonome KI-Entwicklung:** Eigenständige Informationsbeschaffung und vorausschauende Planung
- **Implizites Wissen:** Nutzung des gesamten Dokumentations-"Wissensschatzes"
- **Implementierungsauswirkungen:** Dokumentationsanforderungen und Qualitätssicherung

### Geändert
- Konzeptdokument um Entwicklungsphilosophie erweitert
- Strukturierung für autonome KI-Entwicklung optimiert

## [1.0.0] - 2025-07-18

### Hinzugefügt
- **Projektkonzept:** Vollständiges Konzeptdokument für "Einsatzversorgung Digital"
- **README:** Umfassende Projektdokumentation mit Roadmap
- **Technische Architektur:** Vue.js/React Frontend, Node.js/Python Backend, PostgreSQL
- **Funktionale Anforderungen:** Benutzer-/Rollenverwaltung, Kartenintegration, Team-Koordination
- **Datenschutz & Sicherheit:** DSGVO-konforme Prinzipien und Sicherheitsmaßnahmen
- **Implementierungsplan:** 16-Wochen-Roadmap in 4 Phasen
- **Qualitätssicherung:** Testing-Strategie und Code-Quality-Standards
- **Deployment:** Cloud- und On-Premise-Optionen
- **Community:** Mitwirkungsrichtlinien und Open-Source-Prinzipien
- **MIT-Lizenz:** Freie Verfügbarkeit des Projekts

### Dokumentation
- Detailliertes Konzeptdokument (KONZEPT.md)
- Projektübersicht und Anleitung (README.md)
- Lizenzbestimmungen (MIT)

---

## Versionierung

- **MAJOR:** Inkompatible API-Änderungen
- **MINOR:** Neue Funktionalität (rückwärtskompatibel)
- **PATCH:** Bugfixes (rückwärtskompatibel)

## Kategorien

- **Hinzugefügt:** Neue Features
- **Geändert:** Änderungen an bestehender Funktionalität
- **Veraltet:** Features, die in zukünftigen Versionen entfernt werden
- **Entfernt:** Entfernte Features
- **Behoben:** Bugfixes
- **Sicherheit:** Sicherheitsupdates