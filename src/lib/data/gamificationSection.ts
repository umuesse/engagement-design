export type GamificationLink = {
	href: string;
	label: string;
	description: string;
};

export type GamificationTopicStatus = 'published' | 'soon';

/** Eigene Unterseiten unter /gamification/… (nicht /frameworks/). */
export type GamificationTopicItem = {
	slug: string;
	href: string;
	title: string;
	summary: string;
	status: GamificationTopicStatus;
};

export const gamificationTopicItems: GamificationTopicItem[] = [
	{
		slug: 'marczewski',
		href: '/gamification/marczewski',
		title: 'Marczewski — Gamification Design Framework',
		summary:
			'Hexad-Spielertypen, Design-Schritte und kritische Einordnung — bevor Points, Badges und Leaderboards im Vordergrund stehen.',
		status: 'soon'
	}
];

export type GamificationSubsection = {
	id: string;
	title: string;
	paragraphs: string[];
	/** Optional follow-up link shown after paragraphs */
	relatedLink?: { href: string; label: string };
};

export const gamificationMeta = {
	title: 'Gamification',
	tag: 'Modulgeschichte · Kritische Einordnung',
	lead: 'Gamification war der Ausgangspunkt des Bachelor-Moduls — Engagement Design ist der weiterführende Rahmen. Hier ordnest du Begriffe, Grenzen und Verknüpfungen ein, ohne Motivationstheorie mit Spielmechaniken zu vermischen.',
	metaDescription:
		'Gamification im ED-Modul: Begriff, Wechsel GAM → ED, Grenzen von PBL und Links zu Framework-Vertiefungen.'
};

export const gamificationSubsections: GamificationSubsection[] = [
	{
		id: 'was-ist-gamification',
		title: 'Was ist Gamification?',
		paragraphs: [
			'Gamification bezeichnet den Einsatz von spieltypischen Elementen in nicht-spieligen Kontexten — etwa Punkte, Abzeichen, Fortschrittsbalken, Herausforderungen oder Ranglisten — um Verhalten zu strukturieren oder zu verstärken.',
			'Im Modul dient der Begriff als historischer und kritischer Bezugspunkt: Viele Beispiele aus Industrie und Lehre nutzen genau diese Oberflächen-Mechaniken. Engagement Design fragt darüber hinaus, welche Erfahrung, welche Motivation und welche Ethik dahinterstehen.'
		]
	},
	{
		id: 'gam-zu-ed',
		title: 'Vom Modul Gamification (GAM) zu Engagement Design (ED)',
		paragraphs: [
			'Das Modul hieß früher Gamification (GAM). Der Wechsel zu Engagement Design (ED) markiert eine inhaltliche Erweiterung: weniger Fokus auf „Spiel um des Spiels willen“, mehr auf bedeutsame, motivierende Erfahrungen — psychologisch fundiert, ethisch reflektiert und systemisch gedacht.',
			'Gamification bleibt als Thema sichtbar (dieser Bereich), wird aber nicht mit jedem Framework vermischt — Motivationspsychologie z. B. behandelst du separat unter Self-Determination Theory.'
		]
	},
	{
		id: 'pbl-grenzen',
		title: 'Grenzen von PBL (Points, Badges, Leaderboards)',
		paragraphs: [
			'PBL steht oft für die sichtbarsten Gamification-Muster: Punkte sammeln, Abzeichen freischalten, sich auf Ranglisten vergleichen. Sie können Orientierung und kurzfristige Aktivierung liefern — sind aber kein Ersatz für durchdachtes Experience Design.',
			'Typische Grenzen: Abhängigkeit von externen Anreizen, Vergleichsdruck, wenig Bedeutung jenseits der Mechanik, schwache Langzeitbindung wenn Belohnungen entfallen. Warum das psychologisch relevant ist, erklärt die Motivationstheorie — ohne hier erneut das volle SDT-Kapitel zu öffnen.'
		],
		relatedLink: { href: '/frameworks/sdt', label: 'Self-Determination Theory (SDT) — Motivationstheorie' }
	},
	{
		id: 'hilft-schadet',
		title: 'Wann Gamification hilft — und wann sie schadet',
		paragraphs: [
			'Hilfreich, wenn Mechaniken Transparenz schaffen (Fortschritt), Wahlmöglichkeiten erweitern, Feedback geben oder gemeinsame Reflexion unterstützen — und wenn sie zu den Lernzielen passen.',
			'Problematisch, wenn Druck, Scham oder reiner Wettbewerb im Vordergrund stehen, wenn Teilnahme erzwungen wirkt, oder wenn Design primär Retention maximiert statt Nutzen für Menschen.',
			'Im Modul lernst du Frameworks, die Gamification kritisch einordnen (RECIPE, Dark Patterns) und Alternativen jenseits reiner PBL-Oberfläche.'
		]
	}
];

export const gamificationFrameworkLinks: GamificationLink[] = [
	{
		href: '/frameworks/meaningful-gamification',
		label: 'Meaningful Gamification / RECIPE',
		description: 'Reflexion, Wahl, Information und Play — jenseits oberflächlicher Points & Badges.'
	},
	{
		href: '/frameworks/dark-patterns',
		label: 'Dark Patterns & Ethik',
		description: 'Wo Engagement Design an Grenzen stößt — Manipulation erkennen und vermeiden.'
	},
	{
		href: '/frameworks/sdt',
		label: 'Self-Determination Theory',
		description: 'Motivationspsychologische Basis — getrennt von Gamification-Mechaniken.'
	}
];
