import { motion } from "framer-motion"


const Home = () => {



    return (
        <>
            <div className="h-screen w-screen
                            flex justify-center
                            pt-[18%]
                            bg-[#050913]
                            relative"
            >


                <motion.div
                    initial={{
                        x: "-30vw",
                        y: "-52vw",
                        rotate: 150
                    }}
                    animate={{
                        x: "-10vw",
                        y: "-12vw",
                        rotate: 150
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 12
                    }}
                    className="h-[84vh] w-[10%] bg-gradient-to-tr from-[#dd5090] to-[#dd9050] rounded-t-full">    
                </motion.div>


                <motion.h1
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
                    className="w-[65%] text-center text-6xl text-[#e4e6e8]"
                >
                    Do you want to build and deploy impactful websites?
                </motion.h1>

                <motion.div
                    initial={{
                        x: "28vw",
                        y: "28vw",
                        rotate: -30
                    }}
                    animate={{
                        x: "8vw",
                        y: "-12vw",
                        rotate: -30
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 12
                    }}
                    className="h-[84vh] w-[10%] bg-gradient-to-tl from-[#dd5090] to-[#dd9050] rounded-t-full">    
                </motion.div>


            </div>
        </>
    )
}

export default Home