export type FrameworkSource = {
	label: string;
	note?: string;
	href?: string;
};

export type FrameworkKeyTerm = {
	term: string;
	definition: string;
};

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

export type FrameworkArticleContent = {
	slug: string;
	tag: string;
	title: string;
	lead: string;
	metaDescription: string;
	keyTerms: FrameworkKeyTerm[];
	sources: FrameworkSource[];
	blocks: ContentBlock[];
};
