import type { FrameworkArticleContent } from '../types';

export const serviceDesign: FrameworkArticleContent = {
	slug: 'service-design',
	tag: 'Designmethoden',
	title: 'Service Design Thinking',
	lead: 'Engagement-Systeme sind selten nur eine App — Service Design verbindet Touchpoints, Backstage und Journey zu einem kohärenten Erlebnis.',
	metaDescription: 'Service Design: Customer Journey, Touchpoints, Service Blueprint — engagement über Kanäle hinweg.',
	diagramId: 'service-design',
	keyTerms: [
		{ term: 'Customer Journey', definition: 'Phasen, die Nutzer durchlaufen — von Awareness bis Nachbetreuung.' },
		{ term: 'Touchpoint', definition: 'Jeder Kontaktpunkt zwischen Mensch und Service (digital/physisch/human).' },
		{ term: 'Service Blueprint', definition: 'Visualisierung von Frontstage, Backstage und Support-Prozessen.' },
		{ term: 'Frontstage / Backstage', definition: 'Was Nutzer sehen vs. was Organisation im Hintergrund leistet.' }
	],
	sources: [
		{
			label: 'Service Design Network — Blueprint Method',
			note: 'Methodenüberblick',
			href: 'https://www.service-design-network.org'
		}
	],
	blocks: [
		{ type: 'h2', text: 'Warum Services für ED wichtig sind' },
		{
			type: 'p',
			text: 'Onboarding in HR, Gesundheitscoaching, Bürgerbeteiligung — Engagement entsteht über mehrere Kanäle. Wer nur eine App gamifiziert, übersieht oft den echten Service-Bruch.'
		},
		{ type: 'h2', text: 'Journey & Blueprint' },
		{
			type: 'ul',
			items: [
				'Journey map: Phasen, Emotionen, Pain Points, Engagement-Chancen',
				'Touchpoints mit Frameworks verknüpfen (z. B. SDT an „Choice“-Touchpoint)',
				'Blueprint: Welche Backstage-Prozesse müssen mitziehen, damit Frontstage nicht lügt?'
			]
		},
		{ type: 'h2', text: 'Relevanz für Engagement Design' },
		{
			type: 'p',
			text: 'Tag 5 und Projektphase: Service Design ist Lieferformat für ganzheitliche Konzepte — ideal kombiniert mit Anwendungsfeldern und HCD-Prototypen.'
		}
	]
};
