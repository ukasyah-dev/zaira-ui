<script lang="ts">
	import { twJoin } from 'tailwind-merge';
	import { Container } from './index.js';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement>;

	let { children, class: className, ...rest }: Props = $props();
</script>

<Container
	class={twJoin(
		'prose prose-neutral prose-base dark:prose-invert',
		'prose-headings:font-semibold',
		'prose-h1:text-3xl prose-h1:mb-4',
		'prose-h2:text-text-2xl prose-h2:mt-6 prose-h2:mb-3.5',
		'prose-pre:!rounded-md prose-pre:!bg-background-muted',
		'prose-pre:!px-5 prose-pre:!py-3.5',
		'prose-code:!text-sm prose-code:!leading-[1.45rem] prose-code:!font-normal',
		'prose-a:font-medium prose-a:underline-offset-4',
		className?.toString()
	)}
	{...rest}
>
	{@render children?.()}
</Container>
