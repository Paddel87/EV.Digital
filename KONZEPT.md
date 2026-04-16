# Konzept: Einsatzversorgung Digital

**Projektstart:** 18.07.2025  
**Status:** Konzeptionierungsphase  
**Version:** 1.4.0

---

## 📋 Projektübersicht

**Einsatzversorgung Digital** ist eine webbasierte Anwendung zur digitalen Unterstützung ehrenamtlicher Versorgungsteams bei Großeinsätzen. Das System ermöglicht eine effiziente Koordination von Versorgungsmaßnahmen ohne App-Installation und unter Berücksichtigung höchster Datenschutzstandards.

---

## 🚀 Entwicklungsphilosophie: Vision Driven Development

Die Realisierung des Projekts "Einsatzversorgung Digital" folgt dem **Vision Driven Development**-Ansatz, der zwei fundamentale Aspekte verpflichtend berücksichtigt:

### 1. Autonome KI-Entwicklung

Ein zentrales und unabdingbares Prinzip für die erfolgreiche Umsetzung dieses Konzepts ist die **autonome Arbeitsweise der entwickelnden KI**:

#### Eigenständige Informationsbeschaffung
- Die KI muss proaktiv und eigenständig auf **alle** im System vorhandenen Dokumente zurückgreifen
- Vollständige Nutzung von Architekturentwürfen, Konzepten, Schnittstellenbeschreibungen etc.
- Erstellung einer funktionsfähigen und kohärenten Software basierend auf der Gesamtdokumentation

#### Vorausschauende Planung
- Antizipierendes Vorgehen ohne menschliche Hilfe zur Klärung von Unklarheiten
- Frühzeitige Erkennung potenzieller Integrationsprobleme und Abhängigkeiten
- Selbstständige Erarbeitung von Lösungen für logische Lücken
- Proaktive Behandlung von Architektur- und Implementierungsherausforderungen

#### Implizites Wissen nutzen
- Die Gesamtheit der Dokumentation bildet den "Wissensschatz" des Projekts
- Ableitung nicht nur expliziter Anweisungen, sondern auch impliziter Zusammenhänge
- Berücksichtigung von Architekturentscheidungen aus dem Gesamtkontext
- Intelligente Interpretation und Umsetzung dokumentierter Prinzipien

### 2. Bottom-to-Top-Entwicklungsphilosophie

*[Dieser Abschnitt wird vervollständigt, sobald die vollständige Beschreibung vorliegt]*

### Auswirkungen auf die Implementierung

#### Dokumentationsanforderungen
- **Vollständigkeit:** Alle Architekturentscheidungen müssen dokumentiert sein
- **Konsistenz:** Widerspruchsfreie Dokumentation zwischen verschiedenen Bereichen
- **Detailgrad:** Ausreichende Detailtiefe für autonome Implementierung
- **Verknüpfung:** Klare Abhängigkeiten und Zusammenhänge zwischen Komponenten

#### Qualitätssicherung
- **Selbstvalidierung:** KI muss eigene Implementierungen gegen Konzept validieren
- **Kohärenzprüfung:** Automatische Überprüfung der Gesamtarchitektur
- **Iterative Verbesserung:** Kontinuierliche Anpassung basierend auf Erkenntnissen
- **Dokumentations-Feedback:** Rückmeldung über Unklarheiten in der Dokumentation

---

## 🎯 Zielgruppe & Anwendungsfälle

### Primäre Zielgruppe
- Gewerkschaften mit eigener Einsatzbetreuung
- Ehrenamtliche Versorgungsteams bei Großeinsätzen
- Koordinator:innen für Getränke- und Snackversorgung

### Benutzerrollen
- **Disponent:** Zentrale Koordination und Auftragsverteilung
- **Ehrenamtliche Versorger:innen:** Ausführung der Versorgungsaufträge vor Ort
- **Mobiles Nachschubfahrzeug:** Kann Versorger mobil nachversorgen und unterstützen

