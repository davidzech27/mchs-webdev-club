import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

import FloatingButton from "/components/FloatingButton"

import usePageStatus from "/hooks/usePageStatus"

const ThirdPage = ({ pageRefs, currentPage, setCurrentPage }) => {
	const pageStatus = usePageStatus(currentPage, pageRefs.thirdPage)

	const goToNextPage = () => {
		setCurrentPage(pageRefs.fourthPage)
		pageRefs.secondPageContainer.current.scrollTo({
			top: pageRefs.fourthPage.current.offsetTop,
			behavior: "smooth"
		})
	}

	const paragraphVariants = {
		hidden: {
			opacity: 0
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.4,
				delay: 0.3,
				ease: "easeOut"
			}
		},
		exited: {
			opacity: 0,
			transition: {
				duration: 0.4,
				ease: "easeOut"
			}
		}
	}

	const [italicizedWord, setItalicizedWord] = useState(0)

	const wordRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

	useEffect(() => {
		let intervalId

		if (pageStatus === "visible") {
			intervalId = setInterval(() => {
				setItalicizedWord((prev) => {
					if (prev !== 3) {
						return prev + 1
					} else {
						return 0
					}
				})
			}, 1000)
		} else if (pageStatus === "exited") {
			clearInterval(intervalId)
		}
	}, [pageStatus])

	return (
		<div
			ref={pageRefs.thirdPage}
			className="h-screen w-screen flex flex-col items-center relative overflow-x-hidden
                       desktop:pt-[150px] lgmobile:pt-8 mdmobile:pt-8 smmobile:pt-8 tablet:pt-[114px]
                       desktop:px-56 lgmobile:px-10 mdmobile:px-10 smmobile:px-10 tablet:px-36"
		>
			<motion.p
				animate={pageStatus}
				variants={paragraphVariants}
				className="font-extralight select-text relative z-10
                           desktop:text-[30px] lgmobile:text-[2.18vh] mdmobile:text-[16.5px] smmobile:text-[14.5px] tablet:text-[24.5px]
                           desktop:leading-[49px] tablet:leading-[44px]"
			>
				In the Maria Carrillo web development club, our prime objective
				is to provide opportunities for students of all experience
				levels to develop{" "}
				<span
					ref={wordRefs[0]}
					className={italicizedWord === 0 ? "italic" : ""}
				>
					real-world
				</span>{" "}
				programming skills, and build{" "}
				<span
					ref={wordRefs[1]}
					className={italicizedWord === 1 ? "italic" : ""}
				>
					meaningful
				</span>{" "}
				projects while doing so. From landing pages to word counters to
				social media platforms, we guide you through the process of
				building{" "}
				<span
					ref={wordRefs[2]}
					className={italicizedWord === 2 ? "italic" : ""}
				>
					impressive
				</span>{" "}
				websites to help you learn web development. For members already
				proficient in web development, we work in teams to create
				websites for the benefit of our{" "}
				<span
					ref={wordRefs[3]}
					className={italicizedWord === 3 ? "italic" : ""}
				>
					community
				</span>
				. This is an opportunity not just for those passionate about
				computer science, but for anyone looking to acquire skills for
				an increasingly computer-dependent world.
			</motion.p>
			<FloatingButton
				status={pageStatus}
				onClick={goToNextPage}
				duration={0.4}
				delay={0.4}
				className="desktop:mt-[24px] lgmobile:mt-[3.5vh] mdmobile:mt-[20px] smmobile:mt-[17px] tablet:mt-4"
			/>
		</div>
	)
}

export default ThirdPage
