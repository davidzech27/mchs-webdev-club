import { motion } from "framer-motion"

import usePageStatus from "/hooks/usePageStatus"

const FourthPage = ({ pageRefs, currentPage }) => {
	const pageStatus = usePageStatus(currentPage, pageRefs.fourthPage)

	return (
		<div
			ref={pageRefs.fourthPage}
			className="h-screen w-screen flex flex-col justify-center items-center relative gap-[70px] font-semibold"
		>
			<div className="text-9xl">Thank you!</div>

			<div className="text-6xl font-extralight">
				We will notify you shortly with further details
			</div>
		</div>
	)
}

export default FourthPage
