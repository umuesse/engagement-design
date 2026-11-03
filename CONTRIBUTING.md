# Mitwirken am Repository

Danke, dass du an **Engagement Design** mitarbeitest. Ab sofort arbeiten wir mit **Feature-Branches** und **Pull Requests** — **`main` wird nicht mehr direkt angesteuert**.

## Ablauf

1. **Aktuellen Stand holen**
   ```sh
   git checkout main
   git pull origin main
   ```

2. **Feature-Branch anlegen** (von `main`)
   ```sh
   git checkout -b feature/kurze-beschreibung
   ```
   - **`feature/…`** — neue Inhalte, UI, Diagramme, größere Erweiterungen  
   - **`fix/…`** — Bugfixes, kleine Korrekturen  

   Beispiele: `feature/sdt-diagrams-v2`, `fix/framework-500`

3. **Lokal entwickeln und testen**
   ```sh
   npm install
   npm run dev
   npm run build
   ```

4. **Committen** (klare Commit-Messages, z. B. Conventional Commits)

5. **Branch pushen**
   ```sh
   git push -u origin feature/kurze-beschreibung
   ```

6. **Pull Request auf GitHub öffnen** (Ziel: `main`)
   - Beschreibung auf **Deutsch**: Was, warum, wie getestet
   - Review abwarten — **kein Merge ohne Freigabe** (Standard)

   Mit [GitHub CLI](https://cli.github.com/):
   ```sh
   gh pr create --base main --head feature/kurze-beschreibung
   ```

7. **Nach dem Merge:** lokal wieder auf `main` wechseln und pullen; alten Branch optional löschen.

## Qualität (Kurz)

- Framework-Diagramme: sichtbare **Beschriftung**, **`figcaption`** und **`aria-labelledby`** / Screenreader-Text über `FrameworkDiagram`
- Vor dem PR: **`npm run build`** grün

## Hinweis

Ältere Commits können noch direkt auf `main` gelandet sein; ab diesem Workflow gilt Branch + PR für alle weiteren Änderungen.
