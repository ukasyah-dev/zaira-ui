import fs from 'node:fs/promises';
import type { LayoutServerLoad } from './$types.js';
import { error } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ params }) => {
	const folderPath = `./src/examples/${params.group}/${params.slug}`;

	let files: { name: string; content: any }[] = [];

	try {
		const filePaths = await fs.readdir(folderPath);

		for (const filePath of filePaths) {
			const file = await fs.readFile(`${folderPath}/${filePath}`, 'utf-8');
			files.push({ name: filePath, content: file.replaceAll('\t', '  ').trimEnd() });
		}
	} catch (err) {
		error(404);
	}

	return { files };
};
