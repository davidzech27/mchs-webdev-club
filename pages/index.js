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
                        x: "-20vw",
                        y: "-40vw",
                        rotate: 150
                    }}
                    animate={{
                        x: 0,
                        y: 0,
                        rotate: 150
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 12
                    }}
                    className="absolute left-[-2vw] top-[16vw] h-[64vh] w-[10%] bg-gradient-to-tr from-[#dd5090] to-[#dd9050] rounded-t-full">    
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
                    className="w-[65%] text-8xl text-center font-sans font-bold text-[#e4e6e8] z-10"
                >
                    Build and deploy impactful websites.
                </motion.h1>

                <motion.div
                    initial={{
                        x: "20vw",
                        y: "40vw",
                        rotate: -30
                    }}
                    animate={{
                        x: 0,
                        y: 0,
                        rotate: -30
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 12
                    }}
                    className="absolute right-[0vw] bottom-[3vw] h-[84vh] w-[10%] bg-gradient-to-tl from-[#dd5090] to-[#dd9050] rounded-t-full">
                </motion.div>


            </div>
        </>
    )
}

export default Home