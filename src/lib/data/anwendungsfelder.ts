export type FrameworkHint = {
	label: string;
	href: string;
};

export type ApplicationField = {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	exampleProject: string;
	accent: string;
	frameworkHints: FrameworkHint[];
};

export const applicationFields: ApplicationField[] = [
	{
		id: 'bildung',
		title: 'Bildung & Lernen',
		subtitle: 'Learning Experience Design (LXD)',
		description:
			'Kurse, Lernpfade und Lerncommunities so gestalten, dass Studierende aus Neugier dranbleiben — nicht nur wegen Noten oder Streaks.',
		exampleProject:
			'Konzept für einen modularen Workshop-Block: SDT-gestützte Wahlmöglichkeiten, Flow-Momente in Übungen und Peer-Feedback statt reiner Punkte.',
		accent: '#7c3aed',
		frameworkHints: [
			{ label: 'SDT', href: '/frameworks/sdt' },
			{ label: 'Flow', href: '/frameworks/flow' }
		]
	},
	{
		id: 'gesundheit',
		title: 'Gesundheit',
		subtitle: 'Health Engagement',
		description:
			'Gewohnheiten, Prävention und Therapiebegleitung — Engagement, das langfristig hilft, ohne Schuldgefühle oder Druck zu erzeugen.',
		exampleProject:
			'Redesign einer „Schritte-App“-Logik: Fogg-Prompts nur dort, wo sie unterstützen; klare Ethik-Reflexion zu Belohnungsdruck und Ausgrenzung.',
		accent: '#db2777',
		frameworkHints: [
			{ label: 'Fogg Behavior Model', href: '/frameworks/fogg' },
			{ label: 'Dark Patterns & Ethik', href: '/frameworks/dark-patterns' }
		]
	},
	{
		id: 'nachhaltigkeit',
		title: 'Nachhaltigkeit',
		subtitle: 'Sustainable Behavior Design',
		description:
			'Nachhaltiges Verhalten motivieren — jenseits von Kurzzeit-Belohnungen und Greenwashing-Oberflächen.',
		exampleProject:
			'Engagement-Konzept für eine Hochschul-Campaign: Epic Meaning (Octalysis), sichtbarer Community-Impact und transparente Wirkung statt Badge-Sammeln.',
		accent: '#059669',
		frameworkHints: [
			{ label: 'Octalysis', href: '/frameworks/octalysis' },
			{ label: 'SDT', href: '/frameworks/sdt' }
		]
	},
	{
		id: 'hr',
		title: 'Organisationen & HR',
		subtitle: 'Employee Engagement',
		description:
			'Onboarding, Zusammenarbeit und Kultur — wie Systeme Mitarbeitende einbinden, ohne Leistungsdruck zu gamifizieren.',
		exampleProject:
			'Service Blueprint für Onboarding: Touchpoints, HEXAD-basierte Personas und kritische Stellen, an denen extrinsische KPIs Autonomie untergraben.',
		accent: '#0891b2',
		frameworkHints: [
			{ label: 'HEXAD', href: '/frameworks/hexad' },
			{ label: 'Service Design', href: '/frameworks/service-design' }
		]
	},
	{
		id: 'civic',
		title: 'Civic Tech',
		subtitle: 'Gesellschaftliche Teilhabe',
		description:
			'Bürgerbeteiligung, Community-Projekte und digitale Demokratie — Engagement mit demokratischem und ethischem Anspruch.',
		exampleProject:
			'Partizipationsformat für lokale Planung: Meaningful Gamification (RECIPE), klare Informationsphase und Schutz vor Social-Pressure-Patterns.',
		accent: '#ea580c',
		frameworkHints: [
			{ label: 'RECIPE', href: '/frameworks/meaningful-gamification' },
			{ label: 'Dark Patterns', href: '/frameworks/dark-patterns' }
		]
	}
];
