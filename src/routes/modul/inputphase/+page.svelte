<script lang="ts">
	import { inputDays } from '#lib/data/inputphase';
	import InputDayCard from '#lib/components/InputDayCard.svelte';
	import PageIntro from '#lib/components/PageIntro.svelte';
</script>

<svelte:head>
	<title>Inputphase — Engagement Design</title>
</svelte:head>

<PageIntro
	tag="4–5 Tage · Inputphase"
	title="Dein Einstieg in Engagement Design"
	lead="Fünf kompakte Lerntage — von Begriffsklärung über Motivation und Frameworks bis zu Ethik und Projektstart. Pro Tag findest du ein Thema und konkrete Lernziele."
/>

<section class="timeline-section" aria-labelledby="timeline-title">
	<h2 id="timeline-title" class="sr-only">Tagesplan Inputphase</h2>
	<p class="timeline-intro text-muted">
		Nutze die Timeline als Orientierung in der Veranstaltung und zum Selbststudium. Die Reihenfolge baut
		logisch aufeinander auf — Tag 5 bereitet direkt auf die Projektphase vor.
	</p>

	<div class="timeline">
		{#each inputDays as day, index (day.day)}
			<InputDayCard day={day} isLast={index === inputDays.length - 1} />
		{/each}
	</div>
</section>

<section class="glass-panel next-step" aria-labelledby="next-title">
	<h2 id="next-title">Bereit für die Praxis?</h2>
	<p>
		Nach der Inputphase geht es in die eigenständige Projektphase — Frameworks anwenden, kritisch reflektieren,
		Ergebnisse dokumentieren. Themen findest du in den <a href="/anwendungsfelder">Anwendungsfeldern</a>.
	</p>
	<p class="action-links">
		<a class="link-arrow" href="/modul/projektphase">Zur Projektphase →</a>
		<a class="link-arrow" href="/anwendungsfelder">Anwendungsfelder →</a>
	</p>
</section>

<style>
	.timeline-section {
		margin-bottom: 2rem;
	}

	.timeline-intro {
		max-width: 42rem;
		margin: 0 0 1.5rem;
		font-size: 1rem;
	}

	.timeline {
		display: grid;
		gap: 0.25rem;
	}

	.next-step h2 {
		margin: 0 0 0.5rem;
		font-size: 1.25rem;
	}

	.next-step p {
		margin: 0 0 1rem;
		max-width: 38rem;
		color: var(--color-muted);
	}

	.action-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem 1.5rem;
		margin-bottom: 0 !important;
	}
</style>
