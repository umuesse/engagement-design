<script lang="ts">
	import PageIntro from '#lib/components/PageIntro.svelte';
	import MethodHubList from '#lib/components/method/MethodHubList.svelte';
	import { methodItems } from '#lib/data/methods';
</script>

<svelte:head>
	<title>Designmethoden — Engagement Design</title>
	<meta
		name="description"
		content="Designmethoden für Engagement Design: menschzentrierter Prozess (ISO 9241-210), Double Diamond und weitere Vertiefungen."
	/>
</svelte:head>

<PageIntro
	tag="Prozess & Evaluation"
	title="Designmethoden"
	lead="Psychologische Frameworks erklären, warum Menschen handeln — Designmethoden beschreiben, wie ihr iterativ gestaltet und evaluiert. Einträge mit Status „In Vorbereitung“ sind verlinkt; der HCD-Artikel unter Frameworks bleibt ergänzendes UX-Vorwissen."
/>

<section class="glass-panel hub-panel" aria-labelledby="methods-list-title">
	<h2 id="methods-list-title">Methoden im Modul</h2>
	<MethodHubList items={methodItems} />
</section>

<section class="glass-panel highlight" aria-labelledby="related-title">
	<h2 id="related-title">Verwandte Inhalte</h2>
	<p>
		Für UX-Grundlagen siehe <a href="/frameworks/hcd">Human-Centered Design (Framework)</a>. Für Motivationshypothesen:
		<a href="/frameworks/sdt">SDT</a> und <a href="/frameworks/ramp">RAMP</a>.
	</p>
</section>

<p class="back text-muted">
	<a class="link-arrow" href="/frameworks">Zur Framework-Übersicht →</a>
</p>

<style>
	.hub-panel h2 {
		margin: 0 0 1rem;
		font-size: 1.15rem;
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

	.highlight {
		margin-top: 1.25rem;
	}

	.back {
		margin: 1.25rem 0 0;
	}
</style>
