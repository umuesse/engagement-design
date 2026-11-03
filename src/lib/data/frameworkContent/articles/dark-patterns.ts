import type { FrameworkArticleContent } from '../types';

export const darkPatterns: FrameworkArticleContent = {
	slug: 'dark-patterns',
	tag: 'Ethik & Kritik',
	title: 'Ethics & Dark Patterns',
	lead: 'Dark Patterns nutzen UX-Wissen gegen Nutzerinteressen — Engagement Design definiert sich auch darüber, welche „ erfolgreichen“ Mechaniken du bewusst nicht einsetzt.',
	metaDescription: 'Dark Patterns, manipulative Engagement-Mechaniken und ethische Verantwortung in ED-Projekten.',
	keyTerms: [
		{ term: 'Dark Pattern', definition: 'Interface- oder Systemdesign, das Nutzer zu ungewollten Handlungen drängt.' },
		{ term: 'Variable Reward Schedule', definition: 'Unvorhersehbare Belohnung — suchterzeugend (vgl. Hook Model).' },
		{ term: 'Social Pressure', definition: 'Schuld, Vergleich, öffentliche Rankings — extrinsischer Druck.' },
		{ term: 'Engagement vs. Manipulation', definition: 'Freiwillige, informierte Teilhabe vs. versteckte Lenkung.' }
	],
	sources: [
		{
			label: 'Zagal, J. P., et al. (2013). Dark Patterns in the Design of Games',
			note: 'Einstieg aus Game Design',
			href: 'https://dtwgames.com/category/dark-patterns/'
		},
		{
			label: 'deceptive.design (Hall of Shame)',
			note: 'Aktuelle UI-Beispiele',
			href: 'https://www.deceptive.design'
		}
	],
	blocks: [
		{ type: 'h2', text: 'Typische Muster' },
		{
			type: 'ul',
			items: [
				'Loot-Box-Logik und gambling-nahe variable Rewards',
				'Nagging, Countdowns und künstliche Knappheit (FOMO)',
				'Ranglisten und Social Comparison ohne Opt-out',
				'Versteckte Kosten, Roach Motel, Trick Questions in UX',
				'Gamification als Überwachung (Punkte für Pflichtverhalten)'
			]
		},
		{ type: 'h2', text: 'Engagement Design vs. Manipulation' },
		{
			type: 'p',
			text: 'Engagement Design will Bedeutung und freiwillige Bindung — Manipulation maximiert Metriken ohne informierte Zustimmung. Im Projekt: „Ethik-Kapitel“ mit konkreten Designentscheidungen, die du verweigerst.'
		},
		{
			type: 'callout',
			title: 'Projektphase',
			paragraphs: [
				'In der Projektphase ist eine Dark-Patterns-Reflexion Pflicht — verlinke zu Hook, Octalysis (Black Hat) und deinem Anwendungsfeld (z. B. Gesundheit).'
			]
		},
		{ type: 'h2', text: 'Relevanz für Engagement Design' },
		{
			type: 'p',
			text: 'Ethik ist kein Anhang — sie ist Filter für Mechanics. Wer Dark Patterns benennen kann, kann bessere Alternativen aus SDT, RECIPE und HCD ableiten.'
		}
	]
};
