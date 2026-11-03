<script lang="ts">
	import Callout from '#lib/components/framework/Callout.svelte';
	import FrameworkArticle from '#lib/components/framework/FrameworkArticle.svelte';
	import type { KeyTerm, Source } from '#lib/components/framework/FrameworkArticle.svelte';

	const keyTerms: KeyTerm[] = [
		{
			term: 'Autonomie',
			definition: 'Erleben von Wahlfreiheit und Selbstbestimmung — nicht isolation, sondern volle Zustimmung zu Handlungen.'
		},
		{
			term: 'Kompetenz',
			definition: 'Gefühl, Herausforderungen effektiv zu bewältigen und zu wachsen — klares Feedback und passende Schwierigkeit.'
		},
		{
			term: 'Soziale Eingebundenheit',
			definition: 'Zugehörigkeit, Verbundenheit und gegenseitige Wertschätzung in Beziehungen und Communities.'
		},
		{
			term: 'Intrinsische Motivation',
			definition: 'Handeln aus Interesse, Bedeutung oder Freude an der Tätigkeit selbst — nicht primär für externe Belohnungen.'
		},
		{
			term: 'Extrinsische Motivation',
			definition: 'Handeln wegen äußerer Anreize (Noten, Punkte, Status) — kann unterstützen oder inneres Interesse verdrängen.'
		},
		{
			term: 'PBL',
			definition: 'Points, Badges, Leaderboards — typische Gamification-Oberflächenmechaniken, oft extrinsisch und kurzfristig.'
		}
	];

	const sources: Source[] = [
		{
			label: 'Ryan, R. M., & Deci, E. L. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation, Social Development, and Well-Being',
			note: 'Pflichtlektüre — Einstieg in SDT (Link folgt in der Bibliotheksversion)',
			href: 'https://selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf'
		},
		{
			label: 'selfdeterminationtheory.org',
			note: 'Offizielle SDT-Ressourcen und Forschungsüberblick',
			href: 'https://selfdeterminationtheory.org'
		}
	];
</script>

<svelte:head>
	<title>Self-Determination Theory (SDT) — Engagement Design</title>
	<meta
		name="description"
		content="SDT für Studierende: Autonomie, Kompetenz, Eingebundenheit, intrinsische vs. extrinsische Motivation und Relevanz für Engagement Design."
	/>
</svelte:head>

<FrameworkArticle
	tag="Motivationspsychologie"
	title="Self-Determination Theory (SDT)"
	lead="Deci & Ryan liefern das psychologische Fundament für Engagement Design: Nachhaltige Motivation entsteht, wenn Grundbedürfnisse erfüllt werden — nicht wenn man nur Belohnungen drauflegt."
	{keyTerms}
	{sources}
>
	{#snippet content()}
		<h2>Die drei Grundbedürfnisse</h2>
		<p>
			SDT geht davon aus, dass Menschen von Natur aus neugierig und integrationsfreudig sind — wenn soziale
			Kontexte drei psychologische Grundbedürfnisse unterstützen:
		</p>
		<ul>
			<li>
				<strong>Autonomie:</strong> Ich handle aus Überzeugung, nicht nur aus Druck. In Kursen heißt das z. B.
				wählbare Projektthemen, transparente Kriterien und echte Mitgestaltung.
			</li>
			<li>
				<strong>Kompetenz:</strong> Ich erlebe Fortschritt und kann das Gelernte anwenden. Klares Feedback,
				steigende Herausforderung und „Quick wins“ helfen — ohne alles zu trivialisieren.
			</li>
			<li>
				<strong>Soziale Eingebundenheit:</strong> Ich fühle mich verbunden und relevant für andere. Peer-Feedback,
				gemeinsame Reflexion und respektvolle Community sind Engagement-Treiber.
			</li>
		</ul>

		<h2>Intrinsisch vs. extrinsisch</h2>
		<p>
			<strong>Intrinsische Motivation</strong> kommt aus der Tätigkeit selbst — Neugier, Sinn, Meisterschaft.
			<strong>Extrinsische Motivation</strong> bindet an äußere Konsequenzen: Belohnungen, Strafen, Ranglisten.
			Beides kann koexistieren — entscheidend ist, <em>wie</em> Anreize eingesetzt werden.
		</p>
		<Callout title="Merksatz">
			<p>
				Externe Belohnungen können kurzfristig aktivieren, aber langfristig inneres Interesse untergraben — vor
				allem, wenn sie Kontrolle signalisieren oder Kompetenz und Autonomie vernachlässigen.
			</p>
		</Callout>

		<h2>Warum PBL oft scheitert</h2>
		<p>
			Points, Badges und Leaderboards (PBL) sind sichtbar und messbar — deshalb beliebt in Gamification. Aus
			SDT-Sicht sind sie oft problematisch:
		</p>
		<ul>
			<li>Sie betonen <strong>extrinsische</strong> Anreize und Vergleich statt Bedeutung.</li>
			<li>Leaderboards können <strong>Eingebundenheit</strong> durch Neid und Statusdruck ersetzen.</li>
			<li>Belohnungslogiken können <strong>Autonomie</strong> reduzieren („Ich mache es nur für Punkte“).</li>
			<li>Ohne echtes Kompetenz-Feedback bleibt Engagement flach, sobald die Belohnung weg ist.</li>
		</ul>
		<Callout title="Kritische Perspektive" variant="caution">
			<p>
				PBL ist nicht automatisch „schlecht“ — aber als Ersatz für durchdachtes Experience Design reicht es
				selten. Frag immer: Welches Grundbedürfnis stärken wir — und welches untergraben wir?
			</p>
		</Callout>

		<h2>Relevanz für Engagement Design</h2>
		<p>
			Engagement Design nutzt SDT als Kompass: Statt Mechaniken zu stapeln, gestaltest du Kontexte, in denen
			Menschen <strong>freiwillig</strong> bleiben, weil sie sich kompetent, verbunden und selbstbestimmt fühlen.
			Das unterscheidet nachhaltiges Engagement von kurzfristiger Aktivierung — und von manipulativen Mustern, die
			nur Klicks oder Zeit-on-Site maximieren.
		</p>
		<p>
			In deinem Projekt kannst du SDT z. B. als Checkliste nutzen: Pro Touchpoint — Autonomie, Kompetenz,
			Eingebundenheit — bewusst stärken oder Risiken benennen.
		</p>
	{/snippet}
</FrameworkArticle>
