<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<!-- <link
		href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Inter:opsz,wght@14..32,100..900&display=swap"
		rel="stylesheet"
	/> -->
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&family=JetBrains+Mono:wght@100..800&display=swap"
		rel="stylesheet"
	/>

	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-vs.min.css"
		integrity="sha512-Jn4HzkCnzA7Bc+lbSQHAMeen0EhSTy71o9yJbXZtQx9VvozKVBV/2zfR3VyuDFIxGvHgbOMMNvb80l+jxFBC1Q=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

{@render children()}
