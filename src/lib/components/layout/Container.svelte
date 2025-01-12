<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = HTMLAttributes<HTMLDivElement>;

	let { children, class: className, ...rest }: Props = $props();

	// @ts-ignore
	let _class = twMerge('mx-auto w-full max-w-5xl px-6', className);
</script>

<div class={_class} {...rest}>
	{@render children?.()}
</div>
