export type FrameworkSource = {
	label: string;
	note?: string;
	href?: string;
};

export type FrameworkKeyTerm = {
	term: string;
	definition: string;
};

export type FrameworkDiagramId =
	| 'sdt-spectrum'
	| 'sdt-needs'
	| 'flow'
	| 'arcs'
	| 'octalysis'
	| 'hexad'
	| 'mda'
	| 'fogg'
	| 'hook'
	| 'meaningful-gamification'
	| 'dark-patterns'
	| 'hcd'
	| 'experience-design'
	| 'service-design';

export type ContentBlock =
	| { type: 'h2'; text: string }
	| { type: 'p'; text: string }
	| { type: 'ul'; items: string[] }
	| {
			type: 'callout';
			title?: string;
			variant?: 'insight' | 'caution';
			paragraphs: string[];
	  };

export type FrameworkArticleSection = {
	diagramIds?: FrameworkDiagramId[];
	blocks: ContentBlock[];
};

export type FrameworkArticleContent = {
	slug: string;
	tag: string;
	title: string;
	lead: string;
	metaDescription: string;
	diagramIds: FrameworkDiagramId[];
	keyTerms: FrameworkKeyTerm[];
	sources: FrameworkSource[];
	blocks: ContentBlock[];
	/** Optional: diagram + text abschnittsweise (z. B. SDT) statt alle Diagramme am Anfang */
	sections?: FrameworkArticleSection[];
};
