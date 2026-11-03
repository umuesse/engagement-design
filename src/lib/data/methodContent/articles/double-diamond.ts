import { createComingSoonArticle } from '#lib/data/frameworkContent/placeholder';

export const doubleDiamond = createComingSoonArticle({
	slug: 'double-diamond',
	tag: 'Prozess & Innovation',
	title: 'Double Diamond',
	lead: 'Das Double Diamond (Design Council) strukturiert Designarbeit in zwei Diamanten: erst den Problemraum erkunden und eingrenzen, dann den Lösungsraum entwickeln und liefern — bevor Lösungen voreilig fixiert werden.',
	metaDescription:
		'Double Diamond: Discover, Define, Develop, Deliver — Designprozess für Engagement Design, Artikel in Vorbereitung.',
	keyTerms: [
		{ term: 'Discover', definition: 'Divergierend: Kontext und Breite verstehen, bevor Lösungen skizziert werden.' },
		{ term: 'Define', definition: 'Konvergierend: Insight, Problemstellung und Anforderungen schärfen.' },
		{ term: 'Develop / Deliver', definition: 'Ideation, Prototypen, Test und Auslieferung mit passenden Messgrößen.' }
	],
	plannedSections: [
		'Discover — Problemraum erkunden',
		'Define — eingrenzen und formulieren',
		'Develop — Ideen und Prototypen',
		'Deliver — testen und ausliefern',
		'Verknüpfung mit ISO 9241-210 und Modulplan'
	]
});
