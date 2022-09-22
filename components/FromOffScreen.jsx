import { motion } from "framer-motion"

const FromOffScreen = ({ children, className, style }) => {
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
			style={style}
		>
			{children}
		</motion.div>
	)
}

export default FromOffScreen
