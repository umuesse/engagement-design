import { createComingSoonArticle } from '#lib/data/frameworkContent/placeholder';

export const designThinking = createComingSoonArticle({
	slug: 'design-thinking',
	tag: 'Prozess & Innovation',
	title: 'Design Thinking',
	lead: 'Design Thinking verbindet Empathie, Problemeingrenzung und schnelle Prototypen zu einem iterativen Prozess — typisch in fünf Phasen von der d.school (Stanford). Für Engagement Design liefert es einen gangbaren Rahmen, bevor Lösungen oder Mechaniken fixiert werden.',
	metaDescription:
		'Design Thinking: Empathize, Define, Ideate, Prototype, Test — Methode für nutzerzentrierte Innovation, Artikel in Vorbereitung.',
	keyTerms: [
		{ term: 'Empathize (Einfühlen)', definition: 'Nutzer:innen, Kontext und Bedürfnisse verstehen — Beobachtung, Interviews, Immersion.' },
		{ term: 'Define (Definieren)', definition: 'Erkenntnisse zu einer klaren Problemstellung und Point of View verdichten.' },
		{ term: 'Ideate / Prototype / Test', definition: 'Ideen entwickeln, greifbar machen und früh mit echten Menschen prüfen — iterativ.' }
	],
	plannedSections: [
		'Empathize — Menschen und Kontext verstehen',
		'Define — Problemstellung schärfen',
		'Ideate — Ideenraum erweitern',
		'Prototype — schnell greifbar machen',
		'Test — lernen und iterieren; Relevanz für Engagement Design'
	]
});
