/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"]
			},
			colors: {
				text: "#E4E6E8",
				background: "#050913"
			}
		}
	},
	plugins: []
}
