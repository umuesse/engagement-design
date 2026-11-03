<script lang="ts">
	import PageIntro from '#lib/components/PageIntro.svelte';

	const steps = [
		'Projektthema wählen — orientiert an den Anwendungsfeldern',
		'Frameworks gezielt einsetzen (Motivation, Verhalten, Ethik)',
		'Kritisch reflektieren: Engagement vs. Manipulation',
		'Dokumentation und Präsentation (Format wird noch bekannt gegeben)'
	];
</script>

<svelte:head>
	<title>Projektphase — Engagement Design</title>
</svelte:head>

<PageIntro
	tag="Projektphase"
	title="Dein Engagement-Design-Projekt"
	lead="Nach der Inputphase wendest du Frameworks und Methoden in einem eigenständigen Projekt an. Briefing und Bewertungskriterien werden ergänzt, sobald die Modulfragen geklärt sind."
/>

<div class="glass-panel">
	<h2>Ablauf (Überblick)</h2>
	<ol class="outline">
		{#each steps as step (step)}
			<li>{step}</li>
		{/each}
	</ol>
	<p class="hint text-muted">
		Themenideen findest du unter <a href="/anwendungsfelder">Anwendungsfelder</a>. Zurück zur
		<a href="/modul/inputphase">Inputphase</a>, wenn du Lernziele nachlesen willst.
	</p>
</div>

<style>
	.glass-panel h2 {
		margin: 0 0 1rem;
		font-size: 1.2rem;
	}

	.outline {
		max-width: 40rem;
		line-height: 1.6;
		display: grid;
		gap: 0.55rem;
		margin: 0 0 1rem;
		padding-left: 1.25rem;
		font-weight: 500;
	}

	.hint {
		margin: 0;
		font-size: 0.9375rem;
	}
</style>
