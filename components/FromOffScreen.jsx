import { motion } from "framer-motion"

const FromOffScreen = ({ children, className }) => {
	return (
		<motion.div
			initial={{
				y: "40vw"
			}}
			animate={{
				y: 0
			}}
			transition={{
				type: "spring",
				stiffness: 100,
				damping: 12
			}}
			className={className}
		>
			{children}
		</motion.div>
	)
}

export default FromOffScreen
