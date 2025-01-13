<script lang="ts">
	import { twJoin } from 'tailwind-merge';

	let { children } = $props();
</script>

<div
	class={twJoin(
		'not-prose my-8 min-h-80 px-4 py-2',
		'flex flex-col items-center justify-center',
		'rounded-lg border border-border'
	)}
>
	{@render children()}
</div>
