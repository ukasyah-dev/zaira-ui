<script lang="ts">
	import { Provider } from '$lib/index.js';
	import { titleState } from '$lib/states.svelte.js';
	import '$lib/styles.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>{titleState.get()}</title>
</svelte:head>

<Provider>
	{@render children()}
</Provider>