### Örtlichkeiten im System
- **Geschäftsstelle der Gewerkschaft:** Zentrale Anlaufstelle zum Wiederbeladen des Fahrzeuges
- **Mobiles oder temporär stationäres Nachschubfahrzeug:** Flexible Versorgungsstation
- **Verschiedene Örtlichkeiten:** Standorte an denen Einsatzkräfte eine Einsatzbetreuung wünschen

### Anwendungsszenarien
- Großeinsätze mit mehreren Versorgungsteams
- Koordination ortsunkundiger Helfer:innen
- Dokumentation und Nachverfolgung von Versorgungsaufträgen
- Kommunikation ohne private Kanäle (WhatsApp-Alternative)
- Mobile Nachversorgung durch Fahrzeuge
- Koordination zwischen festen und mobilen Versorgungspunkten
- **WhatsApp-Bestellsystem:** Einsatzkräfte bestellen per WhatsApp, Disponent erfasst händisch in EV.Digital
- **B2B-Service:** Gewerkschaft als Dienstleister für Einsatzkräfte ohne deren Systemintegration
- **Medienbruch-Management:** Überbrückung zwischen externen Kommunikationskanälen und internem System

---

## 🏗️ Technische Architektur

### System-Architektur
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │   Datenbank     │
│   (PWA)         │◄──►│   (REST API)    │◄──►│  (PostgreSQL +  │
│                 │    │                 │    │   PostGIS)      │
│ - Vue.js 3      │    │ - Node.js +     │    │ - Benutzer      │
│ - Vuetify 3     │    │   Express       │    │ - Teams         │
│ - Leaflet.js    │    │ - Socket.IO     │    │ - Aufträge      │
│ - Offline-fähig │    │ - JWT Auth      │    │ - Geodaten      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         ▲                                            ▲
         └── Durchgängig TypeScript ──────────────────┘
```

### Technologie-Stack

#### Frontend
- **Framework:** Vue.js 3
- **UI-Framework:** Vuetify 3 für konsistente Benutzeroberfläche
- **PWA:** Service Worker für Offline-Funktionalität
- **Karten:** OpenStreetMap mit Leaflet.js
- **Verkehrsdaten:** Hybrid-Ansatz (Autobahn GmbH API + Overpass API + HERE Maps optional)
- **Build-Tool:** Vite für schnelle Entwicklung

#### Backend
- **Runtime:** Node.js mit Express.js
- **Sprache:** TypeScript (durchgängig im gesamten Projekt)
- **API:** RESTful API mit OpenAPI/Swagger Dokumentation
- **Echtzeit:** Socket.IO für Live-Updates
- **Authentifizierung:** JWT-basiert mit Refresh-Token
- **Validierung:** Joi für Eingabevalidierung
- **Sperrungsmanagement:** REST API für CRUD-Operationen manueller Straßensperrungen

#### Datenbank
- **Primär:** PostgreSQL mit PostGIS-Erweiterung für Geodaten
- **Backup:** Automatisierte tägliche Backups

#### Infrastruktur
- **Container:** Docker für einheitliche Deployment-Umgebung
- **Orchestrierung:** Docker Compose (ein Befehl startet alles)
- **Logging:** Structured Logging mit Winston

---

## 🔧 Funktionale Anforderungen

### 1. Benutzer- und Rollenverwaltung

#### Rollen
- **Disponent:** Zentrale Koordination, Vollzugriff, Team-Management, Auftragsverteilung
- **Koordinator:in:** Vollzugriff, Team-Management, Auftragsverteilung
- **Teamleiter:in:** Team-Status, Auftragsannahme, Kommunikation
- **Ehrenamtliche Versorger:innen:** Ausführung der Versorgungsaufträge, Status-Updates, Kommunikation
- **Mobiles Nachschubfahrzeug:** Spezielle Rolle für mobile Nachversorgung, Standort-Updates, Kapazitätsmeldungen
- **Helfer:in:** Basis-Funktionen, Status-Updates

#### Externe Akteure (nicht im System erfasst)
- **Einsatzkräfte:** Kunden der Gewerkschaft, die Versorgungsleistungen bestellen (ähnlich wie bei Lieferando/Glovo). Sie haben keinen direkten Systemzugriff und sind nicht als Benutzer registriert.

#### Authentifizierung
- QR-Code basierte Anmeldung für schnellen Zugang
- PIN-basierte Anmeldung als Alternative
- Session-Management mit automatischer Abmeldung
- Keine Registrierung erforderlich (Event-basierte Accounts)

### 2. Kartenintegration & Navigation

#### Kartenfunktionen
- OpenStreetMap Integration mit Leaflet.js
- Offline-Karten für kritische Bereiche
- GPS-Positionierung (optional, datenschutzkonform)
- Markierung von Versorgungspunkten und Treffpunkten
- **Echtzeit-Versorger-Tracking:** Aktuelle Standorte aller Versorger auf der Karte
- **Auftragsvisualisierung:** Standorte der Versorgungsaufträge mit Status-Kennzeichnung

#### Navigation für Versorger
- **Dynamische Routenberechnung:** Automatische Routenoptimierung zur Anfahrt
- **Live-Updates:** Berücksichtigung aktueller Verkehrslage und Sperrungen
- Routenplanung zu Einsatzorten
- Berücksichtigung von Verkehrsbeschränkungen
- Alternative Routen bei Sperrungen
- Sprachnavigation (optional)
- **Koordination:** Sichtbarkeit anderer Versorger zur besseren Abstimmung

#### Verkehrsdaten & Straßensperrungen (Hybrid-Ansatz)
- **Autobahn GmbH API:** Kostenlose Integration deutscher Autobahn-Baustellen und Sperrungen
  - Baustellen: `https://verkehr.autobahn.de/o/autobahn/{autobahn}/services/roadworks`
  - Sperrungen: `https://verkehr.autobahn.de/o/autobahn/{autobahn}/services/closure`
  - Verkehrsmeldungen: `https://verkehr.autobahn.de/o/autobahn/{autobahn}/services/warning`
