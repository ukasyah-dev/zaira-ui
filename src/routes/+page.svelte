<script lang="ts">
	import { Button } from '$lib/index.js';
	import MainHeader from './MainHeader.svelte';
	import MainFooter from './MainFooter.svelte';
</script>

<div class="flex h-full flex-col items-stretch">
	<MainHeader />

	<div class="flex-1 flex-col items-center justify-center py-32 text-center">
		<div class="mx-auto w-full max-w-lg">
			<h1 class="mb-3 text-4xl font-bold">Zaira UI</h1>
			<p class="text-lg text-muted-foreground">
				A simple and elegant UI library for Svelte, designed to help you create beautiful interfaces
				with ease.
			</p>
			<div class="mt-6 flex justify-center gap-3">
				<Button href="/docs/getting-started">Get Started</Button>
				<Button href="/docs/components" variant="secondary">Browse components</Button>
			</div>
		</div>
	</div>

	<MainFooter />
</div>
