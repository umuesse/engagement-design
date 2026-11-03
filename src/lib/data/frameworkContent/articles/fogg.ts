import type { FrameworkArticleContent } from '../types';

export const fogg: FrameworkArticleContent = {
	slug: 'fogg',
	tag: 'Behavioral Design',
	title: 'Fogg Behavior Model',
	lead: 'BJ Foggs Modell Behavior = Motivation × Ability × Prompt macht Verhalten designbar — solange du Manipulation von unterstützender Hilfe trennst.',
	metaDescription: 'Fogg Behavior Model: Motivation, Ability, Prompt — Tiny Habits und ethische Grenzen.',
	keyTerms: [
		{ term: 'Motivation', definition: 'Wunsch oder Druck, eine Handlung auszuführen — schwankt über die Zeit.' },
		{ term: 'Ability', definition: 'Wie einfach die Handlung ist — Zeit, Geld, kognitive Last, soziale Hürden.' },
		{ term: 'Prompt (Trigger)', definition: 'Signal, das zum Handeln auffordert — zur richtigen Zeit am richtigen Ort.' },
		{ term: 'Behavior Line', definition: 'Verhalten tritt auf, wenn alle drei Faktoren gleichzeitig ausreichend sind.' }
	],
	sources: [
		{
			label: 'Fogg, B. J. (2019). Tiny Habits',
			note: 'Populärwissenschaftlicher Einstieg',
			href: 'https://www.behaviormodel.org'
		}
	],
	blocks: [
		{ type: 'h2', text: 'Die Formel' },
		{
			type: 'p',
			text: 'Verhalten entsteht, wenn Motivation, Fähigkeit und ein Prompt zusammenkommen. Fehlt eines, passiert nichts — deshalb scheitern Apps mit Push-Spam bei niedriger Ability.'
		},
		{ type: 'h2', text: 'Design-Hebel' },
		{
			type: 'ul',
			items: [
				'<strong>Ability erhöhen:</strong> Handlung kleiner machen — weniger Schritte, Defaults, klare UI.',
				'<strong>Motivation stärken:</strong> Bedeutung, soziale Norm, nicht nur Angst.',
				'<strong>Prompt timen:</strong> Kontextuelle Hinweise statt generischer Banner.'
			]
		},
		{
			type: 'callout',
			title: 'Ethik',
			variant: 'caution',
			paragraphs: [
				'Prompts an Schwachstellen der Motivation zu setzen (Schuld, FOMO) ist kein „gutes Nudging“. Engagement Design fragt: Würde ich mir das als Nutzer wünschen?'
			]
		},
		{ type: 'h2', text: 'Relevanz für Engagement Design' },
		{
			type: 'p',
			text: 'Fogg ist ideal für Health, Nachhaltigkeit und Onboarding — kombiniere mit SDT, damit du Ability nicht mit Zwang verwechselst. Tag 3 Inputphase: Fogg neben Octalysis/MDA einordnen.'
		}
	]
};
