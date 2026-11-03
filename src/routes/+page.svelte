<script lang="ts">
	const phases = [
		{
			title: 'Inputphase',
			duration: '4–5 Tage',
			href: '/modul/inputphase',
			summary:
				'Theoretische Grundlagen: Begriffsklärung, Motivationspsychologie, Frameworks, Ethik und Methoden — mit Lernzielen pro Tag.',
			accent: 'violet'
		},
		{
			title: 'Projektphase',
			duration: 'Eigenständig',
			href: '/modul/projektphase',
			summary:
				'Dein Engagement-Design-Projekt: Frameworks anwenden, kritisch reflektieren, Ergebnisse dokumentieren.',
			accent: 'teal'
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
	<p class="eyebrow">Studierenden-Modul · GAM → ED</p>
	<h1 id="hero-title">Gestalte Erfahrungen, die wirklich binden.</h1>
	<p class="hero-lead">
		Engagement Design geht über Gamification hinaus: nicht Punkte und Badges als Selbstzweck, sondern
		motivierende, bedeutsame Erfahrungen — psychologisch fundiert, ethisch reflektiert, menschenzentriert.
	</p>
	<div class="hero-actions">
		<a class="cta" href="/modul/inputphase">Inputphase entdecken</a>
		<a class="cta secondary" href="/modul/projektphase">Zur Projektphase</a>
	</div>
</section>

<section class="glass-panel" aria-labelledby="shift-title">
	<h2 id="shift-title">Warum der Shift?</h2>
	<ul class="shift-list">
		{#each shifts as point (point)}
			<li>{point}</li>
		{/each}
	</ul>
</section>

<section class="glass-panel" aria-labelledby="modul-title">
	<h2 id="modul-title">Modulstruktur</h2>
	<p class="section-intro text-muted">
		Zuerst kompakt lernen, dann anwenden: Die Inputphase bereitet dich Schritt für Schritt auf dein Projekt
		vor.
	</p>
	<div class="phase-grid">
		{#each phases as phase (phase.href)}
			<article class="phase-card {phase.accent}">
				<h3>{phase.title}</h3>
				<p class="phase-meta">{phase.duration}</p>
				<p>{phase.summary}</p>
				<a class="link-arrow" href={phase.href}>Zur {phase.title} →</a>
			</article>
		{/each}
	</div>
</section>

<section class="glass-panel links" aria-labelledby="explore-title">
	<h2 id="explore-title">Weiter erkunden</h2>
	<ul class="link-list">
		<li><a href="/frameworks">Frameworks &amp; theoretische Basis</a></li>
		<li><a href="/anwendungsfelder">Anwendungsfelder für dein Projekt</a></li>
		<li><a href="/modul/projektphase">Projektphase — Ablauf &amp; Deliverables</a></li>
	</ul>
</section>

<style>
	.hero {
		margin-bottom: 2.5rem;
		max-width: 46rem;
		padding: 0.5rem 0 0.25rem;
	}

	.eyebrow {
		margin: 0 0 0.85rem;
		font-size: 0.78rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-accent-strong);
	}

	.hero h1 {
		margin: 0 0 1rem;
		font-size: clamp(2.1rem, 6vw, 3.25rem);
		line-height: 1.05;
		letter-spacing: -0.03em;
		background: var(--gradient-brand);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

	.hero-lead {
		margin: 0 0 1.35rem;
		font-size: 1.125rem;
		line-height: 1.65;
		color: var(--color-muted);
	}

	.cta {
		display: inline-flex;
		align-items: center;
		padding: 0.65rem 1.15rem;
		border-radius: 999px;
		background: var(--gradient-brand);
		color: #fff;
		font-weight: 700;
		text-decoration: none;
		box-shadow: var(--shadow-md);
		transition: transform var(--motion-fast), box-shadow var(--motion-fast);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}

	.cta:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-lg);
		color: #fff;
		text-decoration: none;
	}

	.cta.secondary {
		background: var(--color-surface-solid);
		color: var(--color-accent-strong);
		border: 1px solid var(--color-border);
		box-shadow: var(--shadow-sm);
	}

	.cta.secondary:hover {
		color: var(--color-accent-strong);
		border-color: rgba(124, 58, 237, 0.35);
	}

	.glass-panel {
		margin-bottom: 1.35rem;
	}

	.glass-panel h2 {
		margin: 0 0 1rem;
		font-size: 1.35rem;
	}

	.shift-list {
		margin: 0;
		padding-left: 1.25rem;
		display: grid;
		gap: 0.55rem;
	}

	.section-intro {
		margin: 0 0 1.25rem;
		max-width: 40rem;
	}

	.phase-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	}

	.phase-card {
		padding: 1.15rem 1.2rem;
		border-radius: var(--radius-md);
		background: var(--color-surface-solid);
		border: 1px solid var(--color-border);
		box-shadow: var(--shadow-sm);
		transition: transform var(--motion-fast), box-shadow var(--motion-fast);
	}

	.phase-card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-md);
	}

	.phase-card.violet {
		border-top: 3px solid #7c3aed;
	}

	.phase-card.teal {
		border-top: 3px solid #14b8a6;
	}

	.phase-card h3 {
		margin: 0 0 0.35rem;
		font-size: 1.125rem;
	}

	.phase-meta {
		margin: 0 0 0.75rem;
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--color-accent-strong);
	}

	.phase-card p {
		margin: 0 0 1rem;
		font-size: 0.9375rem;
		line-height: 1.55;
		color: var(--color-muted);
	}

	.link-list {
		margin: 0;
		padding-left: 1.25rem;
		display: grid;
		gap: 0.45rem;
		font-weight: 600;
	}
</style>