- **OpenStreetMap Overpass API:** Lokale Straßenbaustellen aus Community-Daten
  - **Funktionsweise:** Die Overpass API ermöglicht komplexe Abfragen der OpenStreetMap-Datenbank
  - **Baustellen-Abfrage:** `[out:json][timeout:25]; (node["highway"~"construction|proposed"](bbox); way["highway"~"construction|proposed"](bbox); relation["highway"~"construction|proposed"](bbox);); out geom;`
  - **Straßensperrungen:** `[out:json][timeout:25]; (way["access"="no"](bbox); way["motor_vehicle"="no"](bbox);); out geom;`
  - **Temporäre Hindernisse:** `[out:json][timeout:25]; (node["barrier"](bbox); way["barrier"](bbox);); out geom;`
  - **Vorteile:**
    - Kostenlos und DSGVO-konform ohne API-Limits
    - Community-gepflegte Daten mit lokaler Genauigkeit
    - Echtzeit-Updates durch Mapper vor Ort
    - Flexible Abfragesprache für spezifische Anforderungen
  - **Technische Integration:**
    - Bounding Box basiert auf aktueller Kartenansicht
    - Caching der Ergebnisse für 10 Minuten
    - Fallback auf cached Daten bei API-Überlastung
    - GeoJSON-Format für direkte Leaflet.js Integration
- **HERE Maps (Premium-Option):** Echtzeit-Verkehrsdaten bei erweiterten Anforderungen
  - Traffic Layer mit Jam Factor Visualisierung
  - Kostenpflichtig, aber umfassende Verkehrslage
- **Technische Umsetzung:**
  - Leaflet.js Layer-System für verschiedene Datenquellen
  - Automatische Aktualisierung alle 15 Minuten
  - Farbkodierte Darstellung: Orange (Baustellen), Rot (Sperrungen), Gelb (Verkehrsstörungen)
  - Popup-Informationen mit Details zu Sperrungen und Umleitungsempfehlungen

