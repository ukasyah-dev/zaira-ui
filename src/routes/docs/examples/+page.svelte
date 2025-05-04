<script lang="ts">
	import { title } from '$lib/index.js';
	import { sentenceCase } from 'change-case';
	import type { PageData } from './$types.js';

	title.set('Examples');

	let { data }: { data: PageData } = $props();
</script>

<h1>Examples</h1>

<p>
	Ready-to-use demos of each component in real-world scenarios. You can see how things work at a
	glance and speed up integration.
</p>

{#each Object.keys(data.groups) as groupName}
	<h2>{sentenceCase(groupName)}</h2>

	<ul>
		{#each data.groups[groupName] as component}
			<li>
				<a href={`/examples/${groupName}/${component}`}>
					{sentenceCase(component)}
				</a>
			</li>
		{/each}
	</ul>
{/each}
