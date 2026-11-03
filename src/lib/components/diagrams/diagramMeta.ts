import type { FrameworkDiagramId } from '#lib/data/frameworkContent/types';

export type DiagramMeta = {
	caption: string;
	longDescription: string;
};

export const diagramMeta: Record<FrameworkDiagramId, DiagramMeta> = {
	'sdt-spectrum': {
		caption:
			'Kontinuum der Selbstbestimmung (Ryan & Deci): sechs Stufen von Amotivation über vier extrinsische Regulierungstypen (gruppiert) bis intrinsische Motivation — mit Kurztext pro Stufe; auf schmalen Screens als vertikale Abfolge.',
		longDescription:
			'Horizontales Säulenlayout mit mehrzeiligen Regulierungsnamen und zweizeiligen Kurzdeskriptoren auf hellem Hintergrund; Klammer „Extrinsische Motivation“ über vier mittlere Stufen; Achse nicht selbstbestimmt nach selbstbestimmt; Internalisierungspfeil unten. Unter 640px Breite vertikale Variante ohne überlappende Spalten.'
	},
	'sdt-needs': {
		caption:
			'Autonomie, Kompetenz und soziale Eingebundenheit sind Bedingungen, die intrinsische Motivation stützen — Pfeile zeigen ihre konvergierende Wirkung auf das Ziel „intrinsische Motivation“.',
		longDescription:
			'Drei Bedürfnisfelder in einer violetten Farbfamilie oben; Pfeile führen zu einer zentralen Ellipse „Intrinsische Motivation“. Legende erklärt die unterstützende Rolle der Grundbedürfnisse.'
	},
	flow: {
		caption: 'Flow-Kanal: Balance aus Herausforderung (Challenge) und Können (Skill).',
		longDescription:
			'Achsenmodell: Zu niedrige Herausforderung führt zu Langeweile, zu hohe zu Angst; dazwischen liegt der Flow-Kanal.'
	},
	arcs: {
		caption: 'ARCS: Attention, Relevance, Confidence, Satisfaction.',
		longDescription: 'Vier Säulen des ARCS-Modells für motivationsorientiertes Lern- und Experience Design.'
	},
	octalysis: {
		caption: 'Octalysis: Acht Core Drives, grob links (extrinsisch) vs. rechts (intrinsisch).',
		longDescription:
			'Vereinfachte Übersicht der acht Core Drives von Yu-kai Chou in zwei Hemisphären.'
	},
	hexad: {
		caption: 'HEXAD: Sechs Spieler- bzw. Motivationstypen.',
		longDescription: 'Sechs HEXAD-Typen als Orientierung für Zielgruppenanalyse.'
	},
	mda: {
		caption: 'MDA: Mechanics → Dynamics → Aesthetics.',
		longDescription: 'Drei Ebenen vom Regelwerk über emergentes Verhalten zur erlebten Wirkung.'
	},
	fogg: {
		caption: 'Fogg Behavior Model: Verhalten entsteht aus Motivation, Ability und Prompt.',
		longDescription: 'Drei Faktoren müssen gleichzeitig ausreichend sein, damit ein Verhalten auftritt.'
	},
	hook: {
		caption: 'Hook Model: Trigger → Action → Variable Reward → Investment.',
		longDescription: 'Vierstufiger Gewohnheitskreislauf — im Modul kritisch hinterfragt.'
	},
	'meaningful-gamification': {
		caption: 'RECIPE: Reflection, Exposition, Choice, Information, Play, Engagement.',
		longDescription: 'Sechs Prinzipien für meaningful gamification nach Scott Nicholson.'
	},
	'dark-patterns': {
		caption: 'Abgrenzung: Ethisches Engagement Design vs. manipulative Dark Patterns.',
		longDescription:
			'Gegenüberstellung ethischer Gestaltungsprinzipien und typischer manipulativer Muster.'
	},
	hcd: {
		caption: 'Human-Centered Design: iterativer Prozess.',
		longDescription: 'Vereinfachter Zyklus aus Verstehen, Ideen, Prototyp und Test.'
	},
	'experience-design': {
		caption: 'Experience Design: Verlauf mit Peak und Ende (Peak-End-Rule).',
		longDescription: 'Skizze einer Erfahrungskurve mit markiertem Höhepunkt und Endmoment.'
	},
	'service-design': {
		caption: 'Service Blueprint: Frontstage, Backstage, Support.',
		longDescription: 'Vereinfachte Schichten eines Service Blueprint für Touchpoints und Prozesse.'
	}
};
