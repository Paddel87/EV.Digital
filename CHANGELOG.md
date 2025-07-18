# Changelog

Alle wichtigen Änderungen an diesem Projekt werden in dieser Datei dokumentiert.

Das Format basiert auf [Keep a Changelog](https://keepachangelog.com/de/1.0.0/),
und dieses Projekt folgt der [Semantischen Versionierung](https://semver.org/lang/de/).

## [Unreleased]

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