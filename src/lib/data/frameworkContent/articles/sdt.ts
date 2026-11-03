import type { FrameworkArticleContent } from '../types';

export const sdt: FrameworkArticleContent = {
	slug: 'sdt',
	tag: 'Motivationspsychologie',
	title: 'Self-Determination Theory (SDT)',
	lead: 'Deci & Ryan liefern das psychologische Fundament für Engagement Design: Zuerst das Kontinuum der Motivationsregulation (Amotivation, vier Stufen extrinsischer Regulierung bis intrinsisch) — dann die drei Grundbedürfnisse als Bedingungen, die innere Motivation stützen.',
	metaDescription:
		'SDT für Studierende: Autonomie, Kompetenz, Eingebundenheit, intrinsische vs. extrinsische Motivation und Relevanz für Engagement Design.',
	diagramIds: ['sdt-spectrum', 'sdt-needs'],
	keyTerms: [
		{ term: 'Autonomie', definition: 'Erleben von Wahlfreiheit und Selbstbestimmung — volle Zustimmung zu Handlungen.' },
		{ term: 'Kompetenz', definition: 'Gefühl, Herausforderungen zu bewältigen und zu wachsen — Feedback und passende Schwierigkeit.' },
		{ term: 'Soziale Eingebundenheit', definition: 'Zugehörigkeit, Verbundenheit und Wertschätzung in Beziehungen.' },
		{ term: 'Intrinsische Motivation', definition: 'Handeln aus Interesse, Bedeutung oder Freude an der Tätigkeit.' },
		{ term: 'Extrinsische Motivation', definition: 'Handeln wegen äußerer Anreize — kann unterstützen oder inneres Interesse verdrängen.' },
		{ term: 'PBL', definition: 'Points, Badges, Leaderboards — oft extrinsisch und kurzfristig.' }
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
		{ type: 'h2', text: 'Intrinsisch vs. extrinsisch' },
		{
			type: 'p',
			text: 'Intrinsische Motivation kommt aus der Tätigkeit selbst; extrinsische aus Belohnungen, Strafen oder Ranglisten. Entscheidend ist, wie Anreize eingesetzt werden.'
		},
		{
			type: 'callout',
			title: 'Merksatz',
			paragraphs: [
				'Externe Belohnungen können kurzfristig aktivieren, aber langfristig inneres Interesse untergraben — besonders wenn sie Kontrolle signalisieren.'
			]
		},
		{ type: 'h2', text: 'Warum PBL oft scheitert' },
		{
			type: 'ul',
			items: [
				'Betont extrinsische Anreize und Vergleich statt Bedeutung.',
				'Leaderboards können Eingebundenheit durch Statusdruck ersetzen.',
				'„Nur für Punkte“-Logik schwächt Autonomie.',
				'Ohne Kompetenz-Feedback kollabiert Engagement, wenn Belohnungen wegfallen.'
			]
		},
		{
			type: 'callout',
			title: 'Kritische Perspektive',
			variant: 'caution',
			paragraphs: ['PBL ersetzt kein durchdachtes Experience Design. Pro Touchpoint: Welches Grundbedürfnis stärken — welches untergraben?']
		},
		{ type: 'h2', text: 'Relevanz für Engagement Design' },
		{
			type: 'p',
			text: 'SDT ist Kompass statt Mechanik-Katalog: Menschen bleiben freiwillig, wenn sie sich kompetent, verbunden und selbstbestimmt fühlen — nicht wenn man sie nur aktiviert.'
		}
	]
};
