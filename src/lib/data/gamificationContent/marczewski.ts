import { createComingSoonArticle } from '#lib/data/frameworkContent/placeholder';

/** Gamification-Unterseite — nicht unter /frameworks/. */
export const marczewskiFramework = createComingSoonArticle({
	slug: 'marczewski',
	tag: 'Gamification',
	title: 'Marczewskis Gamification Design Framework',
	lead: 'Gamification ist auf dieser Website ein eigenes Themenfeld. Andrzej Marczewski liefert ein praxisnahes Rahmenwerk: von Spielertypen (Hexad) über Motivationspassung bis zur Frage, ob Gamification überhaupt die richtige Antwort ist.',
	metaDescription:
		'Marczewski Gamification Framework: Hexad, Design-Schritte und kritische Einordnung — Vertiefung in Vorbereitung.',
	keyTerms: [
		{ term: 'Hexad', definition: 'Marczewskis Spielertypen — Motivation pro Typ, keine Stereotyp-Schublade.' },
		{ term: 'Motivationspassung', definition: 'Mechaniken an Ziele und Nutzerprofile koppeln, nicht PBL als Default.' },
		{ term: 'Gamification Done Right', definition: 'Ziele klären, testen, ethisch reflektieren — vor Points und Badges.' }
	],
	plannedSections: [
		'Wann Gamification — und wann nicht',
		'Hexad (Player/User Types)',
		'Design-Schritte im Framework',
		'Mechanics vs. Meaning',
		'Relevanz für Engagement Design (Werkzeugkasten, ISO/Double Diamond vor Mechanik)'
	]
});
