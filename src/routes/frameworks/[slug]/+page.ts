import { error } from '@sveltejs/kit';
import { getFrameworkBySlug } from '#lib/data/frameworks';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const entry = getFrameworkBySlug(params.slug);

	if (!entry) {
		error(404, 'Framework nicht gefunden');
	}

	if (entry.status === 'published') {
		error(404, 'Framework nicht gefunden');
	}

	return { entry };
};
