<script lang="ts">
	import ApplicationFieldCard from '#lib/components/ApplicationFieldCard.svelte';
	import PageIntro from '#lib/components/PageIntro.svelte';
	import { applicationFields } from '#lib/data/anwendungsfelder';
</script>

<svelte:head>
	<title>Anwendungsfelder — Engagement Design</title>
	<meta
		name="description"
		content="Fünf Anwendungsfelder für Engagement-Design-Projekte: Bildung, Gesundheit, Nachhaltigkeit, HR, Civic Tech — mit Beispielideen und Framework-Hinweisen."
	/>
</svelte:head>

<PageIntro
	tag="Projektideen"
	title="Anwendungsfelder"
	lead="Wo dein Engagement-Design-Projekt ansetzen kann: fünf Kontexte aus der Modulplanung — mit Kurzbeschreibung, Beispielidee und passenden Framework-Links."
/>

<div class="fields-grid">
	{#each applicationFields as field (field.id)}
		<ApplicationFieldCard {field} />
	{/each}
</div>

<section class="glass-panel next" aria-labelledby="next-title">
	<h2 id="next-title">Vom Feld zum Projekt</h2>
	<p>
		Wähle ein Feld als Ausgangspunkt, verknüpfe es mit Frameworks aus der
		<a href="/modul/inputphase">Inputphase</a> und starte in der
		<a href="/modul/projektphase">Projektphase</a> mit Ablauf und Deliverables.
	</p>
	<p class="links-row">
		<a class="link-arrow" href="/modul/projektphase">Zur Projektphase →</a>
		<a class="link-arrow" href="/frameworks">Framework-Hub →</a>
	</p>
</section>

<style>
	.fields-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
		margin-bottom: 1.25rem;
	}

	.next h2 {
		margin: 0 0 0.5rem;
		font-size: 1.15rem;
	}

	.next p {
		margin: 0 0 0.75rem;
		line-height: 1.6;
		color: var(--color-muted);
		max-width: 42rem;
	}

	.links-row {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem 1.5rem;
		margin-bottom: 0 !important;
	}
</style>
