import { motion } from "framer-motion"

import FromOffScreen from "/components/FromOffScreen"
import FadeInText from "/components/FadeInText"
// import FloatingButton from "/components/FloatingButton"

const Home = () => {
	return (
		<>
			<FadeInText
				className="pt-[32vh] mx-auto w-[75%]
                           text-8xl text-center font-sans font-bold text-[#e4e6e8] z-10"
			>
				<h1>Build and deploy impactful websites</h1>
			</FadeInText>

			<FromOffScreen
				from="left"
				className="absolute top-[10vh] left-[-5vw]"
			>
				<div
					className="h-[84vh] w-[10vw]
                                bg-gradient-to-tr from-[#dd5090] to-[#dd9050] rounded-t-full"
				></div>
			</FromOffScreen>

			<FromOffScreen
				from="right"
				className="absolute bottom-[6vh] right-0"
			>
				<div
					className="h-[84vh] w-[10vw]
                               bg-gradient-to-tl from-[#dd5090] to-[#dd9050] rounded-t-full"
				></div>
			</FromOffScreen>

			<svg
				className="absolute top-0 left-[-3.2%]"
				width="302"
				height="615"
				viewBox="0 0 302 615"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M227.604 610.575C227.576 613.63 223.533 614.693 222.006 612.047L151.002 489.065C150.994 489.051 150.985 489.036 150.977 489.02L-124.974 11L-47.0289 -33.9958L227.945 442.333C228.337 443.012 228.64 443.717 228.858 444.436C229.011 444.769 229.105 445.138 229.125 445.535C229.352 446.783 229.337 448.05 229.095 449.27L227.604 610.575Z"
					fill="#E4E6E8"
					fillOpacity="0.05"
				/>
			</svg>

			<svg
				className="absolute top-[200px] -left-[10.5%]"
				width="302"
				height="615"
				viewBox="0 0 302 615"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M227.604 610.575C227.576 613.63 223.533 614.693 222.006 612.047L151.002 489.065C150.994 489.051 150.985 489.036 150.977 489.02L-124.974 11L-47.0289 -33.9958L227.945 442.333C228.337 443.012 228.64 443.717 228.858 444.436C229.011 444.769 229.105 445.138 229.125 445.535C229.352 446.783 229.337 448.05 229.095 449.27L227.604 610.575Z"
					fill="#E4E6E8"
					fillOpacity="0.05"
				/>
			</svg>
			<svg
				className="absolute bottom-[14%] right-[-7%] rotate-180"
				width="302"
				height="615"
				viewBox="0 0 302 615"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M227.604 610.575C227.576 613.63 223.533 614.693 222.006 612.047L151.002 489.065C150.994 489.051 150.985 489.036 150.977 489.02L-124.974 11L-47.0289 -33.9958L227.945 442.333C228.337 443.012 228.64 443.717 228.858 444.436C229.011 444.769 229.105 445.138 229.125 445.535C229.352 446.783 229.337 448.05 229.095 449.27L227.604 610.575Z"
					fill="#E4E6E8"
					fillOpacity="0.05"
				/>
			</svg>

			<svg
				className="absolute bottom-[-22%] right-[-7%] rotate-180"
				width="302"
				height="615"
				viewBox="0 0 302 615"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M227.604 610.575C227.576 613.63 223.533 614.693 222.006 612.047L151.002 489.065C150.994 489.051 150.985 489.036 150.977 489.02L-124.974 11L-47.0289 -33.9958L227.945 442.333C228.337 443.012 228.64 443.717 228.858 444.436C229.011 444.769 229.105 445.138 229.125 445.535C229.352 446.783 229.337 448.05 229.095 449.27L227.604 610.575Z"
					fill="#E4E6E8"
					fillOpacity="0.05"
				/>
			</svg>

			{/* <svg
				className="absolute bottom-[-30%] right-[-1%] rotate-180"
				width="302"
				height="615"
				viewBox="0 0 302 615"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M227.604 610.575C227.576 613.63 223.533 614.693 222.006 612.047L151.002 489.065C150.994 489.051 150.985 489.036 150.977 489.02L-124.974 11L-47.0289 -33.9958L227.945 442.333C228.337 443.012 228.64 443.717 228.858 444.436C229.011 444.769 229.105 445.138 229.125 445.535C229.352 446.783 229.337 448.05 229.095 449.27L227.604 610.575Z"
					fill="#E4E6E8"
					fillOpacity="0.05"
				/>
			</svg> */}

			{/* <FloatingButton></FloatingButton> */}
		</>
	)
}

export default Home
