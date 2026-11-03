# Engagement Design — Modulwebsite

Studierendenorientierte **SvelteKit**-Website für das Bachelor-Modul **Engagement Design (ED)** — Nachfolger von Gamification (GAM). Die Site bündelt Modulüberblick, Inputphase, Framework-Vertiefungen, Anwendungsfelder und Projektphase in einer modernen, zugänglichen Oberfläche (Deutsch).

Inhaltliche Grundlage: Modulplanung GAM → ED (Inputphase, Frameworks, Anwendungsfelder, Projektphase).

## Voraussetzungen

- [Node.js](https://nodejs.org/) (LTS empfohlen, z. B. 20+)
- npm (im Projekt mitgeliefert)

## Installation

```sh
cd engagement-design
npm install
```

## Entwicklung

Lokalen Dev-Server starten (Standard: [http://localhost:5173](http://localhost:5173)):

```sh
npm run dev

# Browser automatisch öffnen
npm run dev -- --open
```

## Production Build

```sh
npm run build
npm run preview
```

Für Deployment ggf. einen [SvelteKit-Adapter](https://svelte.dev/docs/kit/adapters) konfigurieren (`@sveltejs/adapter-auto` ist voreingestellt).

## Projektstruktur (kurz)

- `src/routes/` — Seiten (Start, Modul, Frameworks, Anwendungsfelder)
- `src/lib/data/` — Inhalte (Inputphase, Framework-Artikel, Anwendungsfelder)
- `src/lib/components/` — Layout, Navigation, UI-Bausteine

## Technik

- [SvelteKit 3](https://kit.svelte.dev/) · [Svelte 5](https://svelte.dev/)
- TypeScript

## Lizenz

Privates Lehrprojekt — Nutzung im Kontext des ED-Moduls.
