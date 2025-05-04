import { error } from '@sveltejs/kit';
import { sentenceCase } from 'change-case';
import type { PageLoad } from './$types.js';

export const load: PageLoad = async ({ parent, params }) => {
	const data = await parent();

	const filePath = `/src/examples/${params.group}/${params.slug}/index.svelte`;

	const examples: any = import.meta.glob('/src/examples/**/index.svelte');

	for (const path in examples) {
		if (path === filePath) {
			const segments = path.split('/');
			const doc = await examples[path]();
			return {
				name: sentenceCase(segments[4]),
				component: doc.default,
				...data
			};
		}
	}

	error(404);
};
