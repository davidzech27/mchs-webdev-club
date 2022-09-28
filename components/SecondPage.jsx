import { useCallback } from "react"
import { loadSlim } from "tsparticles-slim"
import Particles from "react-particles"
import { motion, AnimatePresence } from "framer-motion"

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
					className="h-[78vh]"
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
			<div
				className="relative"
				style={{
					margin: `${useResponsiveDimension({
						mobile: 40,
						desktop: 244
					})} ${useResponsiveDimension({
						mobile: 20,
						desktop: 40
					})} 0 0`
				}}
			>
				<motion.div
					animate={pageStatus}
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.2,
								delayChildren: 0.4
							}
						}
					}}
					className="flex flex-col"
					style={{
						fontSize: useResponsiveDimension({
							mobile: 28,
							desktop: 44
						}),
						gap: useResponsiveDimension({
							mobile: 20,
							desktop: 40
						})
					}}
				>
					<motion.div variants={textVariants}>
						Be guided by experienced developers
					</motion.div>
					<motion.div variants={textVariants}>
						Learn by building
					</motion.div>
					<motion.div variants={textVariants}>
						Create original things
					</motion.div>
				</motion.div>

				<FloatingButton
					status={pageStatus}
					onClick={goToNextPage}
					duration={0.4}
					delay={1}
					pointing="right"
					className="absolute"
					style={{
						bottom: useResponsiveDimension({
							mobile: 40,
							desktop: 99,
							responsiveUnit: "vh"
						}),
						left: useResponsiveDimension({
							mobile: 0,
							desktop: 156
						})
					}}
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
							delay: 0.4,
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
