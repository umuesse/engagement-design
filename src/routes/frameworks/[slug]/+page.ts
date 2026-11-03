import { error } from '@sveltejs/kit';
import { getFrameworkArticle } from '#lib/data/frameworkContent';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const content = getFrameworkArticle(params.slug);

	if (!content) {
		error(404, 'Framework nicht gefunden');
	}

	return { content };
};
