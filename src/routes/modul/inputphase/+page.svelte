<script lang="ts">
	import PageIntro from '#lib/components/PageIntro.svelte';

	const days = [
		{ day: 1, topic: 'Was ist Engagement Design? — Abgrenzung, Begriffsklärung, Überblick' },
		{ day: 2, topic: 'Motivationspsychologie — SDT, Flow, ARCS' },
		{ day: 3, topic: 'Frameworks — Octalysis, HEXAD, MDA, Fogg' },
		{ day: 4, topic: 'Ethik und kritische Perspektive — Dark Patterns, Meaningful Gamification' },
		{ day: 5, topic: 'Methoden und Prozess — HCD, Experience Design, Projektübersicht' }
	];
</script>

<svelte:head>
	<title>Inputphase — Engagement Design</title>
</svelte:head>

<PageIntro
	title="Inputphase"
	lead="Vier bis fünf Tage theoretische und konzeptionelle Grundlagen. Die detaillierten Inhalte pro Tag werden in Goldfish 2 ausgearbeitet."
/>

<p>
	Diese Seite skizziert bereits die geplante Tagesstruktur aus der Modulplanung — als Orientierung für
	Studierende und zur Abstimmung der Inhalte.
</p>

<table class="schedule">
	<caption class="sr-only">Geplante Themen pro Tag in der Inputphase</caption>
	<thead>
		<tr>
			<th scope="col">Tag</th>
			<th scope="col">Thema</th>
		</tr>
	</thead>
	<tbody>
		{#each days as row (row.day)}
			<tr>
				<td>{row.day}</td>
				<td>{row.topic}</td>
			</tr>
		{/each}
	</tbody>
</table>

<p class="next">
	Als Nächstes: <a href="/frameworks">Frameworks-Bereiche</a> und Vertiefung in Goldfish 2–3.
</p>

<style>
	p {
		max-width: 42rem;
		line-height: 1.6;
	}

	.schedule {
		width: 100%;
		border-collapse: collapse;
		margin: 1.5rem 0;
		font-size: 0.9375rem;
	}

	th,
	td {
		border: 1px solid var(--color-border);
		padding: 0.65rem 0.75rem;
		text-align: left;
		vertical-align: top;
	}

	th {
		background: var(--color-surface-elevated);
		font-weight: 650;
	}

	td:first-child {
		width: 4rem;
		font-weight: 600;
	}

	.next {
		color: var(--color-muted);
	}
</style>