### 3. Manuelle Straßensperrungen (Disponent)

#### Sperrungen erstellen
- **Interaktive Kartenerstellung:** Disponent kann direkt auf der Karte Straßensperrungen einzeichnen
  - Polygon-Tool für Sperrgebiete
  - Linien-Tool für Straßenabschnitte
  - Punkt-Tool für lokale Hindernisse
- **Sperrungstypen:**
  - Vollsperrung (kein Durchgang)
  - Teilsperrung (eingeschränkter Verkehr)
  - Einsatzfahrzeug-Sperrung (nur für Zivilverkehr)
  - Temporäre Sperrung (mit Zeitbegrenzung)

#### Ausnahmen und Durchfahrtsmöglichkeiten
- **Einsatzfahrzeug-Korridore:** Definition von Bereichen innerhalb von Sperrungen
  - Markierung von Durchfahrtspunkten für Versorger
  - GPS-Koordinaten für exakte Positionierung
  - Breiten- und Höhenbeschränkungen
- **Berechtigungsebenen:**
  - Feuerwehr/Rettungsdienst: Vollzugang
  - Einsatzversorger: Definierte Korridore
  - Zivilverkehr: Gesperrt
- **Zusatzinformationen:**
  - Kontaktdaten vor Ort (Einsatzleitung)
  - Alternative Routen
  - Besondere Hinweise (z.B. "Rücksprache mit Einsatzleitung erforderlich")

#### Technische Umsetzung
- **Datenbank-Schema:**
  - Sperrungen-Tabelle mit GeoJSON-Geometrien
  - Ausnahmen-Tabelle mit Referenz zu Sperrungen
  - Benutzer-Berechtigungen für Erstellung/Bearbeitung
- **Real-time Updates:**
  - WebSocket-Verbindung für sofortige Benachrichtigung aller Versorger
  - Push-Notifications bei neuen Sperrungen im Einsatzgebiet
  - Automatische Routenneuberechnung bei aktiven Navigationen
- **Kartendarstellung:**
  - Rote Bereiche: Vollsperrungen
  - Orange Bereiche: Teilsperrungen
  - Grüne Linien: Einsatzfahrzeug-Korridore
  - Blaue Punkte: Durchfahrtspunkte mit Popup-Informationen

### 4. Team-Koordination

#### Team-Management
```
Team-Status:
├── Verfügbar (grün)
├── Unterwegs (gelb)
├── Im Einsatz (rot)
├── Pause (blau)
└── Nicht verfügbar (grau)
```

#### Funktionen
- Echtzeit-Statusübersicht aller Teams
- Automatische Benachrichtigungen bei Statusänderungen
- Team-Kapazitäten und Ausstattung
- Schichtplanung und Ablösung

### 4. Bedarfserfassung & Auftragsmanagement

#### Bedarfsanmeldung
- **WhatsApp-Bestellungen:** Einsatzkräfte senden Versorgungsanfragen per WhatsApp an den Disponenten
- **Manuelle Erfassung:** Disponent pflegt WhatsApp-Anforderungen händisch mit Standort in EV.Digital ein
- **Auftragserstellung:** Aus jeder erfassten Anforderung entsteht automatisch ein Auftrag für die Versorger
- Standardisierte Formulare für häufige Anfragen
- Freie Texteingabe für spezielle Anforderungen
- Prioritätsstufen (niedrig, normal, hoch, kritisch)
- Zeitstempel und Standortangabe
- **Kundendaten:** Minimale Erfassung der bestellenden Einsatzkraft (nur für Lieferung notwendig)

#### Bestellworkflow
```
Einsatzkraft → WhatsApp → Disponent → EV.Digital → Auftrag → Versorger → Auslieferung
```

#### Auftragsverwaltung
```
Auftragsstatus:
├── Neu (weiß)
├── Zugewiesen (gelb)
├── In Bearbeitung (blau)
├── Abgeschlossen (grün)
└── Storniert (rot)
```

