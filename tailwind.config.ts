import type { Config } from 'tailwindcss';
import preset from './src/lib/preset';

export default {
	content: ['./src/**/*.{html,js,svelte,svx,ts}'],
	theme: {
		extend: {}
	},
	presets: [preset]
} satisfies Config;
