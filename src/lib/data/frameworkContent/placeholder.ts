import type { ContentBlock, FrameworkArticleContent, FrameworkKeyTerm } from './types';

type PlaceholderArticleInput = {
	slug: string;
	tag: string;
	title: string;
	lead: string;
	metaDescription: string;
	keyTerms?: FrameworkKeyTerm[];
	plannedSections?: string[];
};

/** Minimale Stub-Seite im SDT/RAMP-Layout — voller Artikel folgt später. */
export function createComingSoonArticle(input: PlaceholderArticleInput): FrameworkArticleContent {
	const blocks: ContentBlock[] = [
		{
			type: 'callout',
			title: 'In Vorbereitung',
			variant: 'insight',
			paragraphs: [
				'Dieser Artikel ist noch in Arbeit. Lead und Kernbegriffe unten geben schon eine Orientierung; Diagramm, Literatur und Vertiefung folgen in einer späteren Ausbaustufe.',
				'Feedback oder Literaturvorschläge? In der Projektphase oder im Modul ansprechen.'
			]
		}
	];

	if (input.plannedSections?.length) {
		blocks.push({ type: 'h2', text: 'Geplante Gliederung' });
		blocks.push({ type: 'ul', items: input.plannedSections });
	}

	return {
		slug: input.slug,
		tag: input.tag,
		title: input.title,
		lead: input.lead,
		metaDescription: input.metaDescription,
		diagramIds: [],
		keyTerms: input.keyTerms ?? [],
		blocks
	};
}
