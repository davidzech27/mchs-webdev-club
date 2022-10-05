import { motion } from "framer-motion"

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

	return (
		<div
			ref={pageRefs.thirdPage}
			className="h-screen w-screen flex flex-col items-center relative
                       desktop:pt-[150px] lgmobile:pt-8 mdmobile:pt-8 smmobile:pt-8 tablet:pt-[114px]
                       desktop:px-56 lgmobile:px-10 mdmobile:px-10 smmobile:px-10 tablet:px-36"
		>
			<motion.p
				animate={pageStatus}
				variants={paragraphVariants}
				className="font-extralight
                           desktop:text-[30px] lgmobile:text-[2.18vh] mdmobile:text-[17.5px] smmobile:text-[15.5px] tablet:text-[24.5px]
                           desktop:leading-[49px] tablet:leading-[44px]"
			>
				In the Maria Carrillo web development club, our prime objective
				is to provide opportunities for people of all experience levels
				to develop real-world programming skills, and build meaningful
				projects while doing so. From landing pages to word counters to
				social media platforms, we guide you through the process of
				building impressive websites to help you learn web development.
				For members already proficient in web development, we work in
				teams to create websites for the benefit of our community. This
				is an opportunity not just for those passionate about computer
				science, but for anyone looking to acquire skills for an
				increasingly computer-dependent world.
			</motion.p>
			<FloatingButton
				status={pageStatus}
				onClick={goToNextPage}
				duration={0.4}
				delay={0.4}
				className="desktop:mt-[28px] lgmobile:mt-[3.5vh] mdmobile:mt-[20px] smmobile:mt-[17px] tablet:mt-4"
			/>

			<svg
				viewBox="0 0 900 450"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
			>
				<g transform-origin="center" transform="scale(1, 1) rotate(0)">
					<rect
						x="0"
						y="0"
						width="900"
						height="450"
						fill="#05091300"
					></rect>
					<linearGradient id="linear-gradient-r0">
						<stop
							offset="0%"
							stopColor="#DE617F"
							stopOpacity="100%"
						></stop>
						<stop
							offset="100%"
							stopColor="#dd9050"
							stopOpacity="100%"
						></stop>
					</linearGradient>
					<path
						d="M0 305.63671424018685 0,305.63671424018685 C 45.00000000000001,305.3716576054227 135,300.73204978897706 225,304.3114310663659 C 315,307.8908123437548 360,324.1091610240285 450,323.5336206271313 C 540,322.9580802302342 585,308.95384225600867 675,301.4337290818803 C 765,293.91361590775193 855,289.0331896215677 900,285.9330547564896"
						fill="none"
						strokeLinecap="round"
						strokeWidth="1"
						style={{
							transition:
								"all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s"
						}}
						stroke="url(#linear-gradient-r0)"
					></path>
					<path
						d="M0 304.3114310663659 0,304.3114310663659 C 45,308.155868978519 135,324.1091610240285 225,323.5336206271313 C 315,322.9580802302342 360,308.95384225600867 450,301.4337290818803 C 540,293.91361590775193 585,298.74858073827346 675,285.9330547564896 C 765,273.1175287747057 855,247.07149028966668 900,237.35609917296097"
						fill="none"
						strokeLinecap="round"
						strokeWidth="1"
						style={{
							transition:
								"all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s"
						}}
						stroke="url(#linear-gradient-r0)"
					></path>
					<path
						d="M0 323.5336206271313 0,323.5336206271313 C 45.00000000000001,319.11364231808113 135,308.95384225600867 225,301.4337290818803 C 315,293.91361590775193 360,298.74858073827346 450,285.9330547564896 C 540,273.1175287747057 585,244.33873141421938 675,237.35609917296097 C 765,230.37346693170258 855,248.2871346747503 900,251.0198935501976"
						fill="none"
						strokeLinecap="round"
						strokeWidth="1"
						style={{
							transition:
								"all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s"
						}}
						stroke="url(#linear-gradient-r0)"
					></path>
					<path
						d="M0 301.4337290818803 0,301.4337290818803 C 45.00000000000001,298.33359421680217 135,298.74858073827346 225,285.9330547564896 C 315,273.1175287747057 360,244.33873141421938 450,237.35609917296097 C 540,230.37346693170258 585,247.48513683273924 675,251.0198935501976 C 765,254.55465026765597 855,254.22788491824178 900,255.0298827602528"
						fill="none"
						strokeLinecap="round"
						stroke="url(#linear-gradient-r0)"
						strokeWidth="1"
						style={{
							transition:
								"all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s"
						}}
					></path>
					<path
						d="M0 285.9330547564896 0,285.9330547564896 C 45.00000000000001,276.21766363978384 135,244.33873141421938 225,237.35609917296097 C 315,230.37346693170258 360,247.48513683273924 450,251.0198935501976 C 540,254.55465026765597 585,248.4962124496233 675,255.0298827602528 C 765,261.56355307088234 855,277.9565726347268 900,283.68824510334525"
						fill="none"
						strokeLinecap="round"
						stroke="url(#linear-gradient-r0)"
						strokeWidth="1"
						style={{
							transition:
								"all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s"
						}}
					></path>
				</g>
			</svg>
		</div>
	)
}

export default ThirdPage
