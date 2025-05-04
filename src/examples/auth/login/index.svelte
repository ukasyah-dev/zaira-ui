<script lang="ts">
	import { Button, Container, Input } from '$lib/index.js';
</script>

<div class="flex flex-1 flex-col items-center justify-center">
	<Container size="xs">
		<h1 class="mb-2 text-center text-3xl font-semibold">Welcome back</h1>
		<p class="text-foreground-muted mb-9 text-center">Let's continue your journey with us</p>

		<div class="flex flex-col gap-5">
			<Input placeholder="Email" />
			<Input placeholder="Password" />
			<Button>Sign in</Button>
		</div>
	</Container>
</div>
