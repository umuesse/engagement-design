import type { FrameworkArticleContent } from '../types';

export const meaningfulGamification: FrameworkArticleContent = {
	slug: 'meaningful-gamification',
	tag: 'Ethik & Kritik',
	title: 'Meaningful Gamification / RECIPE',
	lead: 'Scott Nicholson fordert Gamification jenseits von PBL: RECIPE verbindet Reflexion, Wahl und echtes Play — Ausgangspunkt für intrinsisch motivierendes Engagement Design.',
	metaDescription: 'Meaningful Gamification: RECIPE-Prinzipien — Reflection, Exposition, Choice, Information, Play, Engagement.',
	diagramId: 'meaningful-gamification',
	keyTerms: [
		{ term: 'Reflection', definition: 'Nutzer reflektieren Bedeutung und eigenes Lernen — nicht nur klicken.' },
		{ term: 'Exposition', definition: 'Inhalte/Story werden erlebbar gemacht, nicht nur punktet.' },
		{ term: 'Choice', definition: 'Echte Entscheidungsfreiheit in Pfaden und Aufgaben.' },
		{ term: 'Information', definition: 'Feedback informiert über Fortschritt und Sinn — nicht nur Rang.' },
		{ term: 'Play', definition: 'Freiwilliges Experimentieren, nicht Pflicht-Mechanik.' },
		{ term: 'Engagement', definition: 'Bindung durch Bedeutung und Teilhabe — RECIPE-Endziel.' }
	],
	sources: [
		{
			label: 'Nicholson, S. (2012). A User-Centered Theoretical Framework for Meaningful Gamification',
			note: 'Pflichtlektüre',
			href: 'https://scholarworks.bgsu.edu/cgi/viewcontent.cgi?article=1009&context=ohio_comm'
		}
	],
	blocks: [
		{ type: 'h2', text: 'RECIPE im Überblick' },
		{
			type: 'p',
			text: 'Nicholson kritisiert oberflächliche Points/Badges/Leaderboards. RECIPE beschreibt, wie Systeme Bedeutung erzeugen — studierendenzentriert und intrinsisch orientiert.'
		},
		{
			type: 'ul',
			items: [
				'Reflection — Journale, Debrief, Metakognition',
				'Exposition — Narrative, Kontext, „warum das zählt“',
				'Choice — echte Alternativen, nicht Scheinwahl',
				'Information — transparentes Feedback',
				'Play — erkundend, freiwillig',
				'Engagement — nachhaltige Beteiligung'
			]
		},
		{ type: 'h2', text: 'Abgrenzung zu PBL-Gamification' },
		{
			type: 'p',
			text: 'PBL kann Information und Exposition simulieren, ohne Choice oder Reflection. Meaningful Gamification verlangt: Würde es auch ohne Punkte noch Sinn machen?'
		},
		{ type: 'h2', text: 'Relevanz für Engagement Design' },
		{
			type: 'p',
			text: 'RECIPE ist Checkliste für Projekt-Konzepte — besonders in Bildung und Civic Tech. Tag 4 Inputphase: kombiniere mit Dark-Patterns-Reflexion.'
		}
	]
};
