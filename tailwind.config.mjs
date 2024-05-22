import defaultTheme  from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: '"Work Sans", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		},
		screens: {
			'xs': '460px',
			'sm': defaultTheme.screens.sm,
			'sm-landscape': {'raw': '(orientation: landscape) and (min-width: 640px)'},
			'md': defaultTheme.screens.md,
			'md-landscape': {'raw': '(orientation: landscape) and (min-width: 768px)'},
			'lg': defaultTheme.screens.lg,
			'lg-landscape': {'raw': '(orientation: landscape) and (min-width: 1024px)'},
			'xl': defaultTheme.screens.xl,
			'2xl': defaultTheme.screens['2xl'],
			'3xl': '1920px',
		},
		extend: {
			colors: {
				blue: '#2187FF',
				'var-color': 'var(--color)',
			},
			fontSize: {
				'xs-vw': '3.3333333vw',
				'sm-vw': '3.8888889vw',
				'base-vw': '4.4444444vw',
				'lg-vw': '5vw',
				'xl-vw': '5.5555556vw',
				'2xl-vw': '6.6666667vw',
			},
			spacing: {
				'2-vw': '2.2222222vw',
				'4-vw': '4.4444444vw',
				'6-vw': '6.6666667vw',
				'8-vw': '8.8888889vw',
				'12-vw': '13.333333vw',
				'16-vw': '17.777778vw',
			}
		},
	},
	plugins: [
		function ({ addComponents, theme }) {
      addComponents({
        '.link': {
					'font-weight': '700',
					'text-decoration': 'underline',
					'text-decoration-thickness': '0.15em',
					'&:focus-visible': {
						'text-decoration': 'none',
						'outline': '0.15em solid',
						'outline-offset': '0.15em',
					}
				},
      });
    },
	],
}
