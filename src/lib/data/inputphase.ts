export type FrameworkLink = {
	href: string;
	label: string;
};

export type InputDay = {
	day: number;
	theme: string;
	accent: string;
	objectives: string[];
	frameworkHint?: string;
	frameworkLinks?: FrameworkLink[];
};

export const inputDays: InputDay[] = [
	{
		day: 1,
		theme: 'Was ist Engagement Design? — Abgrenzung, Begriffsklärung, Überblick',
		accent: '#7c3aed',
		objectives: [
			'Engagement Design von Gamification abgrenzen und zentrale Begriffe sicher verwenden',
			'Modulüberblick (Input- und Projektphase) nachvollziehen und eigene Lernziele formulieren',
			'Die Perspektive „Erfahrung statt reiner Spielmechanik“ in eigenen Worten erklären'
		]
	},
	{
		day: 2,
		theme: 'Motivationspsychologie — SDT, Flow, ARCS',
		accent: '#db2777',
		objectives: [
			'Die drei Grundbedürfnisse der Self-Determination Theory auf Beispiele anwenden',
			'Flow (Balance aus Challenge und Skill) für Lern- oder Produktsettings beschreiben',
			'Mit dem ARCS-Modell Motivationslücken in einem Szenario strukturieren'
		],
		frameworkHint: '/frameworks',
		frameworkLinks: [
			{ href: '/frameworks/sdt', label: 'SDT vertiefen' },
			{ href: '/frameworks', label: 'Framework-Hub' }
		]
	},
	{
		day: 3,
		theme: 'Frameworks — Octalysis, HEXAD, MDA, Fogg',
		accent: '#0891b2',
		objectives: [
			'Octalysis Core Drives benennen und ihre Stärken/Limitierungen diskutieren',
			'HEXAD-Typen für eine Zielgruppenanalyse im Projekt nutzen',
			'MDA sowie das Fogg Behavior Model auf ein Engagement-Szenario übertragen'
		],
		frameworkHint: '/frameworks'
	},
	{
		day: 4,
		theme: 'Ethik und kritische Perspektive — Dark Patterns, Meaningful Gamification',
		accent: '#ea580c',
		objectives: [
			'Dark Patterns von verantwortungsvollem Engagement Design unterscheiden',
			'Meaningful Gamification / RECIPE-Prinzipien erklären und beispielhaft anwenden',
			'Die Grenze zwischen Engagement und Manipulation in einer kurzen Reflexion benennen'
		]
	},
	{
		day: 5,
		theme: 'Methoden und Prozess — HCD, Experience Design, Projektübersicht',
		accent: '#059669',
		objectives: [
			'Human-Centered Design und Experience Design für Engagement-Projekte verknüpfen',
			'Touchpoints und Journey-Schritte für ein Service-basiertes Engagement skizzieren',
			'Die Projektphase vorbereiten: Thema, Frameworks, nächste Schritte festlegen'
		],
		frameworkHint: '/modul/projektphase',
		frameworkLinks: [
			{ href: '/modul/projektphase', label: 'Projektphase' },
			{ href: '/anwendungsfelder', label: 'Anwendungsfelder' }
		]
	}
];
