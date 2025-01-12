<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = HTMLAnchorAttributes &
		HTMLButtonAttributes & {
			size?: 'sm' | 'md' | 'lg';
			variant?: 'primary' | 'secondary';
		};

	let {
		children,
		class: className,
		href,
		size = 'md',
		variant = 'primary',
		...rest
	}: Props = $props();

	let _class = twMerge(
		'font-semibold flex items-center justify-center',
		'transition duration-75',
		size === 'sm' && 'px-3 h-9 text-sm rounded-md',
		size === 'md' && 'px-5 h-11 text-base rounded-md',
		size === 'lg' && 'px-6 h-12 text-lg rounded-md',
		variant === 'primary' && 'bg-brand text-foreground hover:bg-brand-hover',
		variant === 'secondary' && 'bg-muted-background hover:bg-muted-background-hover',
		// @ts-ignore
		className
	);
</script>

{#if href}
	<a {href} class={_class} {...rest}>
		{@render children?.()}
	</a>
{:else}
	<button class={_class} {...rest}>
		{@render children?.()}
	</button>
{/if}
