# Mitwirken

Vielen Dank, dass du bei **Einsatzversorgung Digital** mitmachst! Dieses Dokument beschreibt den Entwicklungsworkflow ab Phase 0.

---

## 1. Setup

**Voraussetzungen**

- Node.js **20** (siehe [.nvmrc](.nvmrc) – empfohlen via `nvm use`)
- npm **≥ 10**
- Docker + Docker Compose (für Postgres/PostGIS und vollständige Umgebung)

**Lokaler Schnellstart**

```bash
git clone https://github.com/paddel87/ev-digital.git
cd ev-digital
cp .env.example .env
npm install
docker compose up
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3000 (Healthcheck: `/healthz`)
- Postgres: localhost:5432 (Benutzer/Passwort aus `.env`)

Zum Entwickeln ohne Docker (nur Node-Seite):

```bash
npm run dev          # startet backend + frontend parallel
npm run dev:backend  # nur Backend
npm run dev:frontend # nur Frontend
```

---

## 2. Monorepo-Layout

```
ev-digital/
├── backend/    # Express + Socket.IO (TypeScript)
├── frontend/   # Vue 3 + Vuetify 3 (TypeScript, Vite, PWA)
├── database/   # Init-SQL (PostGIS), Migrationen, Seeds
├── docs/       # API-, User- und Developer-Doku
└── docker-compose.yml
```

Paketmanagement: **npm workspaces**. Installiere Abhängigkeiten _immer_ vom Repo-Root (`npm install`), damit die Workspaces verlinkt bleiben.

---

## 3. Branch- und Commit-Konvention

- Feature-Branches: `feature/<kurzbeschreibung>`
- Fix-Branches: `fix/<kurzbeschreibung>`
- Dokumentation: `docs/<kurzbeschreibung>`

**Commits folgen [Conventional Commits](https://www.conventionalcommits.org/).** Der `commit-msg`-Hook prüft das lokal, `commitlint` auch in CI.

Beispiele:

```
feat(backend): add /healthz endpoint
fix(frontend): correct Vuetify theme bootstrapping
docs: expand contributing quickstart
chore(ci): add docker-build job
```

Erlaubte Typen: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `build`, `ci`, `perf`, `revert`, `style`.

---

## 4. Code-Qualität

Vor jedem Commit laufen über `lint-staged` automatisch:

- ESLint (`--fix`)
- Prettier (`--write`)

Manuell aufrufbar:

```bash
npm run lint         # ESLint über gesamtes Repo
npm run format       # Prettier schreibt
npm run format:check # Prettier nur prüfen
npm run typecheck    # tsc in allen Workspaces
npm test             # Vitest in allen Workspaces
```

TypeScript ist projektweit im `strict`-Modus inklusive `noUncheckedIndexedAccess`. Neue Dateien sind Typ-rein zu halten; `any` nur mit Begründung.

---

## 5. Pull Requests

1. Issue referenzieren (oder neu eröffnen)
2. Branch erstellen, Änderung umsetzen, Tests + Lint grün
3. PR öffnen: klare Beschreibung, Bezug zum [FAHRPLAN](FAHRPLAN.md) (Phase/Feature)
4. CI muss grün sein (`lint`, `typecheck`, `test`, `docker-build`, `commitlint`)
5. Review abwarten, Feedback einarbeiten

**Definition of Done pro PR**

- [ ] Tests ergänzt/aktualisiert
- [ ] Dokumentation aktualisiert (README, CHANGELOG, KONZEPT bei Bedarf)
- [ ] CI grün
- [ ] Keine offenen Review-Kommentare

---

## 6. Datenschutz & Sicherheit

Dieses Projekt verarbeitet potenziell personenbezogene Daten von Einsatzkräften. Bitte ab **jeder** Änderung mitdenken:

- Keine echten personenbezogenen Daten in Commits, Tests oder Seeds
- Keine Geheimnisse (API-Keys, Passwörter) commiten – nur `.env.example` pflegen
- Neue Endpunkte brauchen Threat-Modelling (Phase 1+)
- Bei Unsicherheit lieber nachfragen als raten

---

## 7. Community

- **Issues:** GitHub – Bugs, Feature-Vorschläge, Fragen
- **Discussions:** GitHub – allgemeine Diskussion
- **Matrix:** geplant (siehe README)

Wir erwarten einen respektvollen Umgang im Sinne des [Contributor Covenant](https://www.contributor-covenant.org/).
