<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { Icon, Eye, EyeSlash } from 'svelte-hero-icons';
	import { twMerge } from 'tailwind-merge';

	type Props = Omit<HTMLInputAttributes, 'size'> & {
		error?: boolean;
		size?: 'sm' | 'md';
	};

	let { class: className, error = false, size = 'md', type, ...rest }: Props = $props();

	let _type = $state(type);
	let focusing = $state(false);

	const _class = $derived(
		twMerge(
			'w-full bg-background text-foreground placeholder:text-foreground-placeholder',
			!error && 'border-border-input focus:border-border-primary focus:ring-border-primary',
			error && 'border-border-error focus:border-border-error focus:ring-border-error',
			className?.toString()
		)
	);

	const togglePassword = () => {
		_type = _type === 'password' ? 'text' : 'password';
	};
</script>

<div class="relative w-full">
	<input
		class={_class}
		type={_type}
		{...rest}
		onfocus={() => (focusing = true)}
		onblur={() => (focusing = false)}
	/>

	{#if type === 'password'}
		<button
			class="text-foreground-muted absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
			tabindex="-1"
			type="button"
			onclick={togglePassword}
		>
			{#if _type === 'password'}
				<Icon src={Eye} class="h-5 w-5 stroke-[2]" />
			{:else}
				<Icon src={EyeSlash} class="h-5 w-5 stroke-[2]" />
			{/if}
		</button>
	{/if}
</div>
