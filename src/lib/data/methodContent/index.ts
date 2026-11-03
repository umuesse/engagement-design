import type { FrameworkArticleContent } from '#lib/data/frameworkContent/types';
import { doubleDiamond } from './articles/double-diamond';
import { humanCentredDesign } from './articles/human-centred-design';

const articles: FrameworkArticleContent[] = [humanCentredDesign, doubleDiamond];

const bySlug = new Map(articles.map((article) => [article.slug, article]));

export function getMethodArticle(slug: string): FrameworkArticleContent | undefined {
	return bySlug.get(slug);
}
