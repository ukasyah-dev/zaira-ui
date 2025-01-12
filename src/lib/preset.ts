import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: [],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: {
					DEFAULT: 'var(--background)',
					hover: 'var(--background-hover)'
				},
				foreground: {
					DEFAULT: 'var(--foreground)',
					hover: 'var(--foreground-hover)'
				},
				brand: {
					DEFAULT: 'var(--brand)',
					hover: 'var(--brand-hover)',
					alt: 'var(--brand-alt)'
				},
				muted: {
					background: 'var(--muted-background)',
					'background-hover': 'var(--muted-background-hover)',
					foreground: 'var(--muted-foreground)'
				},
				border: {
					DEFAULT: 'var(--border)',
					hover: 'var(--border-hover)'
				},
				placeholder: {
					DEFAULT: 'var(--placeholder)'
				}
			},
			fontFamily: {
				sans: ['Noto Sans', 'sans-serif']
			},
			typography: {
				DEFAULT: {
					css: {
						'h1, h2, h3, h4': {
							fontWeight: 600
						},
						h1: {
							fontSize: '2rem',
							marginBottom: '0.75rem'
						},
						h2: {
							marginBottom: '1rem',
							marginTop: '1rem'
						}
					}
				}
			}
		}
	},
	plugins: [typography, forms]
} satisfies Config;
