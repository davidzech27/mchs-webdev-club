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
			},
			screens: {
				smmobile: { raw: "(max-height: 670px) and (max-width: 450px)" },
				mdmobile: {
					raw: "(min-height: 671px) and (max-height: 810px) and (max-width: 450px)"
				},
				lgmobile: { raw: "(min-height: 811px) and (max-width: 450px)" },
				tablet: "451px",
				desktop: "1025px"
			}
		}
	},
	plugins: []
}
