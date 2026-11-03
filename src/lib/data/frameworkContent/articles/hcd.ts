import type { FrameworkArticleContent } from '../types';

export const hcd: FrameworkArticleContent = {
	slug: 'hcd',
	tag: 'Designmethoden',
	title: 'Human-Centered Design',
	lead: 'HCD verankert Engagement in echten Menschen, Kontexten und iterativen Prototypen — für euch oft die Brücke vom UX-Studium zum Modul ED.',
	metaDescription: 'Human-Centered Design: Empathie, Iteration, Prototypen — Engagement Design als HCD-Spezialisierung.',
	diagramIds: ['hcd'],
	keyTerms: [
		{ term: 'Empathie', definition: 'Bedürfnisse, Kontext und Constraints der Zielgruppe verstehen — nicht raten.' },
		{ term: 'Ideation', definition: 'Viele Lösungswege explorieren, bevor man Mechaniken festzurrt.' },
		{ term: 'Prototyping', definition: 'Günstig testen, bevor man skaliert — Flow und SDT früh prüfen.' },
		{ term: 'Test & Iteration', definition: 'Feedback einholen und Konzept anpassen — nicht nur „launchen“.' }
	],
	sources: [
		{
			label: 'IDEO — Human-Centered Design Kit',
			note: 'Praxisorientierte Methoden',
			href: 'https://designkit.org/methods.html'
		}
	],
	blocks: [
		{ type: 'h2', text: 'Kernprinzipien' },
		{
			type: 'ul',
			items: [
				'Menschen in ihrem Kontext verstehen (Research, Interviews, Beobachtung)',
				'Probleme definieren, bevor Lösungen (Mechanics) geliebt werden',
				'Prototypen schnell bauen und mit Nutzer testen',
				'Iterieren — Engagement ist selten beim ersten Wurf richtig'
			]
		},
		{ type: 'h2', text: 'Engagement Design als HCD-Spezialisierung' },
		{
			type: 'p',
			text: 'ED fokussiert auf motivationale und ethische Qualität der Erfahrung — HCD liefert den Prozess. Du nutzt HCD, um SDT/Octalysis/MDA nicht nur zu zitieren, sondern zu validieren.'
		},
		{ type: 'h2', text: 'Relevanz für die Projektphase' },
		{
			type: 'p',
			text: 'Tag 5 Inputphase: HCD strukturiert dein Vorgehen von der Idee bis zum Artefakt. Kombiniere mit Service Design, wenn dein System mehrere Touchpoints hat.'
		}
	]
};
