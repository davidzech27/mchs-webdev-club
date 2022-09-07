import { motion } from "framer-motion"

const FadeInText = ({ children, className }) => {
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
                duration: 0.8,
                ease: "easeOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
 
export default FadeInText