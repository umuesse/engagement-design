import { createComingSoonArticle } from '#lib/data/frameworkContent/placeholder';

export const humanCentredDesign = createComingSoonArticle({
	slug: 'human-centred-design',
	tag: 'Prozess & Usability',
	title: 'Menschzentrierter Gestaltungsprozess (ISO 9241-210)',
	lead: 'Gute Engagement-Erlebnisse entstehen selten im ersten Entwurf. Die DIN EN ISO 9241-210 beschreibt einen menschzentrierten Gestaltungsprozess: Nutzende früh einbeziehen, Anforderungen klären und Lösungen iterativ evaluieren.',
	metaDescription:
		'Menschzentriertes Design nach ISO 9241-210: Nutzungskontext, Anforderungen, Iteration — Designmethoden-Artikel in Vorbereitung.',
	keyTerms: [
		{ term: 'Menschzentrierte Gestaltung', definition: 'Fokus auf Nutzungskontext, Ziele und Einschränkungen der Nutzenden.' },
		{ term: 'Nutzungskontext', definition: 'Aufgaben, Umgebung, Geräte und soziale Einbettung — Basis für Anforderungen.' },
		{ term: 'Iteration', definition: 'Entwurf und Evaluierung in Zyklen, nicht einmalig am Reißbrett.' }
	],
	plannedSections: [
		'Was „menschzentriert“ meint',
		'Prozessaktivitäten der ISO 9241-210',
		'Rollen im Studierendenprojekt',
		'Methodenbeispiele pro Phase',
		'Relevanz für Engagement Design (Hypothesen vs. Evidenz)'
	]
});
