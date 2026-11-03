import { marczewskiFramework } from '#lib/data/gamificationContent/marczewski';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return { content: marczewskiFramework };
};
