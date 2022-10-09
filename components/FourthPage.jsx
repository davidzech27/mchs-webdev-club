import { useState } from "react"
import { motion } from "framer-motion"

const FourthPage = ({ goToNextPage, transition }) => {
	const [emailInput, setEmailInput] = useState("")
	const emailInputEmpty = emailInput === ""

	const onSubmit = async (e) => {
		e.preventDefault()
		if (!emailInputEmpty) {
			goToNextPage()

			console.log(
				await (
					await fetch("/api/sendEmail", {
						method: "post",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email: emailInput
						})
					})
				).json()
			)
		}
	}

	const textAnimations = {
		initial: {
			opacity: 0
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.4,
				delay: 0.4,
				ease: "easeOut"
			}
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.4,
				ease: "easeOut"
			}
		}
	}

	const textboxAnimations = {
		initial: {
			x: -100,
			opacity: 0
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.4,
				delay: 0.4,
				ease: "easeOut"
			}
		},
		exit: {
			x: 100,
			opacity: 0,
			transition: {
				duration: 0.4,
				ease: "easeOut"
			}
		}
	}

	return (
		<motion.div
			initial={{
				x: 0,
				y: "100vh"
			}}
			animate={{
				x: 0,
				y: 0
			}}
			exit={{
				x: "-100vw",
				y: 0
			}}
			transition={transition}
			className="h-screen w-screen flex flex-col items-center relative"
		>
			<motion.div
				{...textAnimations}
				className="mx-auto font-extralight tracking-wide
                           desktop:text-8xl lgmobile:text-5xl mdmobile:text-5xl smmobile:text-5xl tablet:text-8xl
                           desktop:mt-40 lgmobile:mt-[280px] mdmobile:mt-[225px] smmobile:mt-[200px] tablet:mt-[148px]"
			>
				Get involved
			</motion.div>

			<motion.form
				onSubmit={onSubmit}
				{...textboxAnimations}
				className="desktop:h-56 tablet:h-36 w-[71%] mt-[52px] rounded-full desktop:border-4 tablet:border-4 border-[1.5px] border-text flex"
			>
				<input
					type="email"
					value={emailInput}
					onChange={(e) => setEmailInput(e.target.value)}
					placeholder="YourEmail@example.com"
					className="font-extralight h-full w-full rounded-l-full bg-[#171922] bg-opacity-[0.45] hover:bg-opacity-[0.75] focus:bg-opacity-[0.75] outline-none transition duration-500
                               desktop:text-[64px] lgmobile:text-[16px] mdmobile:text-[17px] smmobile:text-[15.5px] tablet:text-[44px]
                               desktop:pl-16 lgmobile:pl-[22px] mdmobile:pl-[22px] smmobile:pl-[20px] tablet:pl-[44px]"
				/>
				<button
					type="submit"
					className={`top-0 right-0 bg-[#171922] ${
						!emailInputEmpty ? "hover:bg-[#1d1f28]" : "bg-opacity-[0.45] cursor-default"
					} w-[22.22%] h-full rounded-r-full desktop:border-l-4 tablet:border-l-4 border-l-[1.5px] border-text transition duration-500 flex justify-center items-center`}
				>
					<svg
						className="-rotate-90"
						width="66%"
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
			</motion.form>
		</motion.div>
	)
}

export default FourthPage
