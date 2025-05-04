<script lang="ts">
	import { Provider, title } from '$lib/index.js';
	import '$lib/styles.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>{title.get()}</title>
</svelte:head>

<Provider>
	{@render children()}
</Provider>
