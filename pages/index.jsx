import { useRef, useState } from "react"

import FirstPage from "/components/FirstPage"
import SecondPage from "/components/SecondPage"
import ThirdPage from "/components/ThirdPage"
import FourthPage from "/components/FourthPage"
import FifthPage from "/components/FifthPage"

const Home = () => {
	const firstPage = useRef(null)
	const secondPage = useRef(null)
	const thirdPage = useRef(null)
	const fourthPage = useRef(null)
	const fifthPage = useRef(null)
	const firstPageContainer = useRef(null)
	const secondPageContainer = useRef(null)
	const thirdPageContainer = useRef(null)

	const pageRefs = {
		firstPage,
		secondPage,
		thirdPage,
		fourthPage,
		fifthPage,
		firstPageContainer,
		secondPageContainer,
		thirdPageContainer
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
				<div className="flex w-[200vw]">
					<SecondPage
						pageRefs={pageRefs}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
					<div
						ref={secondPageContainer}
						className="h-screen w-screen overflow-y-scroll"
					>
						<div className="flex flex-col">
							<ThirdPage
								pageRefs={pageRefs}
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
							/>
							<div
								ref={thirdPageContainer}
								className="overflow-x-scroll"
							>
								<div className="flex w-[200vw]">
									<FourthPage
										pageRefs={pageRefs}
										currentPage={currentPage}
										setCurrentPage={setCurrentPage}
									/>
									<FifthPage
										pageRefs={pageRefs}
										currentPage={currentPage}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