### 5. Kommunikationssystem

#### Nachrichten
- Kurznachrichten zwischen Teams und Koordination
- Broadcast-Nachrichten für alle Teams
- Automatische Benachrichtigungen
- Nachrichtenverlauf mit Zeitstempel

#### Protokollierung
- Automatische Dokumentation aller Aktivitäten
- Export-Funktion für Nachbereitung
- Anonymisierte Statistiken
- DSGVO-konforme Datenhaltung

---

## 🔒 Datenschutz & Sicherheit

### Datenschutz-Prinzipien
- **Privacy by Design:** Datenschutz von Anfang an mitgedacht
- **Datenminimierung:** Nur notwendige Daten erfassen
- **Zweckbindung:** Daten nur für definierten Zweck verwenden
- **Löschkonzept:** Automatische Löschung nach Einsatzende

### Sicherheitsmaßnahmen
- HTTPS-Verschlüsselung für alle Verbindungen
- Sichere Session-Verwaltung mit HttpOnly Cookies
- Input-Validierung und Sanitization
- Rate Limiting gegen DoS-Angriffe
- Regelmäßige Security-Updates

### DSGVO-Compliance
- Einverständniserklärung bei Erstnutzung
- Recht auf Auskunft und Löschung
- Datenschutzerklärung in verständlicher Sprache
- Dokumentation der Datenverarbeitung

---

## 📱 Benutzeroberfläche & UX

### Design-Prinzipien
- **Mobile First:** Optimiert für Smartphone-Nutzung
- **Einfachheit:** Intuitive Bedienung ohne Schulung
- **Barrierefreiheit:** WCAG 2.1 AA konform
- **Offline-Fähigkeit:** Grundfunktionen ohne Internet

### Responsive Design
```
Breakpoints:
├── Mobile: 320px - 768px
├── Tablet: 768px - 1024px
└── Desktop: 1024px+
```

### Hauptansichten
1. **Dashboard:** Übersicht über aktuelle Situation
2. **Versorger-Karte:** 
   - Echtzeit-Standorte aller Versorger
   - Auftragsstandorte mit Status-Kennzeichnung
   - Dynamische Routenberechnung zur Anfahrt
   - Live-Koordination zwischen Versorgern
3. **Teams:** Team-Status und -verwaltung
4. **Aufträge:** Auftragsübersicht und -bearbeitung
5. **Kommunikation:** Nachrichten und Benachrichtigungen

---

## 🚀 Implementierungsplan

### Phase 1: Grundlagen (Wochen 1-4)
- [ ] Projektsetup und Entwicklungsumgebung
- [ ] Datenbank-Schema Design
- [ ] Basis-API Entwicklung
- [ ] Authentifizierungssystem
- [ ] Grundlegende Frontend-Struktur

### Phase 2: Kernfunktionen (Wochen 5-8)
- [ ] Benutzer- und Rollenverwaltung
- [ ] Team-Management System
- [ ] Basis-Kartenintegration
- [ ] Einfache Auftragserfassung
- [ ] Grundlegende Kommunikation

### Phase 3: Erweiterte Features (Wochen 9-12)
- [ ] Erweiterte Kartenfunktionen
- [ ] Offline-Funktionalität
- [ ] Push-Benachrichtigungen
- [ ] Reporting und Export
- [ ] Performance-Optimierung

### Phase 4: Testing & Deployment (Wochen 13-16)
- [ ] Umfassende Tests (Unit, Integration, E2E)
- [ ] Security-Audit
- [ ] Performance-Tests
- [ ] Deployment-Automatisierung
- [ ] Dokumentation und Schulungsmaterial

---

## 📊 Qualitätssicherung

### Testing-Strategie
- **Unit Tests:** 80%+ Code Coverage
- **Integration Tests:** API-Endpunkte und Datenbankoperationen
- **E2E Tests:** Kritische Benutzerflows
- **Performance Tests:** Lasttest mit 100+ gleichzeitigen Benutzern
- **Security Tests:** Penetrationstests und Vulnerability Scans

