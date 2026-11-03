<script lang="ts">
	import PageIntro from '#lib/components/PageIntro.svelte';

	const fields = [
		{
			title: 'Bildung & Lernen',
			desc: 'Learning Experience Design — Kurse, Lernpfade, intrinsische Motivation.'
		},
		{
			title: 'Gesundheit',
			desc: 'Health Engagement — Verhaltensänderung, Gewohnheiten, ethische Grenzen.'
		},
		{
			title: 'Nachhaltigkeit',
			desc: 'Sustainable Behavior Design — langfristige Motivation statt Kurzzeit-Belohnungen.'
		},
		{
			title: 'Organisationen & HR',
			desc: 'Employee Engagement — Kultur, Onboarding, Zusammenarbeit.'
		},
		{
			title: 'Civic Tech',
			desc: 'Gesellschaftliche Teilhabe — Bürgerbeteiligung, Community, Impact.'
		}
	];
</script>

<svelte:head>
	<title>Anwendungsfelder — Engagement Design</title>
</svelte:head>

<PageIntro
	tag="Projektideen"
	title="Anwendungsfelder"
	lead="Typische Kontexte für dein Engagement-Design-Projekt. Pro Feld folgen später Beispielideen und Framework-Hinweise (Goldfish 4)."
/>

<div class="fields-grid">
	{#each fields as field (field.title)}
		<article class="field-card glass-panel">
			<h2>{field.title}</h2>
			<p>{field.desc}</p>
		</article>
	{/each}
</div>

<style>
	.fields-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	}

	.field-card {
		margin-bottom: 0;
		padding: 1.1rem 1.15rem;
		transition: transform var(--motion-fast);
	}

	.field-card:hover {
		transform: translateY(-2px);
	}

	.field-card h2 {
		margin: 0 0 0.5rem;
		font-size: 1.05rem;
	}

	.field-card p {
		margin: 0;
		font-size: 0.9375rem;
		color: var(--color-muted);
		line-height: 1.5;
	}
</style>
