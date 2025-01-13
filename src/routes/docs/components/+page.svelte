<script lang="ts">
	import { sentenceCase } from 'change-case';
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();
</script>

<h1>Components</h1>

<p>These are reusable building blocks for your application.</p>

{#each Object.keys(data.groups) as groupName}
	<h2>{sentenceCase(groupName)}</h2>

	<ul>
		{#each data.groups[groupName] as component}
			<li>
				<a
					href={`/docs/components/${groupName}/${component}`}
					class="font-medium text-muted-foreground no-underline"
				>
					{component}
				</a>
			</li>
		{/each}
	</ul>
{/each}
