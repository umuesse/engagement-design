import type { FrameworkArticleContent } from '../types';

export const mda: FrameworkArticleContent = {
	slug: 'mda',
	tag: 'Engagement-Frameworks',
	title: 'MDA Framework',
	lead: 'Mechanics, Dynamics, Aesthetics — das MDA-Framework aus Game Design hilft, von Regeln zur spürbaren Erfahrung zu denken. Pflichtlektüre für systemisches Engagement Design.',
	metaDescription: 'MDA: Mechanics → Dynamics → Aesthetics — Spieldesign-Denken für Engagement-Systeme.',
	diagramIds: ['mda'],
	keyTerms: [
		{ term: 'Mechanics', definition: 'Konkrete Regeln, Objekte, Aktionen — was formal möglich ist.' },
		{ term: 'Dynamics', definition: 'Verhalten und Muster, die aus Mechanics entstehen — z. B. Wettbewerb, Kooperation.' },
		{ term: 'Aesthetics', definition: 'Emotionale Reaktionen der Nutzer — Challenge, Discovery, Fellowship u. a.' },
		{ term: 'Design-Richtung', definition: 'Top-down (Aesthetics → Mechanics) oder bottom-up (Mechanics → Aesthetics).' }
	],
	sources: [
		{
			label: 'Hunicke, R., LeBlanc, M., & Zubek, R. (2004). MDA: A Formal Approach to Game Design and Game Research',
			note: 'Pflichtlektüre',
			href: 'https://users.cs.northwestern.edu/~hunicke/pubs/MDA.pdf'
		}
	],
	blocks: [
		{ type: 'h2', text: 'Die drei Ebenen' },
		{
			type: 'ul',
			items: [
				'<strong>Mechanics:</strong> Punkte, Quests, Rollen, Zeitlimits — die „Hardware“ des Systems.',
				'<strong>Dynamics:</strong> Strategien, Rivalität, Mentoring — emergentes Verhalten.',
				'<strong>Aesthetics:</strong> Was Menschen fühlen — Spannung, Stolz, Zugehörigkeit.'
			]
		},
		{ type: 'h2', text: 'Warum die Reihenfolge zählt' },
		{
			type: 'p',
			text: 'Designer starten oft mit Mechanics („wir brauchen Badges“). MDA fordert: Welche Aesthetic willst du — und welche Dynamics und Mechanics erzeugen sie? Engagement Design beginnt bei der Erfahrung, nicht beim Feature.'
		},
		{
			type: 'callout',
			title: 'Merksatz',
			paragraphs: ['Mechanics sind nicht das Produkt. Sie sind Mittel — die Aesthetic ist das, was Menschen erinnern und wiederholen.']
		},
		{ type: 'h2', text: 'Relevanz für Engagement Design' },
		{
			type: 'p',
			text: 'Nutze MDA in der Projektphase, um dein Konzept zu erklären: Welche Aesthetics (z. B. Bedeutung, Kompetenz), welche Dynamics (Ko-Kreation), welche Mechanics (optional, ethisch geprüft).'
		}
	]
};
