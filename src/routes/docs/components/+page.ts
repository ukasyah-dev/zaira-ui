import type { PageLoad } from './$types.js';

export const load: PageLoad = async () => {
	const components: any = import.meta.glob('/src/lib/components/**/*.doc.svx');

	const groups: Record<string, string[]> = {};

	for (const path in components) {
		const segments = path.split('/');
		const group = segments[4];
		const slug = segments[5].replace('.doc.svx', '');

		if (!groups[group]) {
			groups[group] = [];
		}

		groups[group].push(slug);
	}

	return {
		groups
	};
};
