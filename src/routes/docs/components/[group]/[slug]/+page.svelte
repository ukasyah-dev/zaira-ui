<script lang="ts">
	import { title } from '$lib/index.js';
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();

	title.set(data.name);
</script>

<data.component />
