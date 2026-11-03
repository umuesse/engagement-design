import type { FrameworkArticleContent } from '../types';

export const octalysis: FrameworkArticleContent = {
	slug: 'octalysis',
	tag: 'Engagement-Frameworks',
	title: 'Octalysis Framework',
	lead: 'Yu-kai Chous Octalysis ordnet Motivation in acht Core Drives — praktisch für Brainstorming, aber in ED immer kritisch gegen Ethik und intrinsische Bedeutung gespiegelt.',
	metaDescription: 'Octalysis: 8 Core Drives, Left vs. Right Brain — anwendbar und kritisch lesen.',
	keyTerms: [
		{ term: 'Core Drives', definition: 'Motivationskräfte wie Epic Meaning, Accomplishment, Social Influence u. a.' },
		{ term: 'Left Brain / extrinsisch', definition: 'Logik, Status, Besitz — oft belohnungs- und zielorientiert.' },
		{ term: 'Right Brain / intrinsisch', definition: 'Kreativität, Bedeutung, soziale Bindung ohne Zwang.' },
		{ term: 'White Hat vs. Black Hat', definition: 'Positive vs. druck-/angstbasierte Drives (in Chous späterer Terminologie).' }
	],
	sources: [
		{
			label: 'Chou, Y.-k. (2015). Actionable Gamification',
			note: 'Einführung Octalysis',
			href: 'https://yukaichou.com/gamification-examples/octalysis-gamification/'
		}
	],
	blocks: [
		{ type: 'h2', text: 'Die acht Core Drives (Kurzüberblick)' },
		{
			type: 'ul',
			items: [
				'Epic Meaning & Calling — Beitrag zu etwas Größerem',
				'Development & Accomplishment — Fortschritt und Meisterschaft',
				'Empowerment & Feedback — Kreativität und Experimentieren',
				'Ownership & Possession — Besitz und Sammlung',
				'Social Influence & Relatedness — Anerkennung und Zugehörigkeit',
				'Scarcity & Impatience — Knappheit und FOMO',
				'Unpredictability & Curiosity — Überraschung',
				'Loss & Avoidance — Verlust vermeiden'
			]
		},
		{ type: 'h2', text: 'Left Brain vs. Right Brain' },
		{
			type: 'p',
			text: 'Chou unterscheidet eher extrinsische (logische, zielgerichtete) und intrinsische (bedeutungs- und erfahrungsorientierte) Drives. Engagement Design nutzt die Karte zum Ideenfinden — nicht als Rechtfertigung für Druck-Mechaniken.'
		},
		{
			type: 'callout',
			title: 'Kritisch lesen',
			variant: 'caution',
			paragraphs: [
				'Drives wie Scarcity, Unpredictability und Loss & Avoidance grenzen schnell an Dark Patterns. Im Projekt explizit benennen, wenn du sie bewusst meidest.'
			]
		},
		{ type: 'h2', text: 'Relevanz für Engagement Design' },
		{
			type: 'p',
			text: 'Octalysis hilft, Motivationslücken sichtbar zu machen — ergänze es mit SDT und Ethik, damit nicht „mehr Drives“ mit besserem Design verwechselt wird.'
		}
	]
};
