<script lang="ts">
	import PageIntro from '#lib/components/PageIntro.svelte';

	const areas = [
		{
			title: 'Motivationspsychologie',
			items: ['Self-Determination Theory (SDT)', 'Flow Theory', 'ARCS-Modell']
		},
		{
			title: 'Engagement-spezifische Frameworks',
			items: ['Octalysis', 'HEXAD Player Types', 'MDA Framework']
		},
		{
			title: 'Behavioral Design',
			items: ['Fogg Behavior Model', 'Hook Model (kritisch lesen)']
		},
		{
			title: 'Bedeutungsvolle Gamification & Kritik',
			items: ['RECIPE / Meaningful Gamification', 'Ethics & Dark Patterns']
		},
		{
			title: 'Designmethoden & Prozesse',
			items: ['Human-Centered Design', 'Experience Design', 'Service Design Thinking']
		}
	];
</script>

<svelte:head>
	<title>Frameworks — Engagement Design</title>
</svelte:head>

<PageIntro
	tag="Theorie & Werkzeuge"
	title="Frameworks & theoretische Basis"
	lead="Überblick über die Ansätze aus der Modulplanung. Einzelne Vertiefungsseiten folgen ab Goldfish 3 — in der Inputphase siehst du bereits, wann welches Framework drankommt."
/>

<div class="framework-grid">
	{#each areas as area (area.title)}
		<section class="framework-block glass-panel">
			<h2>{area.title}</h2>
			<ul>
				{#each area.items as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>
	{/each}
</div>

<p class="back text-muted">
	<a class="link-arrow" href="/modul/inputphase">Zur Inputphase (Tagesplan) →</a>
</p>

<style>
	.framework-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		margin-bottom: 1.5rem;
	}

	.framework-block {
		padding: 1.1rem 1.15rem;
		margin-bottom: 0;
	}

	.framework-block h2 {
		margin: 0 0 0.75rem;
		font-size: 1.05rem;
	}

	ul {
		margin: 0;
		padding-left: 1.1rem;
		font-size: 0.9375rem;
		display: grid;
		gap: 0.35rem;
	}

	.back {
		margin: 0;
	}
</style>
