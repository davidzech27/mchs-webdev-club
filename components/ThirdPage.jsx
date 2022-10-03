import usePageStatus from "/hooks/usePageStatus"

const ThirdPage = ({ pageRefs, currentPage, setCurrentPage }) => {
	const pageStatus = usePageStatus(currentPage, pageRefs.thirdPage)

	const goToNextPage = () => {
		setCurrentPage(pageRefs.fourthPage)
		pageRefs.firstPageContainer.current.scrollTo({
			left: pageRefs.fourthPage.current.offsetLeft,
			behavior: "smooth"
		})
	}

	return (
		<div
			ref={pageRefs.thirdPage}
			className="h-screen w-screen flex flex-col items-center relative"
		>
			<div
				className="mt-40 mx-auto font-extralight tracking-wide
                           desktop:text-8xl lgmobile:text-5xl mdmobile:text-5xl smmobile:text-5xl tablet:text-8xl"
			>
				Get involved
			</div>

			<div className="desktop:h-56 lgmobile:a mdmobile:a smmobile:a tablet:a w-[70%] mt-[52px] rounded-full border-4 border-text flex">
				<input
					type="text"
					placeholder="youremail@example.com"
					className="text-[64px] font-extralight h-full w-full rounded-l-full bg-[#171922] bg-opacity-[0.45] hover:bg-opacity-[0.75] focus:bg-opacity-[0.75] outline-none transition duration-500
                               desktop:text-[64px] lgmobile:text-[16px] mdmobile: smmobile: tablet:
                               desktop:pl-16 lgmobile:pl-6 mdmobile: smmobile: tablet:"
				></input>
				<button
					onClick={goToNextPage}
					className="top-0 right-0 bg-[#171922] hover:bg-[#1d1f28] w-[22.22%] h-full rounded-r-full border-l-4 border-text transition duration-500 cursor-pointer flex justify-center items-center"
				>
					<svg
						className="-rotate-90"
						width="12.12vh"
						height="50"
						viewBox="0 0 72 35"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M35.7161 26.6208L5.90136 1.60324C4.4206 0.360737 2.21295 0.553881 0.970446 2.03464C-0.27206 3.5154 -0.0789178 5.72305 1.40184 6.96555L33.3471 33.7708C34.4565 34.7017 35.9738 34.8268 37.1877 34.2083C37.5919 34.0729 37.9779 33.8608 38.3243 33.5702L70.2696 6.76491C71.7503 5.52241 71.9435 3.31477 70.7009 1.834C69.4584 0.353243 67.2508 0.160099 65.77 1.40261L35.7161 26.6208Z"
							fill="#e4e6e8"
						/>
					</svg>
				</button>
			</div>

			<div
				className="absolute mx-auto text-center w-[60%] bottom-[178px] font-extralight opacity-80 italic
                           desktop:text-4xl lgmobile:text-2xl mdmobile:text-xl smmobile:text-xl tablet:text-4xl"
			>
				enter your email to connect with the Maria Carrillo web
				development club
			</div>
		</div>
	)
}

export default ThirdPage
