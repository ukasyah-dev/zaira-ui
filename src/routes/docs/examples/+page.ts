import type { PageLoad } from './$types.js';

export const load: PageLoad = async () => {
	const components: any = import.meta.glob('/src/examples/**/index.svelte');

	const groups: Record<string, string[]> = {};

	for (const path in components) {
		const segments = path.split('/');
		const group = segments[3];
		const slug = segments[4];

		if (!groups[group]) {
			groups[group] = [];
		}

		groups[group].push(slug);
	}

	return {
		groups
	};
};
