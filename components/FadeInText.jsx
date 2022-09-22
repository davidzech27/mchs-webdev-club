import { motion } from "framer-motion"

const FadeInText = ({ children, className, style }) => {
	return (
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
			className={className}
			style={style}
		>
			{children}
		</motion.div>
	)
}

export default FadeInText
