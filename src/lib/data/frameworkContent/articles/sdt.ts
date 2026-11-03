import type { FrameworkArticleContent } from '../types';

export const sdt: FrameworkArticleContent = {
	slug: 'sdt',
	tag: 'Motivationspsychologie',
	title: 'Self-Determination Theory (SDT)',
	lead: 'Deci & Ryan beschreiben Motivation als Kontinuum der Regulierung: Amotivation, vier Stufen extrinsischer Regulierung mit steigender Internalisierung bis hin zur intrinsischen Motivation — ergänzt durch die drei Grundbedürfnisse Autonomie, Kompetenz und soziale Eingebundenheit.',
	metaDescription:
		'SDT für Studierende: Autonomie, Kompetenz, Eingebundenheit, intrinsische vs. extrinsische Motivation und Relevanz für Engagement Design.',
	diagramIds: ['sdt-spectrum', 'sdt-needs'],
	keyTerms: [
		{ term: 'Autonomie', definition: 'Erleben von Wahlfreiheit und Selbstbestimmung — volle Zustimmung zu Handlungen.' },
		{ term: 'Kompetenz', definition: 'Gefühl, Herausforderungen zu bewältigen und zu wachsen — Feedback und passende Schwierigkeit.' },
		{ term: 'Soziale Eingebundenheit', definition: 'Zugehörigkeit, Verbundenheit und Wertschätzung in Beziehungen.' },
		{ term: 'Intrinsische Motivation', definition: 'Handeln aus Interesse, Bedeutung oder Freude an der Tätigkeit.' },
		{ term: 'Extrinsische Motivation', definition: 'Handeln wegen äußerer Anreize — kann unterstützen oder inneres Interesse verdrängen, je nach Regulierungstyp.' },
		{ term: 'Internalisierung', definition: 'Prozess, in dem äußere Vorgaben als eigene Werte oder Ziele übernommen werden (identifiziert → integriert).' }
	],
	references: [
		{
			id: 'deci-1999',
			apa: 'Deci, E. L., Koestner, R., & Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. <em>Psychological Bulletin</em>, <em>125</em>(6), 627–668. https://doi.org/10.1037/0033-2909.125.6.627',
			href: 'https://selfdeterminationtheory.org/SDT/documents/1999_DeciKoestnerRyan_Metal.pdf',
			accessLabel: 'PDF (selfdeterminationtheory.org)'
		},
		{
			id: 'lehtivuori-2023',
			apa: 'Lehtivuori, A. (2023). <em>When do extrinsic rewards undermine intrinsic motivation? A meta-analysis</em> [Doctoral dissertation, University of Turku]. https://doi.org/10.33352/978-951-29-9132-7',
			href: 'https://www.utupub.fi/bitstream/handle/10024/173853/Annales%20E%2099%20Lehtivuori%20DISS.pdf',
			accessLabel: 'Dissertation (PDF)'
		},
		{
			id: 'lepper-1973',
			apa: 'Lepper, M. R., Greene, D., & Nisbett, R. E. (1973). Undermining children\'s intrinsic interest with extrinsic reward: A test of the "overjustification" hypothesis. <em>Journal of Personality and Social Psychology</em>, <em>28</em>(1), 129–137. https://doi.org/10.1037/h0031733',
			href: 'https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Motivation/Lepper_et_al_Undermining_Childrens_Intrinsic_Interest.pdf',
			accessLabel: 'PDF (Open-Access-Kopie)'
		},
		{
			id: 'ryan-deci-2000',
			apa: 'Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. <em>American Psychologist</em>, <em>55</em>(1), 68–78. https://doi.org/10.1037/0003-066X.55.1.68',
			href: 'https://selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf',
			accessLabel: 'PDF (Pflichtlektüre)'
		},
		{
			id: 'sdt-website',
			apa: 'Center for Self-Determination Theory. (n.d.). <em>Self-determination theory</em>. https://selfdeterminationtheory.org',
			href: 'https://selfdeterminationtheory.org',
			accessLabel: 'Website öffnen'
		}
	],
	blocks: [],
	sections: [
		{
			diagramIds: ['sdt-spectrum'],
			blocks: [
				{ type: 'h2', text: 'Extrinsisch vs. intrinsisch' },
				{
					type: 'p',
					text: 'Extrinsische Motivation reicht von reinem Druck von außen bis zu Werten, die man als die eigenen erlebt. Intrinsische Motivation kommt aus der Tätigkeit selbst — das Kontinuum oben macht diese Abstufungen von links nach rechts sichtbar.'
				},
				{ type: 'h2', text: 'Anreize und Regulierungstypen' },
				{
					type: 'ul',
					items: [
						'Grundbedürfnisse zu untergraben (z. B. erzwungene Teilnahme) verschiebt Menschen eher Richtung Amotivation oder externer Kontrolle.',
						'Rein externe Regulierung hängt an Belohnung oder Strafe — oft fragil, wenn der Anreiz entfällt.',
						'Introjizierte Regulierung (Stolz, Schuld, innerer Druck) kann aktivieren, ohne echte Autonomie zu stärken.',
						'Identifizierte und integrierte Regulierung verbinden Handeln mit persönlicher Bedeutung bzw. eigenen Werten.'
					]
				},
				{ type: 'h2', text: 'Korrumpierungseffekt' },
				{
					type: 'p',
					text: 'Der Korrumpierungseffekt (Untergrabung intrinsischer Motivation) beschreibt, dass freiwilliges Interesse nach erwarteten, sichtbaren Belohnungen schwächer sein kann als ohne sie — kein pauschales Urteil gegen Anreizsysteme, sondern ein Risiko bei erwarteter, an Teilnahme oder Abschluss gekoppelter Belohnung auf ohnehin interessanten Aufgaben.'
				},
				{
					type: 'p',
					text: 'Meta-Analysen zeigen Untergrabung vor allem bei erwarteten, materiellen Belohnungen dieser Art; positives Feedback und unerwartete Belohnungen untergraben in Experimenten typischerweise nicht (<a href="#ref-deci-1999">Deci et al., 1999</a>; <a href="#ref-lehtivuori-2023">Lehtivuori, 2023</a>). Die klassische Overjustification-Studie (<a href="#ref-lepper-1973">Lepper et al., 1973</a>) fand: Erwartete Auszeichnung senkte das spätere freiwillige Weitermachen.'
				},
				{
					type: 'callout',
					title: 'Merksatz',
					paragraphs: [
						'Externe Belohnungen können kurzfristig aktivieren — untergraben bei kontrollierender Erwartung aber langfristig intrinsisches Interesse.'
					]
				}
			]
		},
		{
			diagramIds: ['sdt-needs'],
			blocksBeforeDiagram: [
				{
					type: 'callout',
					title: 'Merksatz für Gestaltung',
					paragraphs: [
						'Fragt bei jedem Touchpoint: Welcher Regulierungstyp wird angesprochen — und welches Grundbedürfnis wird gestärkt oder geschwächt?'
					]
				}
			],
			blocks: [
				{ type: 'h2', text: 'Relevanz für Engagement Design' },
				{
					type: 'p',
					text: 'SDT ist Kompass statt Mechanik-Katalog: Menschen bleiben freiwillig, wenn sie sich kompetent, verbunden und selbstbestimmt fühlen — nicht wenn man sie nur aktiviert.'
				}
			]
		}
	]
};
