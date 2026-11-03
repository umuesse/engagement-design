import { error } from '@sveltejs/kit';
import { getMethodArticle } from '#lib/data/methodContent';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const content = getMethodArticle(params.slug);

	if (!content) {
		error(404, 'Methode nicht gefunden');
	}

	return { content };
};
