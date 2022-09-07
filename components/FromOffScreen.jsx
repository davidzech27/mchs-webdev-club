import { motion } from "framer-motion"


const FromOffScreen = ({ from, children, className }) => {
    let initial
    let animate

    if (from === "right") {
        initial = {
            x: `${20}vw`,
            y: `${20 * 3 ** 0.5}vw`,
            rotate: -30 
        }

        animate = {
            x: 0,
            y: 0,
            rotate: -30
        }
    } else if (from === "left") {
        initial = {
            x: `${-20}vw`,
            y: `${-20 * 3 ** 0.5}vw`,
            rotate: 150
        }

        animate = {
            x: 0,
            y: 0,
            rotate: 150
        }
    }

    return (
        <motion.div
            initial={initial}
            animate={animate}
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