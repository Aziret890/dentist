/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {},
		screens: {
			1200: {
				max: '1200px'
			},
			1100: {
				max: '1100px'
			},
			1000: { max: '1000px' },
			940: { max: '940px' },
			840: { max: '840px' },
			740: { max: '740px' },
			640: { max: '640px' },
			540: { max: '540px' },
			440: { max: '440px' },
			320: { max: '320px' }
		}
	},
	plugins: []
}
