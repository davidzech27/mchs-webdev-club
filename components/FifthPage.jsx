import { motion } from "framer-motion"

import useResponsiveDimension from "/hooks/useResponsiveDimension"

const FifthPage = ({ transition }) => {
	const textAnimations = {
		initial: {
			opacity: 0
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.4,
				delay: 0.4,
				ease: "easeOut"
			}
		}
	}

	return (
		<motion.div
			initial={{
				x: "100vw"
			}}
			animate={{
				x: 0
			}}
			transition={transition}
			className="h-screen w-screen flex flex-col justify-center items-center relative gap-[4.86vw] font-semibold pb-10 text-center"
		>
			<motion.div
				{...textAnimations}
				style={{
					fontSize: useResponsiveDimension({
						mobile: 56,
						desktop: 128
					})
				}}
			>
				Thank you!
			</motion.div>

			<motion.div
				{...textAnimations}
				className="font-extralight w-[70%]"
				style={{
					fontSize: useResponsiveDimension({
						mobile: 30,
						desktop: 60
					})
				}}
			>
				We will notify you shortly with further details.
			</motion.div>
		</motion.div>
	)
}

export default FifthPage
