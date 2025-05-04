<script lang="ts">
	import { title } from '$lib/index.js';
	import MainFooter from './MainFooter.svelte';
	import MainHeader from './MainHeader.svelte';

	title.reset();
</script>

<MainHeader />

<div class="flex flex-1 flex-col items-center justify-center text-center">
	<h1 class="text-2xl font-semibold">Welcome to Zaira UI</h1>
</div>

<MainFooter />
