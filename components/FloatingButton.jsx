import { motion } from "framer-motion"

const FloatingButton = ({
	status,
	onClick,
	duration = 0.5,
	delay = 0.3,
	pointing = "down",
	className,
	style
}) => {
	const buttonVariants = {
		hidden: {
			y: 30,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration,
				delay,
				ease: "easeOut"
			}
		},
		exited: {
			y: 0, // line shouldn't be necessary but for some reason prevents button from exiting diagonally when it exit right
			[pointing === "down"
				? "y"
				: pointing === "right"
				? "x"
				: "not-yet-implemented"]: 50,
			opacity: 0,
			transition: {
				duration: 0.4,
				ease: "easeOut"
			}
		}
	}

	return (
		<div className={className} style={style}>
			<div className="relative">
				<motion.div
					initial="hidden"
					animate={status}
					variants={buttonVariants}
				>
					<div
						onClick={onClick}
						className="h-[94px] w-[94px] rounded-full border-[4px] border-text bg-[#161922] hover:bg-[#1f232c] shadow-xl shadow-[rgba(228,230,232,0.15)] hover:shadow-[rgba(228,230,232,0.20)] transition duration-700 cursor-pointer relative z-10"
					>
						<div
							className={`
                                    h-full w-full top-0 left-0
                                ${
									pointing === "down"
										? ""
										: pointing === "right"
										? "-rotate-90"
										: "not-yet-implemented"
								}`}
						>
							<svg
								className="absolute top-[34px] left-0 right-0 mx-auto"
								width="57.4"
								height="28"
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
				</motion.div>
			</div>
		</div>
	)
}

export default FloatingButton
