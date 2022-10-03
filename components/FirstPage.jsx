import { motion } from "framer-motion"

import FloatingButton from "/components/FloatingButton"

import usePageStatus from "/hooks/usePageStatus"
import useResponsiveDimension from "/hooks/useResponsiveDimension"

const FirstPage = ({ pageRefs, currentPage, setCurrentPage }) => {
	const pageStatus = usePageStatus(currentPage, pageRefs.firstPage)

	const goToNextPage = () => {
		setCurrentPage(pageRefs.secondPage)
		window.scrollTo({
			top: pageRefs.secondPage.current.offsetTop,
			behavior: "smooth"
		})
	}

	return (
		<div
			ref={pageRefs.firstPage}
			className="h-screen w-screen overflow-hidden relative"
		>
			<motion.div
				initial={{
					y: 100,
					opacity: 0
				}}
				animate={{
					y: 0,
					opacity: 1
				}}
				transition={{
					type: "tween",
					ease: "easeOut",
					y: {
						duration: 0.8
					},
					opacity: {
						duration: 1.4
					}
				}}
				className="mx-auto w-[80%] mdmobile:w-[79%] text-center font-bold relative z-20
                           desktop:text-[96px] lgmobile:text-[58px] mdmobile:text-[54px] smmobile:text-[50px] tablet:text-[72px]
                           desktop:pt-[282px] lgmobile:pt-[28.5vh] mdmobile:pt-[204px] smmobile:pt-[190px] tablet:pt-[280px]
                           desktop:leading-tight lgmobile:leading-[1.2] mdmobile:leading-[1.15] smmobile:leading-none tablet:leading-tight"
			>
				<h1>
					Develop and deploy
					<br />
					impactful websites
				</h1>
			</motion.div>

			<FloatingButton
				status={pageStatus}
				onClick={goToNextPage}
				className="flex justify-center w-screen
                           desktop:mt-[48px] lgmobile:mt-[5vh] mdmobile:mt-[23px] smmobile:mt-[20px] tablet:mt-[30px]"
			/>

			<div
				className="absolute h-[60vw] desktop:bottom-[36.5px] bottom-[122px] rotate-[150deg]"
				style={{
					width: useResponsiveDimension({ mobile: 84, desktop: 144 }),
					left: useResponsiveDimension({
						mobile: -12,
						desktop: -108
					})
				}}
			>
				<motion.div
					initial={{
						y: "40vw"
					}}
					animate={{
						y: 0,
						opacity: 0.95
					}}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 12
					}}
					className="absolute h-[100vw] w-full
                               bg-gradient-to-tr from-[#dd5090] to-[#dd9050] rounded-t-full z-10"
				></motion.div>

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
						fill="#FFFFFF"
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
						fill="#FFFFFF"
						fillOpacity="0.06"
					/>
				</svg>
			</div>
			<div
				className="absolute h-[60vw] desktop:top-[44.2px] top-[50px] rotate-[-30deg]"
				style={{
					width: useResponsiveDimension({ mobile: 84, desktop: 144 }),
					right: useResponsiveDimension({
						mobile: -12,
						desktop: -43.2
					})
				}}
			>
				<motion.div
					initial={{
						y: "40vw"
					}}
					animate={{
						y: 0,
						opacity: 0.95
					}}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 12
					}}
					className="absolute h-[100vw] w-full z-10
                               bg-gradient-to-tl from-[#dd5090] to-[#dd9050] rounded-t-full"
				></motion.div>

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
						fill="#FFFFFF"
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
						fill="#FFFFFF"
						fillOpacity="0.06"
					/>
				</svg>
			</div>
		</div>
	)
}

export default FirstPage
