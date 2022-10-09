import { useCallback } from "react"
import { loadSlim } from "tsparticles-slim"
import Particles from "react-particles"
import { motion } from "framer-motion"

import FloatingButton from "/components/FloatingButton"

import useResponsiveDimension from "/hooks/useResponsiveDimension"

const SecondPage = ({ goToNextPage, transition }) => {
	const particlesInit = useCallback(async (engine) => {
		await loadSlim(engine)
	}, [])

	const textVariants = {
		hidden: {
			opacity: 0,
			x: 50
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.4,
				ease: "easeOut"
			}
		},
		exited: {
			opacity: 0,
			transition: {
				duration: 0.4,
				ease: "easeOut"
			}
		}
	}

	return (
		<motion.div
			initial={{
				x: 0,
				y: "100vh"
			}}
			animate={{
				x: 0,
				y: 0
			}}
			exit={{
				x: "-100vw",
				y: 0
			}}
			transition={transition}
			className="h-screen w-screen grid grid-cols-2 overflow-hidden relative"
		>
			<div
				className="flex justify-end items-center"
				style={{
					padding: `0 ${useResponsiveDimension({
						mobile: 14,
						desktop: 60
					})} 0 ${useResponsiveDimension({
						mobile: 18,
						desktop: 400
					})}`
				}}
			>
				<Particles
					init={particlesInit}
					className="desktop:h-[666px] lgmobile:h-[610px] mdmobile:h-[580px] smmobile:h-[550px] tablet:h-[600px]"
					options={{
						fpsLimit: 20,
						particles: {
							color: {
								value: "#E4E6E8"
							},
							move: {
								direction: "none",
								enable: true,
								outModes: {
									default: "bounce"
								},
								random: true,
								speed: 3,
								straight: false
							},
							number: {
								density: {
									enable: true,
									area: 800
								},
								value: 200
							},
							opacity: {
								value: 0.055
							},
							shape: {
								type: "circle"
							},
							size: {
								value: 1.05
							},
							links: {
								color: "#E4E6E8",
								distance: 120,
								enable: true,
								opacity: 0.55,
								width: 1.05
							},
							smooth: true
						},
						fullScreen: false,
						detectRetina: true
					}}
				/>
			</div>
			<div className="relative desktop:mt-[228px] lgmobile:mt-[17.3vh] mdmobile:mt-[80px] smmobile:mt-[40px] tablet:mt-[194px]">
				<motion.div
					initial="hidden"
					animate="visible"
					exit="exited"
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.2,
								delayChildren: 0.25
							}
						}
					}}
					className="flex flex-col font-light"
					style={{
						fontSize: useResponsiveDimension({
							mobile: 26,
							desktop: 44
						}),
						gap: useResponsiveDimension({
							mobile: 25,
							desktop: 40
						})
					}}
				>
					<motion.div variants={textVariants}>
						Learn from experienced developers
					</motion.div>
					<motion.div variants={textVariants}>Build original projects</motion.div>
					<motion.div variants={textVariants}>Create engaging experiences</motion.div>
				</motion.div>

				<FloatingButton
					onClick={goToNextPage}
					duration={0.4}
					delay={0.85}
					pointing="right"
					className="relative
                               desktop:top-[38px] lgmobile:top-[40px] mdmobile:top-[30px] smmobile:top-[24px] tablet:top-[34px]
                               desktop:left-[156px] lgmobile:left-[30px] mdmobile:left-[27.5px] smmobile:left-[25px] tablet:left-[67px]"
				/>
			</div>

			<motion.div
				initial={{
					x: -24
				}}
				animate={{
					x: 0,
					transition: {
						duration: 0.4,
						delay: 0.35,
						ease: "easeOut"
					}
				}}
				exit={{
					x: -24,
					transition: {
						duration: 0.4,
						delay: 0.35,
						ease: "easeOut"
					}
				}}
				className="h-screen w-6 fixed left-0 bg-gradient-to-t from-[#de7072] to-[#dd9050] opacity-90"
			></motion.div>
		</motion.div>
	)
}

export default SecondPage
