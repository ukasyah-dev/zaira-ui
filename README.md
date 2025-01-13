# Zaira UI

A simple and elegant UI library for Svelte, designed to help you create beautiful interfaces with ease.

## Getting started

This library requires that you have a [SvelteKit](https://svelte.dev/docs/kit/introduction) project with [Tailwind CSS](https://tailwindcss.com/) set up.
If you haven't done so yet, please refer to the official documentation to begin.

To install the library, run:

```bash
pnpm add -D zaira-ui
```

Update `src/routes/+layout.svelte` file:

```svelte
<script lang="ts">
  import { Provider } from 'zaira-ui';
  import 'zaira-ui/styles.css';

  let { children } = $props();
</script>

<Provider>
  {@render children()}
</Provider>
```

Update `tailwind.config.ts` file:

```typescript
import type { Config } from 'tailwindcss';
import preset from 'zaira-ui/preset';

export default {
  content: ['./node_modules/zaira-ui/dist/**/*.{js,svelte}', './src/**/*.{html,js,svelte,svx,ts}'],
  theme: {
    extend: {}
  },
  presets: [preset]
} satisfies Config;
```

That's it! You're now ready to build with Zaira UI.
