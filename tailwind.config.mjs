/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				indigo: {
					50: '#fefce8',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#fbc16a',
					600: '#fbc16a',
					700: '#d97706',
					800: '#92400e',
					900: '#78350f',
				}
			}
		},
	},
	plugins: [],
}
