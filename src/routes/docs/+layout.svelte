<script lang="ts">
	import { Typography } from '$lib/index.js';
	import MainFooter from '../MainFooter.svelte';
	import MainHeader from '../MainHeader.svelte';

	let { children } = $props();
</script>

<MainHeader />

<Typography class="flex-1 pt-6 pb-12">
	{@render children()}
</Typography>

<MainFooter />
