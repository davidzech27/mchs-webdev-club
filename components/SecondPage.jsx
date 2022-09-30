import { useCallback, useState } from "react"
import { loadSlim } from "tsparticles-slim"
import Particles from "react-particles"
import { motion } from "framer-motion"

import FloatingButton from "/components/FloatingButton"

import usePageStatus from "/hooks/usePageStatus"
import useResponsiveDimension from "/hooks/useResponsiveDimension"

const SecondPage = ({ pageRefs, currentPage, setCurrentPage }) => {
	const pageStatus = usePageStatus(currentPage, pageRefs.secondPage)

	const goToNextPage = () => {
		setCurrentPage(pageRefs.thirdPage)
		pageRefs.firstPageContainer.current.scrollTo({
			left: pageRefs.thirdPage.current.offsetLeft,
			behavior: "smooth"
		})
	}

	const particlesInit = useCallback(async (engine) => {
		await loadSlim(engine)
	})

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
		}
	}

	const [particlesOn, setParticlesOn] = useState(false)

	return (
		<div
			ref={pageRefs.secondPage}
			className="h-screen w-screen grid grid-cols-2 overflow-y-hidden relative"
		>
			<div
				className="flex justify-end items-center"
				style={{
					padding: `0 ${useResponsiveDimension({
						mobile: 14,
						desktop: 56
					})} 0 ${useResponsiveDimension({
						mobile: 18,
						desktop: 400
					})}`
				}}
			>
				<Particles
					init={particlesInit}
					className="desktop:h-[620px] lgmobile:h-[620px] mdmobile:h-[620px] smmobile:h-[620px] tablet:h-[620px]"
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
						pauseOnOutsideViewport: true,
						pauseOnBlur: true,
						fullScreen: false,
						detectRetina: true
					}}
				/>
			</div>
			<div className="relative desktop:mt-[248px] lgmobile:mt-[17.3vh] mdmobile:mt-[100px] smmobile:mt-[66px] tablet:mt-[196px]">
				<motion.div
					animate={pageStatus}
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.2,
								delayChildren: 0.25
							}
						}
					}}
					className="flex flex-col"
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
					<motion.div variants={textVariants}>
						Build original projects
					</motion.div>
					<motion.div variants={textVariants}>
						Create engaging experiences
					</motion.div>
				</motion.div>

				<FloatingButton
					status={pageStatus}
					onClick={goToNextPage}
					duration={0.4}
					delay={0.85}
					pointing="right"
					className="relative
                               desktop:top-[38px] lgmobile:top-[40px] mdmobile:top-[30px] smmobile:top-[28px] tablet:top-[38px]
                               desktop:left-[156px] lgmobile:left-[34px] mdmobile:left-[31px] smmobile:left-[28px] tablet:left-[67px]"
				/>
			</div>

			<motion.div
				animate={pageStatus}
				variants={{
					hidden: {
						x: -24
					},
					visible: {
						x: 0,
						transition: {
							duration: 0.4,
							delay: 0.3,
							ease: "easeOut"
						}
					}
				}}
				className="h-screen w-6 absolute left-0 bg-gradient-to-t from-[#de7072] to-[#dd9050] opacity-90"
			></motion.div>
		</div>
	)
}

export default SecondPage