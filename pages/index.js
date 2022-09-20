import { motion } from "framer-motion"

import FromOffScreen from "/components/FromOffScreen"
import FadeInText from "/components/FadeInText"
import FloatingButton from "/components/FloatingButton"

const Home = () => {
	return (
		<>
			<FadeInText
				className="pt-[32vh] mx-auto w-[75%]
                           text-[calc(3.380vw+47.324px)] leading-none text-center font-sans font-bold text-[#e4e6e8] relative z-10"
			>
				<h1>Build and deploy impactful websites</h1>
			</FadeInText>

			<FloatingButton />

			<div className="absolute h-[60vw] w-[calc(5.634vw+62.873px)] rotate-[150deg] bottom-[calc(302.536px-32.247vh)] left-[-7.5vw] ">
				<FromOffScreen className="absolute">
					<div
						className="h-[100vw] w-[calc(5.634vw+62.873px)]
                               bg-gradient-to-tr from-[#dd5090] to-[#dd9050] rounded-t-full"
					></div>
				</FromOffScreen>
				<svg
					className="absolute top-[calc(9.277vw-32.789px)] left-[calc(-3.211vw-32.958px)]"
					width="calc(3.831vw + 45.634px)"
					height="698"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M84.4482 1.48117C85.9994 -1.14999 90.0304 -0.0495114 90.0304 3.00513L90.0304 145.012C90.0304 145.03 90.0302 145.047 90.03 145.064L90 697.017L0.0303943 697.013L0.0602304 147.012C0.0602304 146.229 0.15044 145.466 0.320915 144.734C0.354961 144.37 0.458167 144.003 0.639747 143.65C1.06609 142.455 1.71308 141.366 2.53162 140.43L84.4482 1.48117Z"
						fill="#E4E6E8"
						fillOpacity="0.06"
					/>
				</svg>

				<svg
					className="absolute top-[calc(3.850vw-84.437px)] right-[calc(-1*(2.592vw+20.282px))]"
					width="calc(3.831vw + 45.634px)"
					height="698"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M84.4482 1.48117C85.9994 -1.14999 90.0304 -0.0495114 90.0304 3.00513L90.0304 145.012C90.0304 145.03 90.0302 145.047 90.03 145.064L90 697.017L0.0303943 697.013L0.0602304 147.012C0.0602304 146.229 0.15044 145.466 0.320915 144.734C0.354961 144.37 0.458167 144.003 0.639747 143.65C1.06609 142.455 1.71308 141.366 2.53162 140.43L84.4482 1.48117Z"
						fill="#E4E6E8"
						fillOpacity="0.06"
					/>
				</svg>
			</div>

			<div className="absolute h-[60vw] w-[calc(5.634vw+62.873px)] rotate-[-30deg] top-[6.5vh] right-[-3vw]">
				<FromOffScreen className="absolute">
					<div
						className="h-[100vw] w-[calc(5.634vw+62.873px)]
                               bg-gradient-to-tl from-[#dd5090] to-[#dd9050] rounded-t-full"
					></div>
				</FromOffScreen>

				<svg
					className="absolute top-[calc(8.545vw-87.042px)] right-[calc(-1*(2.122vw+27.0423px))]"
					width="calc(3.831vw + 45.634px)"
					height="698"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M84.4482 1.48117C85.9994 -1.14999 90.0304 -0.0495114 90.0304 3.00513L90.0304 145.012C90.0304 145.03 90.0302 145.047 90.03 145.064L90 697.017L0.0303943 697.013L0.0602304 147.012C0.0602304 146.229 0.15044 145.466 0.320915 144.734C0.354961 144.37 0.458167 144.003 0.639747 143.65C1.06609 142.455 1.71308 141.366 2.53162 140.43L84.4482 1.48117Z"
						fill="#E4E6E8"
						fillOpacity="0.06"
					/>
				</svg>

				<svg
					className="absolute top-[calc(12.582vw-37.183px)] left-[calc(-1*(2.122vw+27.0423px))]"
					width="calc(3.831vw + 45.634px)"
					height="698"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M84.4482 1.48117C85.9994 -1.14999 90.0304 -0.0495114 90.0304 3.00513L90.0304 145.012C90.0304 145.03 90.0302 145.047 90.03 145.064L90 697.017L0.0303943 697.013L0.0602304 147.012C0.0602304 146.229 0.15044 145.466 0.320915 144.734C0.354961 144.37 0.458167 144.003 0.639747 143.65C1.06609 142.455 1.71308 141.366 2.53162 140.43L84.4482 1.48117Z"
						fill="#E4E6E8"
						fillOpacity="0.06"
					/>
				</svg>
			</div>
		</>
	)
}

export default Home
