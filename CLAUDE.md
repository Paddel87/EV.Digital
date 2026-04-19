# CLAUDE.md

> Gedächtnis und Nord-Stern für jede Claude-Session in diesem Repository.
> Lies diese Datei **zuerst**. Wenn sie widerspricht, was du im Code siehst, hat der Code recht – dann aktualisiere diese Datei am Ende der Session.

---

## 1. Was ist dieses Projekt?

**Einsatzversorgung Digital (`ev-digital`)** – Softwarekonzept und Implementierung zur digitalen Unterstützung ehrenamtlicher Versorgungsteams bei Großeinsätzen (Bestellung, Koordination, Karte, Nachschub).

- **Markenname:** `EV.Digital` (nur in UI-Texten, nie in Code/Ordnern)
- **Technischer Name:** `ev-digital` (kebab-case) bzw. `ev_digital` (snake_case)
- **Lizenz:** MIT, öffentliches Repo auf GitHub `Paddel87/ev-digital`
- **Primärsprache (Kommunikation & Doku):** Deutsch

## 2. Aktueller Stand

**Single Source of Truth für Status:** [FAHRPLAN.md](FAHRPLAN.md) → „🗺️ Meilensteine im Überblick".

Wenn du Stand brauchst:

```bash
git log --oneline -5
git tag --sort=-creatordate | head -3
grep -A 12 "## 🗺️" FAHRPLAN.md
```

Aktueller Release-Tag und die zugehörige Phase gelten als „erledigt". Alles darüber hinaus ist offen.

## 3. Wie du hier arbeitest

### Grundprinzipien (aus [FAHRPLAN.md](FAHRPLAN.md) §Leitlinien)

- **Bottom-to-Top.** Erst Infrastruktur, dann Features. Keine vorgezogenen Kür-Features.
- **Vertikale Scheiben ab Phase 3.** Backend + Frontend + Tests + Doku gemeinsam.
- **MVP vor Kür.** Der MVP endet nach Phase 5 (Karte & Navigation). Phase 10 ist explizit Zukunftsmusik.
- **DSGVO by Design.** In _jeder_ Phase mitdenken – nicht anhängen.
- **Namenskonvention strikt einhalten.** `EV.Digital` ausschließlich in UI-Text.

### Tech-Stack (fest verdrahtet – siehe [KONZEPT.md](KONZEPT.md))

- Backend: Node 20 + Express + Socket.IO + TypeScript (strict)
- Frontend: Vue 3 + Vuetify 3 + Vite + Pinia + Vue Router + TypeScript (strict, PWA)
- DB: PostgreSQL 16 + PostGIS 3.4 (Extensions `postgis`, `pgcrypto`)
- Auth: JWT + HttpOnly-Cookie-Session für Besteller
- Karte: Leaflet + OpenStreetMap-Tiles, TomTom serverseitig
- Tests: Vitest (Unit), Playwright (E2E ab Phase 9), Testcontainers
- Monorepo via **npm workspaces** (nicht pnpm/yarn)

### Entwicklungs-Workflow (Pflicht)

Detailliert in [CONTRIBUTING.md](CONTRIBUTING.md). Kernregeln:

1. **Branch-Präfixe:** `feature/`, `fix/`, `docs/`, `chore/`, `refactor/`, `test/`.
2. **Commits:** Conventional Commits (erzwungen via commitlint). Erlaubte Typen: `feat, fix, docs, chore, refactor, test, build, ci, perf, revert, style`.
3. **Kein Direct-Push auf `main`.** Alles läuft über PR mit grüner CI.
4. **Squash-Merge für Phasen-Abschluss-PRs**, damit auf `main` pro Phase genau ein Commit entsteht. Sonst normaler Merge.
5. **CI muss grün sein:** `lint`, `format:check`, `typecheck`, `test`, `commitlint`, `docker-build` (backend + frontend).
6. **Husky-Hooks** feuern lokal (pre-commit lint-staged, commit-msg commitlint). Nicht mit `--no-verify` umgehen.

### Phasen-Abschluss-Ritual

Jede Phase endet mit:

1. **Akzeptanzkriterien grün** (aus FAHRPLAN, funktional + nicht-funktional lokal verifizieren).
2. **Doku aktualisiert:** CHANGELOG unter `[Unreleased]`, FAHRPLAN-Status-Spalte, README-Statusbadges, KONZEPT bei konzeptionellen Änderungen.
3. **PR mit grüner CI → Squash-Merge auf `main`.**
4. **Tag `v0.N.0`** (annotiert, mit Release-Notes) + GitHub-Release.
5. **Diese Datei (`CLAUDE.md`) aktualisieren**, falls sich Konventionen oder Stand geändert haben.
6. **Memory aktualisieren** (`~/.claude/projects/-Users-patrickschulz-ev-digital/memory/`) mit neuem Projektstatus.

### Was du **nicht** tust

- Features über die aktuelle Phase hinaus implementieren, ohne den User zu fragen.
- Barcode-Warenwirtschaft, Statistiken, KI-Routing berühren (Phase 10, explizit Post-MVP).
- Den Paketmanager wechseln (npm workspaces ist Konsens).
- Direkt auf `main` committen.
- `.env` oder sonstige Geheimnisse committen (nur `.env.example` pflegen).
- Echte personenbezogene Daten in Tests, Seeds oder Commits.
- Husky-Hooks mit `--no-verify` umgehen.
- Externe Services (TomTom) vom Frontend direkt ansprechen – alles serverseitig cachen und per Socket.IO verteilen (KONZEPT §5).

## 4. Vor jedem größeren Schritt

1. `git status && git log --oneline -5` – wo stehen wir?
2. `cat FAHRPLAN.md | head -40` – welche Phase ist dran?
3. `cat CHANGELOG.md | head -30` – was steht unter `[Unreleased]`?
4. Memory lesen (lädt automatisch), gegen Repo-Stand verifizieren.
5. Plan mit dem User abstimmen, **bevor** du scaffoldest oder große Änderungen beginnst.

Bei Umgebungs-abhängigen Tasks (Scaffolding, CI, Docker): **Toolchain vorab prüfen** (`which node npm docker gh brew`, `gh auth status`). Fehlende Tools als eine einzige Liste präsentieren, bevor du loslegst.

## 5. Projekt-Kompass

| Wofür steht...                            | Datei                                    |
| ----------------------------------------- | ---------------------------------------- |
| Projektidee & Rollenmodell & Tech-Details | [KONZEPT.md](KONZEPT.md)                 |
| Phasen-Plan + Meilensteine + Status       | [FAHRPLAN.md](FAHRPLAN.md)               |
| Änderungshistorie                         | [CHANGELOG.md](CHANGELOG.md)             |
| Entwickler-Workflow                       | [CONTRIBUTING.md](CONTRIBUTING.md)       |
| Schnellstart & Projektüberblick           | [README.md](README.md)                   |
| Datenbank-Init                            | [database/README.md](database/README.md) |

## 6. Kommunikationsstil

- Deutsch, knapp, auf den Punkt.
- Vor dem Implementieren kurz Plan skizzieren und Freigabe einholen.
- Tool-Outputs nicht narrieren – nur Ergebnisse/Entscheidungen melden.
- Fehler direkt mit Ursache und Fix erklären, nicht wortreich drum herumreden.

---

_Wenn du diese Datei nicht gelesen hast, hast du die Aufgabe noch nicht verstanden. Lies sie, dann fang an._
