import { motion } from "framer-motion"

import FromOffScreen from "/components/FromOffScreen"
import FadeInText from "/components/FadeInText"
import FloatingButton from "/components/FloatingButton"

import useResponsiveDimension from "/hooks/useResponsiveDimension"

const Home = () => {
	return (
		<>
			{/* at small screen sizes make everything closer to middle of screen vertically */}
			<FadeInText
				className="pt-[32vh] mx-auto w-[75%]
                           leading-none text-center font-sans font-bold text-[#e4e6e8] relative z-10"
				style={{
					fontSize: useResponsiveDimension({
						mobile: 60,
						desktop: 96
					})
				}}
			>
				<h1>Build and deploy impactful websites</h1>
			</FadeInText>

			<FloatingButton />

			<div
				className="absolute h-[60vw] rotate-[150deg] left-[-7.5vw]"
				style={{
					width: useResponsiveDimension({ mobile: 84, desktop: 144 }),
					bottom: useResponsiveDimension({
						mobile: 87.5,
						desktop: 36.5,
						responsiveUnit: "vh"
					})
				}}
			>
				<FromOffScreen
					className="absolute h-[100vw] w-full
                               bg-gradient-to-tr from-[#dd5090] to-[#dd9050] rounded-t-full"
				></FromOffScreen>
				<svg
					className="absolute"
					width={useResponsiveDimension({
						mobile: 60,
						desktop: 100.8
					})}
					style={{
						top: useResponsiveDimension({
							mobile: 2,
							desktop: 100.8
						}),
						left: useResponsiveDimension({
							mobile: -45,
							desktop: -79.2
						})
					}}
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
					className="absolute"
					width={useResponsiveDimension({
						mobile: 60,
						desktop: 100.8
					})}
					style={{
						top: useResponsiveDimension({
							mobile: -70,
							desktop: -29
						}),
						right: useResponsiveDimension({
							mobile: -30,
							desktop: -57.6
						})
					}}
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

			<div
				className="absolute h-[60vw] rotate-[-30deg] top-[6.5vh] right-[-3vw]"
				style={{
					width: useResponsiveDimension({ mobile: 84, desktop: 144 })
				}}
			>
				<FromOffScreen
					className="absolute h-[100vw] w-full
                               bg-gradient-to-tl from-[#dd5090] to-[#dd9050] rounded-t-full"
				></FromOffScreen>

				<svg
					className="absolute"
					width={useResponsiveDimension({
						mobile: 60,
						desktop: 100.8
					})}
					style={{
						top: useResponsiveDimension({
							mobile: -55,
							desktop: 36
						}),
						right: useResponsiveDimension({
							mobile: -35,
							desktop: -57.6
						})
					}}
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
					className="absolute"
					width={useResponsiveDimension({
						mobile: 60,
						desktop: 100.8
					})}
					style={{
						top: useResponsiveDimension({
							mobile: 10,
							desktop: 144
						}),
						left: useResponsiveDimension({
							mobile: -35,
							desktop: -57.6
						})
					}}
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
