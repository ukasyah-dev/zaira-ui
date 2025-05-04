<script lang="ts">
	import { Container, title, Typography } from '$lib/index.js';
	import Prism from 'prismjs';
	import 'prism-svelte';
	import { ArrowLeft, CodeBracket, Eye, Icon } from 'svelte-hero-icons';
	import { twJoin } from 'tailwind-merge';
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();

	title.set(data.name);

	let displayTabs = $state(false);
	let tabIndex = $state(0);

	const highlight = (code: string) => {
		return Prism.highlight(code, Prism.languages.svelte, 'svelte');
	};
</script>

{#if tabIndex === 0}
	<data.component />
{:else}
	<Typography>
		{#each data.files as file}
			<h3>{file.name}</h3>
			<pre class="language-svelte"><code class="language-svelte"
					>{@html highlight(file.content)}</code
				></pre>
		{/each}
	</Typography>
{/if}

<div
	class={twJoin(
		'bg-background border-border fixed top-1/2 z-10 -translate-y-1/2 rounded-r-md border p-1',
		'transition-all',
		displayTabs && 'left-0',
		!displayTabs && '-left-11'
	)}
	onpointerenter={() => (displayTabs = true)}
	onpointerleave={() => (displayTabs = false)}
>
	<!-- <div class="flex flex-col gap-0.5">
		<Button aria-label="Back" square variant="tertiary" href="/docs/examples">
			<Icon src={ArrowLeft} class="h-5 w-5 stroke-[2]" />
		</Button>
		<Button aria-label="Preview" square variant="tertiary" onclick={() => (tabIndex = 0)}>
			<Icon src={Eye} class="h-5 w-5 stroke-[2]" />
		</Button>
		<Button aria-label="Code" square variant="tertiary" onclick={() => (tabIndex = 1)}>
			<Icon src={CodeBracket} class="h-5 w-5 stroke-[2]" />
		</Button>
	</div> -->
</div>
