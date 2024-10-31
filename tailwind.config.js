/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		g: ({theme}) => theme('spacing'),
		extend: {
			colors: {
				happy: {
					DEFAULT: 'rgba(255, 207, 48, 1)',
					50: 'rgba(255, 207, 48, 0.3)',
				},
				neutral: {
					DEFAULT: 'rgba(125, 228, 234, 1)',
					50: 'rgba(125, 228, 234, 0.3)',
				},
				stress: {
					DEFAULT: 'rgba(255, 39, 39, 1)',
					50: 'rgba(255, 39, 39, 0.3)',
				},
				sad: {
					DEFAULT: 'rgba(67, 112, 242, 1)',
					50: 'rgba(67, 112, 242, 0.3)',
				},
			},
		},
	},
	plugins: [
		plugin(function ({matchUtilities, theme}) {
			matchUtilities({g: value => ({gap: value})}, {values: theme('g')});
		}),
	],
};
