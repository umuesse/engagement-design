export type FrameworkStatus = 'published' | 'soon';

export type FrameworkItem = {
	slug: string;
	title: string;
	shortLabel: string;
	status: FrameworkStatus;
	href: string;
	summary: string;
};

export type FrameworkGroup = {
	id: string;
	title: string;
	description: string;
	accent: string;
	items: FrameworkItem[];
	externalHref?: string;
};

function item(
	slug: string,
	title: string,
	shortLabel: string,
	summary: string,
	status: FrameworkStatus = 'soon'
): FrameworkItem {
	const href = status === 'published' ? `/frameworks/${slug}` : `/frameworks/${slug}`;
	return { slug, title, shortLabel, status, href, summary };
}

export const frameworkGroups: FrameworkGroup[] = [
	{
		id: 'motivation',
		title: 'Motivationspsychologie',
		description: 'Theoretische Basis — warum Menschen von innen heraus handeln (oder eben nicht).',
		accent: '#db2777',
		items: [
			item(
				'sdt',
				'Self-Determination Theory (SDT)',
				'SDT',
				'Autonomie, Kompetenz, Eingebundenheit — intrinsische Motivation statt PBL-Quickfixes.',
				'published'
			),
			item('flow', 'Flow Theory', 'Flow', 'Optimale Erfahrung zwischen Über- und Unterforderung.'),
			item('arcs', 'ARCS-Modell', 'ARCS', 'Attention, Relevance, Confidence, Satisfaction — Motivation strukturieren.')
		]
	},
	{
		id: 'engagement',
		title: 'Engagement-spezifische Frameworks',
		description: 'Werkzeuge aus Gamification & Game Design — kritisch gelesen.',
		accent: '#0891b2',
		items: [
			item('octalysis', 'Octalysis Framework', 'Octalysis', 'Acht Core Drives — extrinsisch vs. intrinsisch.'),
			item('hexad', 'HEXAD Player Types', 'HEXAD', 'Nuancierte Zielgruppen- und Motivationsprofile.'),
			item('mda', 'MDA Framework', 'MDA', 'Mechanics, Dynamics, Aesthetics — vom Regelwerk zur Erfahrung.')
		]
	},
	{
		id: 'behavioral',
		title: 'Behavioral Design',
		description: 'Verhalten verstehen und gestalten — ohne manipulative Abkürzungen.',
		accent: '#7c3aed',
		items: [
			item('fogg', 'Fogg Behavior Model', 'Fogg', 'Motivation × Ability × Prompt — operationalisierbar.'),
			item('hook', 'Hook Model', 'Hook', 'Trigger, Action, Reward, Investment — Grenzen erkennen.')
		]
	},
	{
		id: 'ethics',
		title: 'Bedeutungsvolle Gamification & Kritik',
		description: 'Ethik, Dark Patterns und nachhaltige Motivation.',
		accent: '#ea580c',
		items: [
			item('meaningful-gamification', 'Meaningful Gamification / RECIPE', 'RECIPE', 'Intrinsische Tiefe statt Oberflächen-PBL.'),
			item('dark-patterns', 'Ethics & Dark Patterns', 'Ethik', 'Manipulation vs. verantwortungsvolles Engagement.')
		]
	},
	{
		id: 'methods',
		title: 'Designmethoden & Prozesse',
		description: 'Vom menschenzentrierten Prozess zur bedeutsamen Erfahrung.',
		accent: '#059669',
		items: [
			item('hcd', 'Human-Centered Design', 'HCD', 'Anknüpfung an UX-Vorwissen im Studium.'),
			item('experience-design', 'Experience Design', 'XD', 'Peak-End, Bedeutung, Anfang–Mitte–Ende.'),
			item('service-design', 'Service Design Thinking', 'Service Design', 'Journeys, Touchpoints, Blueprints.')
		]
	},
	{
		id: 'application',
		title: 'Anwendungsfelder',
		description: 'Wo Engagement Design in Projekten lebt — Themen für die Projektphase.',
		accent: '#14b8a6',
		items: [],
		externalHref: '/anwendungsfelder'
	}
];

export function getFrameworkBySlug(slug: string): FrameworkItem | undefined {
	for (const group of frameworkGroups) {
		const found = group.items.find((entry) => entry.slug === slug);
		if (found) return found;
	}
	return undefined;
}

export function getAllFrameworkSlugs(): string[] {
	return frameworkGroups.flatMap((group) => group.items.map((item) => item.slug));
}
