import type { FrameworkArticleContent } from '../types';

export const hexad: FrameworkArticleContent = {
	slug: 'hexad',
	tag: 'Engagement-Frameworks',
	title: 'HEXAD Player Types',
	lead: 'Marczewskis HEXAD erweitert Spielertypen um Motivation und Kontext — nützlich für Zielgruppenanalyse, aber kein Stereotypen-Ersatz für echte Research.',
	metaDescription: 'HEXAD: Philanthropist, Socialiser, Free Spirit, Achiever, Player, Disruptor — Zielgruppen nuanciert denken.',
	diagramIds: ['hexad'],
	keyTerms: [
		{ term: 'Philanthropist', definition: 'Motiviert durch Sinn und Beitrag ohne eigene Belohnung.' },
		{ term: 'Socialiser', definition: 'Motiviert durch Beziehungen und soziale Interaktion.' },
		{ term: 'Free Spirit', definition: 'Motiviert durch Autonomie, Erkundung, Kreativität.' },
		{ term: 'Achiever', definition: 'Motiviert durch Meisterschaft und sichtbaren Fortschritt.' },
		{ term: 'Player', definition: 'Motiviert durch extrinsische Belohnungen und Status.' },
		{ term: 'Disruptor', definition: 'Motiviert durch Wandel, Regeln testen, Macht/Impact.' }
	],
	sources: [
		{
			label: 'Marczewski, A. — HEXAD Gamification User Types',
			note: 'Überblick & Tools',
			href: 'https://gamified.uk/user-types/'
		}
	],
	blocks: [
		{ type: 'h2', text: 'Sechs Typen — was sie meinen' },
		{
			type: 'p',
			text: 'HEXAD beschreibt Muster, warum Menschen in Systemen mitmachen. In Projekten nutzt du die Typen, um unterschiedliche Motivationen in einer Zielgruppe zu antizipieren — nicht um eine Person ewig in eine Schublade zu stecken.'
		},
		{
			type: 'ul',
			items: [
				'Philanthropist & Socialiser → Bedeutung und Community (SDT-Eingebundenheit)',
				'Free Spirit & Achiever → Autonomie und Kompetenz',
				'Player → extrinsische Anreize — bewusst dosieren',
				'Disruptor → Regeln hinterfragen — kann Innovation oder Chaos bedeuten'
			]
		},
		{
			type: 'callout',
			title: 'Vorsicht',
			paragraphs: ['Typologien ersetzen keine Interviews oder Tests. Sie sind Hypothesen für Personas — nicht Wahrheit über Nutzer.']
		},
		{ type: 'h2', text: 'Relevanz für Engagement Design' },
		{
			type: 'p',
			text: 'Kombiniere HEXAD mit echten Daten aus deinem Anwendungsfeld (z. B. HR vs. Civic Tech). Frage: Welche Mechaniken sprechen welche Motivation an — und wer wird ausgeschlossen?'
		}
	]
};
