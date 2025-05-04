<script lang="ts">
	import { title } from '$lib/index.js';
	import { sentenceCase } from 'change-case';
	import type { PageData } from './$types.js';

	title.set('Components');

	let { data }: { data: PageData } = $props();
</script>

<h1>Components</h1>

<p>This section is all about the building blocks of the UI library.</p>

{#each Object.keys(data.groups) as groupName}
	<h2>{sentenceCase(groupName)}</h2>

	<ul>
		{#each data.groups[groupName] as component}
			<li>
				<a href={`/docs/components/${groupName}/${component}`}>
					{component}
				</a>
			</li>
		{/each}
	</ul>
{/each}
