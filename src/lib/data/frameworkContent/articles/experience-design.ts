import type { FrameworkArticleContent } from '../types';

export const experienceDesign: FrameworkArticleContent = {
	slug: 'experience-design',
	tag: 'Designmethoden',
	title: 'Experience Design',
	lead: 'Experience Design fragt: Was macht eine Erfahrung bedeutsam und erinnerbar — über den ganzen Bogen von Anfang, Mitte und Ende?',
	metaDescription: 'Experience Design: Peak-End-Rule, narrative Bögen, Bedeutung statt Gamification-Oberfläche.',
	diagramId: 'experience-design',
	keyTerms: [
		{ term: 'Peak-End-Rule', definition: 'Erinnerung wird von Höhepunkt und Ende geprägt — nicht vom Durchschnitt.' },
		{ term: 'Experience Arc', definition: 'Spannungs- und Bedeutungsverlauf über die Zeit — wie in Storytelling.' },
		{ term: 'Meaningful moments', definition: 'Momente von Relevanz, Stolz, Verbundenheit — nicht nur „Fun“.' },
		{ term: 'Holistic experience', definition: 'Alle Sinne, Kanäle und Kontexte als ein System.' }
	],
	sources: [
		{
			label: 'Kahneman, D. (2011). Thinking, Fast and Slow — Peak-End (Kapitel zu erlebter Wohlfahrt)',
			note: 'Hintergrund Peak-End-Rule'
		}
	],
	blocks: [
		{ type: 'h2', text: 'Vom Feature zur Erfahrung' },
		{
			type: 'p',
			text: 'Gamification liefert oft isolierte Mechanics. Experience Design plant den gesamten Weg: Erstkontakt, Lernkurve, soziale Momente, Abschluss — und wie sich das anfühlt.'
		},
		{ type: 'h2', text: 'Peak-End bewusst gestalten' },
		{
			type: 'ul',
			items: [
				'Plane einen inhaltlichen Höhepunkt (Demo, Präsentation, Impact-Moment)',
				'Gestalte das Ende positiv und reflektiert — nicht nur „Formular abschicken“',
				'Vermeide, dass der letzte Eindruck Frustration ist (Bug, Strafe, leere Belohnung)'
			]
		},
		{
			type: 'callout',
			title: 'Merksatz',
			paragraphs: ['Nutzer erinnern nicht deine Punkte — sie erinnern, wie es sich angefühlt hat und wie es endete.']
		},
		{ type: 'h2', text: 'Relevanz für Engagement Design' },
		{
			type: 'p',
			text: 'XD verbindet MDA-Aesthetics mit Service-Journeys. In Projekten: Storyboard oder Journey mit markierten Peaks und ethisch geprüften Mechanics.'
		}
	]
};
