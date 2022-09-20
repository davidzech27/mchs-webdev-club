import { useCallback } from "react"

import { motion, useScroll } from "framer-motion"
import Particles from "react-particles"
import { loadFull } from "tsparticles"

const FloatingButton = () => {
	const { scr } = useScroll()

	const particlesInit = useCallback(async (engine) => {
		console.log(engine)
		await loadFull(engine)
	})

	const particlesLoaded = useCallback(async (container) => {
		console.log(container)
	})

	return (
		<>
			{/* <Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fpsLimit: 60,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push"
							},
							onHover: {
								enable: true,
								mode: "repulse"
							},
							resize: true
						},
						modes: {
							push: {
								quantity: 4
							},
							repulse: {
								distance: 200,
								duration: 0.4
							}
						}
					},
					particles: {
						color: {
							value: "#ffffff"
						},
						collisions: {
							enable: true
						},
						move: {
							directions: "none",
							enable: true,
							outModes: {
								default: "bounce"
							},
							random: true,
							speed: 6,
							straight: false
						},
						number: {
							density: {
								enable: true,
								area: 800
							},
							value: 80
						},
						opacity: {
							value: 0.5
						},
						shape: {
							type: "circle"
						},
						size: {
							value: { min: 1, max: 5 }
						}
					},
					detectRetina: true
				}}
			/> */}

			<motion.div
				initial={{
					opacity: 0,
					y: 0
				}}
				animate={{
					opacity: 1,
					y: [0, 10, 0]
				}}
				transition={{
					opacity: {
						ease: "linear"
					},
					default: {
						repeatType: "loop"
					},
					repeat: Infinity,
					delay: 2
				}}
				className="mt-[calc(2.629vw+10.141px)] mx-auto w-[94px] h-[94px] rounded-full border-[4px] border-[#e4e6e8] bg-[#161922] hover:bg-[#1f232c] transition duration-700 cursor-pointer relative z-10"
			>
				<svg
					className="absolute top-[34px] left-0 right-0 mx-auto"
					width="57.4"
					height="28"
					viewBox="0 0 72 35"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M35.7161 26.6208L5.90136 1.60324C4.4206 0.360737 2.21295 0.553881 0.970446 2.03464C-0.27206 3.5154 -0.0789178 5.72305 1.40184 6.96555L33.3471 33.7708C34.4565 34.7017 35.9738 34.8268 37.1877 34.2083C37.5919 34.0729 37.9779 33.8608 38.3243 33.5702L70.2696 6.76491C71.7503 5.52241 71.9435 3.31477 70.7009 1.834C69.4584 0.353243 67.2508 0.160099 65.77 1.40261L35.7161 26.6208Z"
						fill="#D9D9D9"
					/>
				</svg>
			</motion.div>
		</>
	)
}

export default FloatingButton
