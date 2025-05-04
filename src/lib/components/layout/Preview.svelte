<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement>;

	let { children }: Props = $props();
</script>

<div
	class="no-prose border-border my-8 flex min-h-64 flex-col items-center justify-center gap-4 rounded-lg border px-6 py-5"
>
	{@render children?.()}
</div>
