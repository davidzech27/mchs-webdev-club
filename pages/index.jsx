import { useState } from "react"

import { motion, AnimatePresence } from "framer-motion"

import FirstPage from "/components/FirstPage"
import SecondPage from "/components/SecondPage"
import ThirdPage from "/components/ThirdPage"
import FourthPage from "/components/FourthPage"
import FifthPage from "/components/FifthPage"

const Home = () => {
	const [currentPageNum, setCurrentPageNum] = useState(0)

	const CurrentPage = [FirstPage, SecondPage, ThirdPage, FourthPage, FifthPage][currentPageNum]

	const goToNextPage = () => {
		setCurrentPageNum((prev) => prev + 1)
	}

	return (
		<div className="h-screen w-screen bg-background text-text">
			<AnimatePresence>
				<motion.div key={currentPageNum} className="absolute">
					<CurrentPage
						goToNextPage={goToNextPage}
						transition={{
							duration: 0.6,
							ease: "easeInOut"
						}}
					/>
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default Home
