export type FrameworkSource = {
	label: string;
	note?: string;
	href?: string;
};

/** APA-7-Eintrag für Literaturverzeichnis am Artikelende (Anker: ref-{id}). */
export type FrameworkReference = {
	id: string;
	/** APA-Referenz; <em> für Kursiv, optional DOI/URL inline. */
	apa: string;
	/** Zusätzlicher Volltext-Link (PDF etc.), wenn nicht schon in apa. */
	href?: string;
	accessLabel?: string;
};

export type FrameworkKeyTerm = {
	term: string;
	definition: string;
};

export type FrameworkDiagramId =
	| 'sdt-spectrum'
	| 'sdt-needs'
	| 'ramp'
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
			type: 'table';
			caption?: string;
			headers: string[];
			rows: string[][];
	  }
	| {
			type: 'callout';
			title?: string;
			variant?: 'insight' | 'caution';
			paragraphs: string[];
	  };

export type FrameworkArticleSection = {
	diagramIds?: FrameworkDiagramId[];
	/** Optional: Prosa vor der Diagramm-Karte; `blocks` folgen danach */
	blocksBeforeDiagram?: ContentBlock[];
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
	sources?: FrameworkSource[];
	references?: FrameworkReference[];
	blocks: ContentBlock[];
	/** Optional: diagram + text abschnittsweise (z. B. SDT) statt alle Diagramme am Anfang */
	sections?: FrameworkArticleSection[];
};
