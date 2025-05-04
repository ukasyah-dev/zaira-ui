import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';

export const load: PageLoad = async ({ params }) => {
	const filePath = `/src/lib/components/${params.group}/${params.slug}.doc.svx`;

	const examples: any = import.meta.glob('/src/lib/components/**/*.doc.svx');

	for (const path in examples) {
		if (path === filePath) {
			const segments = path.split('/');
			const doc = await examples[path]();
			return {
				name: segments[5].replace('.doc.svx', ''),
				component: doc.default
			};
		}
	}

	error(404);
};
