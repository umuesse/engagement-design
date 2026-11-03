export type ProjectStep = {
	title: string;
	detail: string;
};

export type Deliverable = {
	title: string;
	description: string;
	status: 'placeholder' | 'fixed';
};

export const projectSteps: ProjectStep[] = [
	{
		title: 'Thema & Kontext klären',
		detail:
			'Wähle ein Anwendungsfeld und ein konkretes Problem oder eine Zielgruppe. Dokumentiere Annahmen und Grenzen des Settings.'
	},
	{
		title: 'Frameworks gezielt auswählen',
		detail:
			'Nutze mindestens zwei Frameworks aus unterschiedlichen Blöcken (z. B. SDT + Fogg oder MDA + Ethik) — begründe, warum sie passen.'
	},
	{
		title: 'Engagement-Konzept entwerfen',
		detail:
			'Beschreibe Mechanics/Dynamics/Aesthetics oder Journey/Touchpoints: Was erleben Menschen — und welche Motivation soll entstehen?'
	},
	{
		title: 'Ethik & Dark Patterns reflektieren',
		detail:
			'Benenne Risiken (Druck, Sucht-Logiken, Ausgrenzung) und Gegenmaßnahmen. Engagement Design heißt auch: Nein sagen zu Manipulation.'
	},
	{
		title: 'Prototyp, Test oder Simulation',
		detail:
			'Je nach Thema: klickbarer Prototyp, Roleplay, Wizard-of-Oz-Test oder dokumentiertes Walkthrough — mit kurzer Auswertung.'
	},
	{
		title: 'Dokumentation & Präsentation',
		detail:
			'Ergebnisse strukturiert aufbereiten; im Plenum oder in Kleingruppen vorstellen (Format siehe Deliverables — noch in Klärung).'
	}
];

export const deliverables: Deliverable[] = [
	{
		title: 'Projektbericht / Case Study',
		description:
			'Ca. 8–12 Seiten (Richtwert, bis Prüfungsform final): Problem, Frameworks, Konzept, Ethik-Reflexion, Learnings.',
		status: 'placeholder'
	},
	{
		title: 'Präsentation',
		description: 'Kompakter Pitch (ca. 10–15 Min.) plus Q&A — Fokus auf Entscheidungen und kritische Reflexion.',
		status: 'placeholder'
	},
	{
		title: 'Artefakt',
		description:
			'Prototyp, Service Blueprint, Octalysis-Canvas o. Ä. — zeigt, wie dein Konzept erlebbar wird (Format flexibel).',
		status: 'placeholder'
	}
];
