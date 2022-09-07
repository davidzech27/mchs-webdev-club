import { motion } from "framer-motion"

import FromOffScreen from "/components/FromOffScreen"
import FadeInText from "/components/FadeInText"


const Home = () => {



    return (
        <>
            <FadeInText className="pt-[32vh] mx-auto w-[65%] text-8xl text-center font-sans font-bold text-[#e4e6e8] z-10">
                <h1>Build and deploy impactful websites.</h1>
            </FadeInText>

            <FromOffScreen from="left" className="absolute top-[9vh] left-[-5vw]">
                <div className="h-[84vh] w-[10vw] bg-gradient-to-tr from-[#dd5090] to-[#dd9050] rounded-t-full"></div>
            </FromOffScreen>

            <FromOffScreen from="right" className="absolute bottom-[6vh] right-0">
                <div className="h-[84vh] w-[10vw] bg-gradient-to-tl from-[#dd5090] to-[#dd9050] rounded-t-full"></div>
            </FromOffScreen>
        </>
    )
}

export default Home