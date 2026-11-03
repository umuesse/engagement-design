import type { FrameworkArticleContent } from './types';
import { arcs } from './articles/arcs';
import { darkPatterns } from './articles/dark-patterns';
import { experienceDesign } from './articles/experience-design';
import { flow } from './articles/flow';
import { fogg } from './articles/fogg';
import { hcd } from './articles/hcd';
import { hexad } from './articles/hexad';
import { hook } from './articles/hook';
import { mda } from './articles/mda';
import { meaningfulGamification } from './articles/meaningful-gamification';
import { octalysis } from './articles/octalysis';
import { ramp } from './articles/ramp';
import { sdt } from './articles/sdt';
import { serviceDesign } from './articles/service-design';

const articles: FrameworkArticleContent[] = [
	sdt,
	ramp,
	flow,
	arcs,
	octalysis,
	hexad,
	mda,
	fogg,
	hook,
	meaningfulGamification,
	darkPatterns,
	hcd,
	experienceDesign,
	serviceDesign
];

const bySlug = new Map(articles.map((article) => [article.slug, article]));

export function getFrameworkArticle(slug: string): FrameworkArticleContent | undefined {
	return bySlug.get(slug);
}

export function getAllFrameworkArticleSlugs(): string[] {
	return articles.map((article) => article.slug);
}

export type { ContentBlock, FrameworkArticleContent, FrameworkKeyTerm, FrameworkSource } from './types';