### Code Quality
- ESLint für Code-Standards
- Prettier für einheitliche Formatierung
- Pre-commit Hooks für automatische Checks
- Code Reviews für alle Pull Requests
- Continuous Integration mit GitHub Actions

---

## 🔧 Deployment & Betrieb

### Deployment-Optionen
1. **Docker Compose:** Standardmäßiges Deployment – ein `docker-compose up` startet alle Services
2. **Cloud-Hosting:** AWS/Azure/GCP bei Bedarf
3. **On-Premise:** Lokale Server für maximalen Datenschutz

### Monitoring & Wartung
- Health-Endpoint für Service-Überwachung
- Structured Logging mit Winston
- Automatische Backups der PostgreSQL-Datenbank
- Security Updates

### Skalierung (bei Bedarf nachrüstbar)
- Redis für Session-Caching bei steigender Nutzerzahl
- Load Balancer für horizontale Skalierung
- CDN für statische Assets
- Prometheus + Grafana für umfassendes Monitoring

---

## 💰 Kostenschätzung

### Entwicklungskosten (16 Wochen)
- **Frontend-Entwicklung:** 320 Stunden
- **Backend-Entwicklung:** 280 Stunden
- **DevOps & Deployment:** 80 Stunden
- **Testing & QA:** 120 Stunden
- **Projektmanagement:** 80 Stunden

**Gesamt:** ~880 Stunden

### Betriebskosten (monatlich)
- **Cloud-Hosting:** 50-200€
- **Monitoring & Tools:** 30-100€
- **Wartung & Support:** 200-500€
- **Backup & Security:** 20-50€

---

## 🎯 Erfolgskriterien

### Technische KPIs
- Verfügbarkeit: 99.5%+
- Antwortzeit: <2 Sekunden
- Mobile Performance: Lighthouse Score 90+
- Sicherheit: Keine kritischen Vulnerabilities

### Benutzer-KPIs
- Benutzerfreundlichkeit: SUS Score 80+
- Adoption Rate: 80% der Teams nutzen das System
- Fehlerrate: <1% der Aktionen führen zu Fehlern
- Support-Anfragen: <5% der Benutzer benötigen Hilfe

---

## 📚 Dokumentation

### Technische Dokumentation
- API-Dokumentation (OpenAPI/Swagger)
- Deployment-Handbuch
- Entwickler-Guidelines
- Architektur-Diagramme

### Benutzer-Dokumentation
- Benutzerhandbuch
- Video-Tutorials
- FAQ
- Troubleshooting-Guide

---

## 🔮 Zukunftsperspektiven

### Mögliche Erweiterungen
- Integration mit bestehenden Einsatzleitsystemen
- KI-basierte Routenoptimierung
- Erweiterte Analytics und Reporting
- Multi-Tenant Fähigkeiten für verschiedene Organisationen
- Mobile App für bessere Offline-Funktionalität

### Community & Open Source
- GitHub Repository für Community-Beiträge
- Plugin-System für Erweiterungen
- Regelmäßige Community-Meetings
- Dokumentation für Entwickler

---

## 📄 Anhang

### Technische Spezifikationen
- Minimum Browser-Support: Chrome 90+, Firefox 88+, Safari 14+
- Mobile OS: iOS 13+, Android 8+
- Server-Anforderungen: 4GB RAM, 2 CPU Cores, 50GB Storage
- Netzwerk: Mindestens 1 Mbit/s für optimale Performance

### Compliance & Standards
- DSGVO/GDPR Compliance
- ISO 27001 Security Standards
- WCAG 2.1 AA Accessibility
- OWASP Security Guidelines

---

**Erstellt:** 18.07.2025  
**Letzte Aktualisierung:** 16.04.2026  
**Version:** 1.4.0  
**Status:** Konzeptionierungsphase + Vision Driven Development + Tech-Stack finalisiert