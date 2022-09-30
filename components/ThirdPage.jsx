const ThirdPage = ({ pageRefs, currentPage, setCurrentPage }) => {
	const isCurrentPage = currentPage === pageRefs.thirdPage

	return (
		<div
			ref={pageRefs.thirdPage}
			className="h-screen w-screen flex flex-col items-center pt-[312px] relative"
		>
			<div className="h-56 w-[70%] rounded-full border-4 border-text flex">
				<input
					type="text"
					placeholder="youremail@example.com"
					className="text-[64px] font-extralight h-full w-full pl-16 rounded-l-full bg-[#171922] bg-opacity-[0.45] hover:bg-opacity-[0.75] focus:bg-opacity-[0.75] outline-none transition duration-500"
				></input>
				<div className="top-0 right-0 bg-[#171922] hover:bg-[#1d1f28] w-56 h-full rounded-r-full border-l-4 border-text transition duration-500 cursor-pointer flex justify-center items-center">
					<svg
						className="-rotate-90"
						width="100"
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
				</div>
			</div>

			<div className="font-3xl opacity-70 italic">
				enter your email to get involved
			</div>
		</div>
	)
}

export default ThirdPage
