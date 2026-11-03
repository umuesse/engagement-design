import type { FrameworkArticleContent } from '../types';

export const ramp: FrameworkArticleContent = {
	slug: 'ramp',
	tag: 'Motivationspsychologie',
	title: 'RAMP (Drive)',
	lead: 'Daniel Pink fasst in Drive vier Treiber zusammen, die intrinsische Motivation in Wissenarbeit stützen: Relatedness, Autonomy, Mastery und Purpose — auf Deutsch Verbundenheit, Autonomie, Meisterschaft und Sinn. Das Modell baut auf der Self-Determination Theory auf und ergänzt sie um die Sinn-Dimension.',
	metaDescription:
		'RAMP nach Pink: Verbundenheit, Autonomie, Meisterschaft, Sinn — Bezug zu SDT und Relevanz für Engagement Design.',
	diagramIds: ['ramp'],
	keyTerms: [
		{
			term: 'Relatedness (Verbundenheit)',
			definition: 'Sich in Beziehungen verbunden und wertgeschätzt fühlen — entspricht dem SDT-Grundbedürfnis soziale Eingebundenheit.'
		},
		{
			term: 'Autonomy (Autonomie)',
			definition: 'Handeln aus Selbststeuerung und stimmigen Entscheidungen — parallel zum SDT-Grundbedürfnis Autonomie.'
		},
		{
			term: 'Mastery (Meisterschaft)',
			definition: 'Kompetenzaufbau und Wirksamkeit an sinnvollen Herausforderungen — entspricht dem SDT-Grundbedürfnis Kompetenz.'
		},
		{
			term: 'Purpose (Sinn)',
			definition: 'Erleben, dass das eigene Tun zu einem größeren, bedeutsamen Ziel beiträgt — Ergänzung über die klassischen drei SDT-Bedürfnisse hinaus.'
		},
		{
			term: 'Motivation 2.0 vs. 3.0',
			definition: 'Pinks Metapher: reine Anreiz-Logik (Carrot & Stick) reicht für komplexe, kreative Aufgaben oft nicht — Motivation 3.0 setzt auf intrinsische Treiber wie RAMP.'
		}
	],
	references: [
		{
			id: 'pink-2011',
			apa: 'Pink, D. H. (2011). <em>Drive: Was Sie wirklich motiviert</em> (2. Aufl.). ecowin Verlag. (Originalwerk 2009)',
			href: 'https://www.danielpink.com/books/drive/',
			accessLabel: 'Autor-Seite (Englisch)'
		},
		{
			id: 'pink-2009',
			apa: 'Pink, D. H. (2009). <em>Drive: The surprising truth about what motivates us</em>. Riverhead Books.',
			href: 'https://www.danielpink.com/books/drive/',
			accessLabel: 'Autor-Seite'
		},
		{
			id: 'ryan-deci-2000',
			apa: 'Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. <em>American Psychologist</em>, <em>55</em>(1), 68–78. https://doi.org/10.1037/0003-066X.55.1.68',
			href: 'https://selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf',
			accessLabel: 'PDF (Pflichtlektüre SDT)'
		}
	],
	blocks: [],
	sections: [
		{
			diagramIds: ['ramp'],
			blocksBeforeDiagram: [
				{ type: 'h2', text: 'Von SDT zu RAMP' },
				{
					type: 'p',
					text: 'Die <a href="/frameworks/sdt">Self-Determination Theory (SDT)</a> liefert die wissenschaftliche Basis: Autonomie, Kompetenz und soziale Eingebundenheit als universelle Grundbedürfnisse (<a href="#ref-ryan-deci-2000">Ryan &amp; Deci, 2000</a>). Daniel Pink popularisiert für Praxis und Wissenarbeit ein eng verwandtes Raster — oft als <strong>RAMP</strong> zusammengefasst: <strong>R</strong>elatedness, <strong>A</strong>utonomy, <strong>M</strong>astery, <strong>P</strong>urpose (<a href="#ref-pink-2011">Pink, 2011</a>).'
				},
				{
					type: 'p',
					text: 'Drei RAMP-Elemente lassen sich direkt auf SDT mappen: <strong>Autonomy</strong> entspricht <em>Autonomie</em>, <strong>Relatedness</strong> der <em>sozialen Eingebundenheit</em>, <strong>Mastery</strong> der SDT-<em>Kompetenz</em> (Meisterschaft durch wirksames Lernen und passende Herausforderung). Neu im Vordergrund steht <strong>Purpose</strong>: Menschen bleiben eher engagiert, wenn sie verstehen, wozu ihre Arbeit beiträgt — nicht nur <em>wie</em> sie belohnt werden. Das ist keine Gamification-Mechanik, sondern eine Haltung bei der Gestaltung von Kontext und Bedeutung.'
				},
				{
					type: 'p',
					text: 'Pink unterscheidet grob „Motivation 2.0“ (externe Anreize, Kontrolle) von „Motivation 3.0“ (intrinsische Treiber). Für Studierendenprojekte heißt das: weniger reine Punkte-Logik, mehr echte Wahlmöglichkeiten, Lernfortschritt, Beziehungen und ein nachvollziehbares „Wofür“.'
				}
			],
			blocks: [
				{
					type: 'callout',
					title: 'Merksatz für Gestaltung',
					paragraphs: [
						'Prüft jedes Feature: Stärkt es Verbundenheit, Autonomie, Meisterschaft oder Sinn — oder ersetzt es diese durch kurzfristige Extrinsik?'
					]
				},
				{ type: 'h2', text: 'Relevanz für Engagement Design' },
				{
					type: 'p',
					text: 'RAMP eignet sich als schneller Kompass neben SDT: Wo fehlt Sinn (Purpose) trotz gamifizierter Oberfläche? Wo wird Autonomie durch erzwungene Pfade untergraben? Kombiniert beide Modelle — Regulationstypen und Grundbedürfnisse aus SDT, plus explizite Sinnfrage aus Pink — für Touchpoints, die freiwillig getragen werden.'
				}
			]
		}
	]
};
