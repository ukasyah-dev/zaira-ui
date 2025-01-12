<script lang="ts">
	import { Button } from '$lib/index.js';
	import MainHeader from '../MainHeader.svelte';
	import MainFooter from '../MainFooter.svelte';

	let { children } = $props();
</script>

<div class="flex h-full flex-col items-stretch">
	<MainHeader />

	<div class="prose prose-neutral mx-auto max-w-screen-sm flex-1 py-20 dark:prose-invert">
		{@render children()}
	</div>

	<MainFooter />
</div>
