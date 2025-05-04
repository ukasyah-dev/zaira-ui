<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = HTMLButtonAttributes &
		HTMLAnchorAttributes & {
			size?: 'md';
		};

	let { children, class: className, href, size = 'md', ...rest }: Props = $props();

	let _class = $derived(
		twMerge(
			'cursor-pointer font-medium',
			size === 'md' && 'h-10 px-4 rounded-md',
			'bg-background-primary hover:bg-background-primary-hover text-foreground-primary',
			className?.toString()
		)
	);
</script>

{#if href}
	<a class={_class} {href} {...rest}>
		{@render children?.()}
	</a>
{:else}
	<button class={_class} {...rest}>
		{@render children?.()}
	</button>
{/if}
