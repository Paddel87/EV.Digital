# Datenbank

PostgreSQL 16 mit PostGIS 3.4.

## Struktur

- `init/` – wird beim ersten Start des Containers automatisch ausgeführt (via `docker-entrypoint-initdb.d`). Aktuell nur Extensions.
- `migrations/` – versionierte Schema-Änderungen (Tool-Wahl in Phase 1).
- `seeds/` – optionale Startdaten für Entwicklung und Tests.

Produktives Schema (Tabellen, Indizes, Policies) entsteht in **Phase 1**.
