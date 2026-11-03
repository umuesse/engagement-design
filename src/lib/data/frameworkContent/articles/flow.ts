import type { FrameworkArticleContent } from '../types';

export const flow: FrameworkArticleContent = {
	slug: 'flow',
	tag: 'Motivationspsychologie',
	title: 'Flow Theory',
	lead: 'Csikszentmihalyi beschreibt Flow als optimale Erfahrung — wenn Fähigkeit und Herausforderung im Gleichgewicht sind. Für Engagement Design ist das der Sweet Spot zwischen Langeweile und Überforderung.',
	metaDescription: 'Flow Theory: Challenge-Skill-Balance, Flow-Kanal und Bedeutung für Lern- und Produkterlebnisse.',
	keyTerms: [
		{ term: 'Flow', definition: 'Vollständige Vertiefung in eine Aktivität — Zeitgefühl und Selbstkritik treten in den Hintergrund.' },
		{ term: 'Challenge-Skill-Balance', definition: 'Aufgabe ist anspruchsvoll genug, aber mit vorhandenen Fähigkeiten machbar.' },
		{ term: 'Flow-Kanal', definition: 'Der Bereich zwischen Langeweile (zu leicht) und Angst (zu schwer).' },
		{ term: 'Klare Ziele & Feedback', definition: 'Wissen, was zu tun ist, und unmittelbares Feedback zum Fortschritt.' }
	],
	sources: [
		{
			label: 'Csikszentmihalyi, M. (1990). Flow: The Psychology of Optimal Experience',
			note: 'Klassischer Einstieg (Bibliothek / Lehrstuhl)'
		}
	],
	blocks: [
		{ type: 'h2', text: 'Kernidee' },
		{
			type: 'p',
			text: 'Flow entsteht, wenn du eine klare Aufgabe hast, sofortiges Feedback bekommst und die Herausforderung knapp über deinem aktuellen Skill-Niveau liegt — nicht darunter (Langeweile) und nicht weit darüber (Angst).'
		},
		{ type: 'h2', text: 'Challenge und Skill balancieren' },
		{
			type: 'ul',
			items: [
				'Steigere Schwierigkeit erst, wenn Kompetenz wächst — z. B. gestaffelte Übungen in Workshops.',
				'Biete optional „Stretch“-Aufgaben für Fortgeschrittene, ohne Pflicht-Frust für andere.',
				'Vermeide reine Wiederholung ohne Variation — das killt Flow in Lernsettings schnell.'
			]
		},
		{
			type: 'callout',
			title: 'Im Modul',
			paragraphs: ['Tag 2 Inputphase: Flow ergänzt SDT — nicht nur „motiviert sein“, sondern in der Aktivität aufgehen können.']
		},
		{ type: 'h2', text: 'Relevanz für Engagement Design' },
		{
			type: 'p',
			text: 'Flow-Momente machen Erfahrungen memorabel und freiwillig — ohne extrinsische Belohnung. In Projekten: Wo verliert die Journey den Flow-Kanal (Onboarding zu lang, Feedback zu spät, Schwierigkeitssprünge)?'
		}
	]
};
