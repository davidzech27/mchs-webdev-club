const ThirdPage = ({ pageRefs, currentPage, setCurrentPage }) => {
	const isCurrentPage = currentPage === pageRefs.thirdPage

	return (
		<div ref={pageRefs.thirdPage} className="h-screen w-screen relative">
			<div className="">todo</div>
		</div>
	)
}

export default ThirdPage
