<script lang="ts">
	import PageIntro from '#lib/components/PageIntro.svelte';
	import FrameworkHubCard from '#lib/components/framework/FrameworkHubCard.svelte';
	import { frameworkGroups } from '#lib/data/frameworks';
</script>

<svelte:head>
	<title>Frameworks — Engagement Design</title>
</svelte:head>

<PageIntro
	tag="Theorie & Werkzeuge"
	title="Framework-Hub"
	lead="Sechs Blöcke aus der Modulplanung — von Motivationspsychologie bis Anwendungsfelder. Alle Framework-Vertiefungen sind verlinkt; SDT ist ein guter Einstieg nach Tag 2."
/>

<div class="hub-grid">
	{#each frameworkGroups as group (group.id)}
		<FrameworkHubCard {group} />
	{/each}
</div>

<section class="glass-panel highlight" aria-labelledby="start-title">
	<h2 id="start-title">Empfohlener Einstieg</h2>
	<p>
		In der <a href="/modul/inputphase">Inputphase Tag 2</a> lernst du SDT, Flow und ARCS kennen. Für Tiefe:
		<a class="link-arrow" href="/frameworks/sdt">Self-Determination Theory (SDT) →</a>
	</p>
</section>

<section class="glass-panel highlight" aria-labelledby="apply-title">
	<h2 id="apply-title">In die Praxis</h2>
	<p>
		Für dein Projekt: <a href="/anwendungsfelder">Anwendungsfelder</a> mit Beispielideen und
		<a href="/modul/projektphase">Projektphase</a> mit Ablauf und Deliverables (Platzhalter).
	</p>
</section>

<p class="back text-muted">
	<a class="link-arrow" href="/modul/inputphase">Zur Inputphase (Tagesplan) →</a>
</p>

<style>
	.hub-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
		margin-bottom: 1.25rem;
	}

	.highlight {
		margin-bottom: 1.25rem;
	}

	.highlight h2 {
		margin: 0 0 0.5rem;
		font-size: 1.15rem;
	}

	.highlight p {
		margin: 0;
		line-height: 1.6;
		color: var(--color-muted);
		max-width: 42rem;
	}

	.back {
		margin: 0;
	}
</style>
