import { motion } from "framer-motion"

import usePageStatus from "/hooks/usePageStatus"
import useResponsiveDimension from "/hooks/useResponsiveDimension"

const FifthPage = ({ pageRefs, currentPage }) => {
	const pageStatus = usePageStatus(currentPage, pageRefs.fifthPage)

	const textVariants = {
		hidden: {
			opacity: 0
		},
		visible: {
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
			ref={pageRefs.fifthPage}
			animate={pageStatus}
			className="h-screen w-screen flex flex-col justify-center items-center relative gap-[4.86vw] font-semibold pb-10 text-center"
		>
			<motion.div
				variants={textVariants}
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
				variants={textVariants}
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
