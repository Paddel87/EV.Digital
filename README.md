# Einsatzversorgung Digital

> **Digitale Unterstützung für ehrenamtliche Versorgungsteams bei Großeinsätzen**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Status](https://img.shields.io/badge/Status-Konzeptphase-yellow.svg)](#)
[![Version](https://img.shields.io/badge/Version-1.5.0-blue.svg)](#changelog)
[![Last Commit](https://img.shields.io/badge/Last%20Commit-July%202025-brightgreen.svg)](#)
[![Development](https://img.shields.io/badge/Development-Vision%20Driven-purple.svg)](#-entwicklungsphilosophie-vision-driven-development)
[![AI Powered](https://img.shields.io/badge/AI%20Powered-Autonomous%20Development-orange.svg)](#)

---

## 📋 Über das Projekt

**Einsatzversorgung Digital** ist ein frei verfügbares Softwarekonzept zur digitalen Unterstützung ehrenamtlicher Versorgungsteams bei Großeinsätzen. Das Projekt richtet sich an Gewerkschaften, die bei Großlagen die Versorgung ihrer Kolleginnen und Kollegen im Dienst organisieren – insbesondere durch mobile Teams, die Snacks und Getränke bereitstellen.

### 🎯 Zielgruppe

- Gewerkschaften mit eigener Einsatzbetreuung
- Ehrenamtliche Versorgungsteams bei Großeinsätzen
- Disponenten für Getränke- und Snackversorgung

### ✅ Nutzen der Anwendung

Die Software unterstützt insbesondere:

- **📱 Direktbestellung** – Einsatzkräfte bestellen per QR-Code/Link, ohne App oder Registrierung
- **📦 Bestandsverwaltung** – Lokales Lager und mobiles Lager im Überblick, Verfügbarkeit in Echtzeit
- **🗺️ Navigation** – Orientierung für ortsunkundige Versorgungsteams
- **🤝 Versorgungskoordination** – Übersicht über Anfragen, Teams und Aufträge
- **📋 Dokumentation** – Quittierung von Übergaben, Statusanzeige
- **📡 Kommunikation** – Rückmeldungen ohne private Kanäle
- **🔒 Datenschutz** – keine WhatsApp-Gruppen, kein App-Zwang

---

## 🚀 Geplante Funktionen

### 🗺️ Navigation & Orientierung
- Kartenanzeige mit relevanten Orten (z. B. Versorgungspunkte, Treffpunkte)
- OpenStreetMap + Echtzeit-Verkehrsdaten via TomTom (serverseitig)
- Disponent filtert irrelevante Verkehrsmeldungen (z.B. Event-Sperrungen)
- Mobile Nutzung ohne App-Installation

### 📱 Bestell-Interface für Einsatzkräfte
- QR-Code scannen → Standort freigeben → Sortiment wählen → Bestellen
- Bestellstatus live verfolgen (Bestellt → Unterwegs → Geliefert)
- Kein Account, keine App, keine Registrierung

### 🤝 Teamkoordination
- Anmeldung per QR-Code oder PIN
- Statusübersicht aller Teams (frei, unterwegs, im Einsatz)
- Zuweisung und Rückmeldung von Versorgungsaufträgen

### 📋 Bedarfserfassung
- Bestellungen kommen direkt über das Bestell-Interface
- Disponent priorisiert, bündelt und verteilt
- WhatsApp als Fallback bei Bedarf

### 📡 Kommunikation & Übersicht
- Kurze Rückfragen oder Statusänderungen möglich (textbasiert)
- Zentrale Übersicht für Koordinationsteams
- Automatisierte Protokollierung zur internen Nachbereitung

---

## 🏗️ Technische Architektur

### Geplanter Tech-Stack

**Frontend:**
- Vue.js 3 + Vuetify 3
- Progressive Web App (PWA)
- OpenStreetMap mit Leaflet.js
- Responsive Design (Mobile First)

**Backend:**
- Node.js mit Express.js + Socket.IO
- RESTful API mit Echtzeit-Updates
- JWT-basierte Authentifizierung

**Datenbank:**
- PostgreSQL mit PostGIS für Geo- und strukturierte Daten

**Infrastruktur:**
- Docker Compose (ein Befehl startet alles)
- Durchgängig TypeScript

---

## 📁 Projektstruktur

```
EV.Digital/
├── frontend/              # Vue.js 3 + Vuetify (PWA)
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/               # Node.js + Express + Socket.IO
│   ├── src/
│   ├── tests/
│   └── package.json
├── database/              # PostgreSQL + PostGIS
│   ├── migrations/
│   └── seeds/
├── docs/                  # Dokumentation
│   ├── api/               # API-Dokumentation (OpenAPI/Swagger)
│   └── user/              # Benutzerhandbuch
├── docker-compose.yml     # Ein Befehl startet alles
├── KONZEPT.md             # Detailliertes Projektkonzept
├── CHANGELOG.md           # Änderungsprotokoll
└── README.md
```

---

## ⚙️ Projektstatus

**Aktueller Status:** 🟡 Konzeptionierungsphase

- ✅ Projektidee und Zielgruppe definiert
- ✅ Funktionsumfang spezifiziert
- ✅ Technische Architektur geplant
- ⏳ Implementierung steht noch aus
- ⏳ Testing und Deployment geplant

### 📋 Changelog

Alle Änderungen werden im [CHANGELOG.md](CHANGELOG.md) dokumentiert.

**Aktuelle Version:** 1.5.0 (16.04.2026)
- ✅ Bestell-Interface für Einsatzkräfte (QR-Code → Sortiment → Bestellen)
- ✅ Medienbruch eliminiert – kein WhatsApp-Umweg mehr nötig
- ✅ Sortimentsverwaltung durch Disponent

### Roadmap

| Phase | Zeitraum | Status | Beschreibung |
|-------|----------|--------|--------------|
| **Konzept** | Juli 2025 | 🟡 In Arbeit | Detaillierte Planung und Spezifikation |
| **MVP** | Aug-Sep 2025 | ⏳ Geplant | Grundfunktionen und Prototyp |
| **Beta** | Okt-Nov 2025 | ⏳ Geplant | Testing mit echten Anwendern |
| **Release** | Dez 2025 | ⏳ Geplant | Produktive Version |

---

## 🤝 Mitwirken

Dieses Projekt ist Open Source und lebt von der Community! Wir freuen uns über jede Art von Beitrag:

### Wie kann ich helfen?

- **💡 Ideen:** Funktionsvorschläge und Verbesserungen
- **🐛 Bugs:** Fehler melden und beheben
- **📝 Dokumentation:** Verbesserung der Dokumentation
- **💻 Code:** Entwicklung neuer Features
- **🧪 Testing:** Testen der Anwendung
- **🎨 Design:** UI/UX Verbesserungen

### Erste Schritte

1. **Repository forken**
2. **Issue erstellen** oder bestehendes Issue kommentieren
3. **Feature Branch** erstellen (`git checkout -b feature/AmazingFeature`)
4. **Änderungen committen** (`git commit -m 'Add some AmazingFeature'`)
5. **Branch pushen** (`git push origin feature/AmazingFeature`)
6. **Pull Request** erstellen

### Entwicklungsrichtlinien

- Code-Style: ESLint/Prettier für TypeScript
- Tests: Mindestens 80% Code Coverage
- Commits: Conventional Commits Format
- Dokumentation: Alle neuen Features dokumentieren

---

## 🔒 Datenschutz & Sicherheit

### Datenschutz-Prinzipien

- **Privacy by Design:** Datenschutz von Anfang an mitgedacht
- **Datenminimierung:** Nur notwendige Daten erfassen
- **Transparenz:** Klare Datenschutzerklärung
- **Kontrolle:** Benutzer haben Kontrolle über ihre Daten

### Sicherheitsmaßnahmen

- HTTPS-Verschlüsselung für alle Verbindungen
- Sichere Authentifizierung und Session-Management
- Regelmäßige Security-Updates
- Input-Validierung und Sanitization
- OWASP-konforme Entwicklung

---

## 📚 Dokumentation

- **[Detailliertes Konzept](docs/KONZEPT.md)** - Umfassende Projektbeschreibung
- **[API-Dokumentation](docs/api/)** - REST API Spezifikation
- **[Benutzerhandbuch](docs/user/)** - Anleitung für Endbenutzer
- **[Entwickler-Guide](docs/developer/)** - Setup und Entwicklung

---

## 🛠️ Installation & Setup

> **Hinweis:** Das Projekt befindet sich noch in der Konzeptphase. Eine lauffähige Version ist noch nicht verfügbar.

### Voraussetzungen (geplant)

- Node.js 18+
- PostgreSQL 15+ (mit PostGIS)
- Docker + Docker Compose (empfohlen)

### Lokale Entwicklung (geplant)

```bash
# Repository klonen
git clone https://github.com/paddel87/EV.Digital.git
cd EV.Digital

# Alles mit Docker Compose starten
docker-compose up

# Oder manuell:
npm install
npm run db:setup
npm run dev
```

---

## 🧪 Testing

### Geplante Test-Strategie

- **Unit Tests:** Vitest für Komponenten und Funktionen
- **Integration Tests:** API-Endpunkte und Datenbankoperationen
- **E2E Tests:** Cypress/Playwright für Benutzerflows
- **Performance Tests:** Lasttest mit Artillery/Locust

```bash
# Tests ausführen (geplant)
npm test              # Unit Tests
npm run test:e2e      # E2E Tests
npm run test:perf     # Performance Tests
```

---

## 🚀 Deployment

### Deployment-Optionen (geplant)

1. **Docker Compose** - Standard-Deployment (ein Befehl startet alles)
2. **Cloud Platforms** - AWS, Azure, GCP bei Bedarf
3. **On-Premise** - Eigene Server für maximalen Datenschutz

### Umgebungen

- **Development:** Lokale Entwicklungsumgebung via Docker Compose
- **Production:** Live-System für Endbenutzer

---

## 📊 Monitoring & Analytics

### Geplante Metriken

- **Performance:** Antwortzeiten, Durchsatz
- **Verfügbarkeit:** Uptime, Error Rates
- **Benutzer:** Aktive Benutzer, Feature-Nutzung
- **Business:** Erfolgreiche Versorgungsaufträge

### Tools

- **Logging:** Winston (Structured Logging)
- **Monitoring:** Health-Endpoint + bei Bedarf nachrüstbar (Prometheus + Grafana)
- **Analytics:** Selbst-gehostet, DSGVO-konform

---

## 🌍 Community

### Kommunikation

- **GitHub Issues:** Bug Reports und Feature Requests
- **GitHub Discussions:** Allgemeine Diskussionen
- **Matrix Chat:** Echtzeitkommunikation (geplant)
- **Newsletter:** Projekt-Updates (geplant)

### Events

- **Community Calls:** Monatliche Online-Meetings
- **Hackathons:** Gemeinsame Entwicklungssprints
- **Konferenzen:** Präsentation auf relevanten Events

---

## 📄 Lizenz

Dieses Projekt ist unter der **MIT-Lizenz** veröffentlicht. Siehe [LICENSE](LICENSE) für Details.

### Was bedeutet das?

- ✅ Kommerzielle Nutzung erlaubt
- ✅ Modifikation erlaubt
- ✅ Distribution erlaubt
- ✅ Private Nutzung erlaubt
- ❌ Keine Garantie oder Haftung
- ❌ Keine Unterstützung garantiert

---

## ⚠️ Haftungsausschluss

Die Nutzung erfolgt auf eigene Verantwortung. Es besteht **kein Anspruch auf Vollständigkeit, Fehlerfreiheit oder Unterstützung**. Für Betrieb und Einbindung ist der jeweilige Betreiber selbst verantwortlich.

---

## 📞 Kontakt

- **GitHub:** [Issues](https://github.com/paddel87/EV.Digital/issues) für Bug Reports
- **Email:** [Kontakt-Email] für allgemeine Anfragen
- **Matrix:** [Matrix-Raum] für Community-Chat

---

## 🙏 Danksagungen

Dieses Projekt wird ermöglicht durch:

- Die Open Source Community
- Ehrenamtliche Entwickler:innen
- Feedback von Einsatzkräften und Gewerkschaften
- Unterstützung durch [Sponsoren/Partner]

---

**Erstellt mit ❤️ für die ehrenamtliche Einsatzversorgung**

*Letzte Aktualisierung: Juli 2025*