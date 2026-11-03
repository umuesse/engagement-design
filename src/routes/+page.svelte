<script lang="ts">
	const phases = [
		{
			title: 'Inputphase',
			duration: '4–5 Tage',
			href: '/modul/inputphase',
			summary:
				'Theoretische und konzeptionelle Grundlagen: Was ist Engagement Design, Motivationspsychologie, Frameworks, Ethik und Methoden.'
		},
		{
			title: 'Projektphase',
			duration: 'Eigenständig',
			href: '/modul/projektphase',
			summary:
				'Eigenständige Bearbeitung eines Engagement-Design-Projekts — Anwendung der Frameworks in einem realen Kontext.'
		}
	];

	const shifts = [
		'Psychologische Grundlagen statt Oberflächen-Mechaniken',
		'Ethische Verantwortung und kritische Perspektive',
		'Systemisches Denken über einzelne „Game“-Elemente',
		'Menschenzentrierte Gestaltung bedeutsamer Erfahrungen'
	];
</script>

<svelte:head>
	<title>Engagement Design — Modulüberblick</title>
</svelte:head>

<section class="hero" aria-labelledby="hero-title">
	<p class="eyebrow">Bachelor · Umbenennung von Gamification (GAM)</p>
	<h1 id="hero-title">Engagement Design</h1>
	<p class="hero-lead">
		Engagement Design ist breiter und präziser als Gamification: Es geht nicht primär um Punkte, Abzeichen
		und Ranglisten, sondern um die gezielte Gestaltung von Erfahrungen, die Menschen motivieren, binden
		und bedeutsam beschäftigen.
	</p>
</section>

<section class="panel" aria-labelledby="shift-title">
	<h2 id="shift-title">Warum der Shift?</h2>
	<ul class="shift-list">
		{#each shifts as point (point)}
			<li>{point}</li>
		{/each}
	</ul>
</section>

<section class="panel" aria-labelledby="modul-title">
	<h2 id="modul-title">Modulstruktur</h2>
	<p class="section-intro">
		Das Modul gliedert sich in eine kompakte Inputphase und eine anschließende Projektphase — beide Bereiche
		werden in den nächsten Goldfish-Slices mit Inhalten gefüllt.
	</p>
	<div class="phase-grid">
		{#each phases as phase (phase.href)}
			<article class="phase-card">
				<h3>{phase.title}</h3>
				<p class="phase-meta">{phase.duration}</p>
				<p>{phase.summary}</p>
				<a class="card-link" href={phase.href}>Zur {phase.title} →</a>
			</article>
		{/each}
	</div>
</section>

<section class="panel links" aria-labelledby="explore-title">
	<h2 id="explore-title">Weiter erkunden</h2>
	<ul class="link-list">
		<li><a href="/frameworks">Frameworks &amp; theoretische Basis</a></li>
		<li><a href="/anwendungsfelder">Anwendungsfelder für Projektarbeit</a></li>
	</ul>
</section>

<style>
	.hero {
		margin-bottom: 2.5rem;
		max-width: 44rem;
	}

	.eyebrow {
		margin: 0 0 0.75rem;
		font-size: 0.8125rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-muted);
	}

	.hero h1 {
		margin: 0 0 1rem;
		font-size: clamp(2.25rem, 6vw, 3rem);
		line-height: 1.08;
		letter-spacing: -0.03em;
	}

	.hero-lead {
		margin: 0;
		font-size: 1.125rem;
		line-height: 1.65;
		color: var(--color-muted);
	}

	.panel {
		margin-bottom: 2.5rem;
		padding: 1.5rem;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 0.75rem;
	}

	.panel h2 {
		margin: 0 0 1rem;
		font-size: 1.375rem;
	}

	.shift-list {
		margin: 0;
		padding-left: 1.25rem;
		display: grid;
		gap: 0.5rem;
	}

	.section-intro {
		margin: 0 0 1.25rem;
		color: var(--color-muted);
		max-width: 40rem;
	}

	.phase-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	}

	.phase-card {
		padding: 1rem 1.1rem;
		border-radius: 0.5rem;
		background: var(--color-surface-elevated);
		border: 1px solid var(--color-border);
	}

	.phase-card h3 {
		margin: 0 0 0.35rem;
		font-size: 1.125rem;
	}

	.phase-meta {
		margin: 0 0 0.75rem;
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-accent-strong);
	}

	.phase-card p {
		margin: 0 0 1rem;
		font-size: 0.9375rem;
		line-height: 1.55;
	}

	.card-link {
		font-weight: 600;
		text-decoration: none;
	}

	.card-link:hover {
		text-decoration: underline;
	}

	.link-list {
		margin: 0;
		padding-left: 1.25rem;
		display: grid;
		gap: 0.35rem;
	}
</style>
