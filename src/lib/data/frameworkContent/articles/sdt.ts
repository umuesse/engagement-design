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
	sources: [
		{
			label:
				'Ryan, R. M., & Deci, E. L. (2000). Self-Determination Theory and the Facilitation of Intrinsic Motivation, Social Development, and Well-Being',
			note: 'Pflichtlektüre',
			href: 'https://selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf'
		},
		{ label: 'selfdeterminationtheory.org', note: 'Ressourcen & Überblick', href: 'https://selfdeterminationtheory.org' }
	],
	blocks: [],
	sections: [
		{
			diagramIds: ['sdt-spectrum'],
			blocks: [
				{ type: 'h2', text: 'Intrinsisch vs. extrinsisch' },
				{
					type: 'p',
					text: 'Intrinsische Motivation kommt aus der Tätigkeit selbst. Extrinsische Motivation reicht von reinem Druck von außen bis zu Werten, die man als die eigenen erlebt — das Kontinuum oben macht diese Abstufungen sichtbar.'
				},
				{
					type: 'callout',
					title: 'Merksatz',
					paragraphs: [
						'Externe Belohnungen können kurzfristig aktivieren, aber langfristig inneres Interesse untergraben — besonders wenn sie Kontrolle signalisieren.'
					]
				},
				{ type: 'h2', text: 'Anreize und Regulierungstypen' },
				{
					type: 'ul',
					items: [
						'Rein externe Regulierung hängt an Belohnung oder Strafe — oft fragil, wenn der Anreiz entfällt.',
						'Introjizierte Regulierung (Stolz, Schuld, innerer Druck) kann aktivieren, ohne echte Autonomie zu stärken.',
						'Identifizierte und integrierte Regulierung verbinden Handeln mit persönlicher Bedeutung bzw. eigenen Werten.',
						'Grundbedürfnisse zu untergraben (z. B. erzwungene Teilnahme) verschiebt Menschen eher Richtung Amotivation oder externer Kontrolle.'
					]
				},
				{
					type: 'callout',
					title: 'Merksatz für Gestaltung',
					paragraphs: [
						'Fragt bei jedem Touchpoint: Welcher Regulierungstyp wird angesprochen — und welches Grundbedürfnis wird gestärkt oder geschwächt?'
					]
				}
			]
		},
		{
			diagramIds: ['sdt-needs'],
			blocks: [
				{ type: 'h2', text: 'Die drei Grundbedürfnisse' },
				{
					type: 'p',
					text: 'SDT geht davon aus, dass Menschen neugierig und integrationsfreudig sind — wenn Kontexte Autonomie, Kompetenz und soziale Eingebundenheit unterstützen.'
				},
				{
					type: 'ul',
					items: [
						'<strong>Autonomie:</strong> Handeln aus Überzeugung — z. B. wählbare Projektthemen und transparente Kriterien.',
						'<strong>Kompetenz:</strong> Fortschritt erleben — klares Feedback und steigende, passende Herausforderung.',
						'<strong>Eingebundenheit:</strong> Verbundenheit — Peer-Feedback, gemeinsame Reflexion, respektvolle Community.'
					]
				},
				{ type: 'h2', text: 'Relevanz für Engagement Design' },
				{
					type: 'p',
					text: 'SDT ist Kompass statt Mechanik-Katalog: Menschen bleiben freiwillig, wenn sie sich kompetent, verbunden und selbstbestimmt fühlen — nicht wenn man sie nur aktiviert.'
				}
			]
		}
	]
};
