<script lang="ts">
	import { Provider } from '$lib/index.js';
	import '$lib/styles.css';

	let { children } = $props();
</script>

<Provider>
	{@render children()}
</Provider>
