import type { FrameworkArticleContent } from '../types';

export const hook: FrameworkArticleContent = {
	slug: 'hook',
	tag: 'Behavioral Design',
	title: 'Hook Model',
	lead: 'Nir Eyals Hook Model (Trigger → Action → Variable Reward → Investment) erklärt gewohnheitsbildende Produkte — im Modul liest du es bewusst kritisch: Wo endet Engagement, wo beginnt Sucht?',
	metaDescription: 'Hook Model: Trigger, Action, Variable Reward, Investment — Grenze zu Manipulation.',
	keyTerms: [
		{ term: 'Trigger', definition: 'Extern (Notification) oder intern (Gefühl, Routine), das Handeln auslöst.' },
		{ term: 'Action', definition: 'Minimale Handlung mit geringer Hürde — oft im Fogg-Sinne Ability.' },
		{ term: 'Variable Reward', definition: 'Unvorhersehbare Belohnung — stark dopaminerg, ethisch heikel.' },
		{ term: 'Investment', definition: 'Nutzer investiert Zeit/Daten/Soziales — erhöht Wechselkosten.' }
	],
	sources: [
		{
			label: 'Eyal, N. (2014). Hooked: How to Build Habit-Forming Products',
			note: 'Primärquelle — kritisch lesen'
		}
	],
	blocks: [
		{ type: 'h2', text: 'Der vierstufige Kreislauf' },
		{
			type: 'ul',
			items: [
				'Trigger weckt Bedürfnis oder nutzt Gewohnheit',
				'Action ist die einfachste Handlung (Scroll, Like, Check-in)',
				'Variable Reward hält Unsicherheit aufrecht (Feed, Loot, Likes)',
				'Investment speichert Wert im System (Profil, Freunde, Content)'
			]
		},
		{
			type: 'callout',
			title: 'Kritische Perspektive',
			variant: 'caution',
			paragraphs: [
				'Variable Rewards und Investment sind auch Dark-Pattern-Werkzeuge. Im Projekt: Welche Hook-Phase würdest du bewusst abschwächen oder ersetzen — z. B. durch meaningful statt variable Belohnung?'
			]
		},
		{ type: 'h2', text: 'Relevanz für Engagement Design' },
		{
			type: 'p',
			text: 'Du musst Hook-Logik erkennen, um sie zu vermeiden oder ethisch zu nutzen — z. B. Investment als echten Lernfortschritt, nicht als Lock-in. Verknüpfe mit Meaningful Gamification und Dark Patterns (Tag 4).'
		}
	]
};
