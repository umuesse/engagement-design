<script lang="ts">
	import PageIntro from '#lib/components/PageIntro.svelte';

	const fields = [
		'Bildung und Lernen (Learning Experience Design)',
		'Gesundheit und Verhaltensänderung (Health Engagement)',
		'Nachhaltigkeit (Sustainable Behavior Design)',
		'Organisationen und HR (Employee Engagement)',
		'Civic Tech und gesellschaftliche Teilhabe'
	];
</script>

<svelte:head>
	<title>Anwendungsfelder — Engagement Design</title>
</svelte:head>

<PageIntro
	title="Anwendungsfelder"
	lead="Typische Kontexte für Engagement-Design-Projekte in der Projektphase. Pro Feld folgen später Beispielideen und Framework-Hinweise (Goldfish 4)."
/>

<ul class="fields">
	{#each fields as field (field)}
		<li>{field}</li>
	{/each}
</ul>

<style>
	.fields {
		max-width: 42rem;
		display: grid;
		gap: 0.65rem;
		line-height: 1.55;
		font-size: 1rem;
	}
</style>
