import { useRef, useState } from "react"

import FirstPage from "/components/FirstPage"
import SecondPage from "/components/SecondPage"
import ThirdPage from "/components/ThirdPage"
import FourthPage from "/components/FourthPage"

const Home = () => {
	const firstPage = useRef(null)
	const secondPage = useRef(null)
	const thirdPage = useRef(null)
	const fourthPage = useRef(null)
	const firstPageContainer = useRef(null)

	const pageRefs = {
		firstPage,
		secondPage,
		thirdPage,
		fourthPage,
		firstPageContainer
	}

	const [currentPage, setCurrentPage] = useState(firstPage)

	return (
		<div className="min-h-screen w-screen bg-background text-text">
			<FirstPage
				pageRefs={pageRefs}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>

			<div ref={firstPageContainer} className="overflow-x-scroll">
				<div className="flex w-[300vw]">
					<SecondPage
						pageRefs={pageRefs}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
					<ThirdPage
						pageRefs={pageRefs}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
					<FourthPage pageRefs={pageRefs} currentPage={currentPage} />
				</div>
			</div>
		</div>
	)
}

export default Home
