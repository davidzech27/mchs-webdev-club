import { useState, useEffect } from "react"

const PageStatus = {
	hidden: "hidden",
	visible: "visible",
	exited: "exited"
}

const usePageStatus = (currentPage, thisPage) => {
	const [pageStatus, setPageStatus] = useState(PageStatus.hidden)

	useEffect(() => {
		if (currentPage === thisPage) {
			setPageStatus(PageStatus.visible)
		} else if (pageStatus === PageStatus.visible) {
			setPageStatus(PageStatus.exited)
		}
	}, [currentPage])

	return pageStatus
}

export default usePageStatus
