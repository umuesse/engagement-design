import type { FrameworkArticleContent } from '../types';

export const arcs: FrameworkArticleContent = {
	slug: 'arcs',
	tag: 'Motivationspsychologie',
	title: 'ARCS-Modell',
	lead: 'Kellers ARCS-Modell übersetzt Motivationspsychologie in vier designbare Dimensionen — ideal als Checkliste zwischen Theorie und konkretem Kurs- oder Produktkonzept.',
	metaDescription: 'ARCS: Attention, Relevance, Confidence, Satisfaction — Motivationslücken strukturieren.',
	diagramIds: ['arcs'],
	keyTerms: [
		{ term: 'Attention (A)', definition: 'Aufmerksamkeit gewinnen und halten — ohne nur zu schockieren.' },
		{ term: 'Relevance (R)', definition: 'Bedarf, Ziele und Identität der Zielgruppe anknüpfen.' },
		{ term: 'Confidence (C)', definition: 'Erfolgserwartung und Gefühl der Machbarkeit stärken.' },
		{ term: 'Satisfaction (S)', definition: 'Belohnendes Abschluss- und Feedback-Erlebnis — intrinsisch wo möglich.' }
	],
	sources: [
		{
			label: 'Keller, J. M. (1987). Development and use of the ARCS model of instructional design',
			note: 'Überblick über ARCS in der Lernmotivation'
		}
	],
	blocks: [
		{ type: 'h2', text: 'Die vier Dimensionen' },
		{
			type: 'ul',
			items: [
				'<strong>Attention:</strong> Einstieg, Variation, überraschende Beispiele — aber konsistent mit Lernziel.',
				'<strong>Relevance:</strong> „Wofür brauche ich das?“ — Beruf, Projekt, gesellschaftlicher Bezug.',
				'<strong>Confidence:</strong> Scaffolding, klare Kriterien, frühe Erfolge.',
				'<strong>Satisfaction:</strong> Sinnvolles Abschluss-Feedback, Reflexion, nicht nur Zertifikat.'
			]
		},
		{ type: 'h2', text: 'Als Diagnose-Tool' },
		{
			type: 'p',
			text: 'Gehe ein Szenario durch: Wo fehlt Aufmerksamkeit? Wo fehlt Relevanz? Wo verlieren Nutzer Vertrauen in ihre Fähigkeit? Wo endet es ohne befriedigendes Gefühl?'
		},
		{ type: 'h2', text: 'Relevanz für Engagement Design' },
		{
			type: 'p',
			text: 'ARCS ist leicht im Team diskutierbar und ergänzt SDT/Flow mit operativen Fragen — ohne sofort in PBL-Mechaniken abzurutschen.'
		}
	]
};
