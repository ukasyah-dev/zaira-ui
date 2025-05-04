<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = HTMLAnchorAttributes;

	let { children, class: className, href, ...rest }: Props = $props();
</script>

<a
	class={twMerge('text-foreground font-medium underline underline-offset-4', className?.toString())}
	{href}
	{...rest}
>
	{@render children?.()}
</a>
