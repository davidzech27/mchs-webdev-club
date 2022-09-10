import Head from "next/head"
import "../styles/globals.css"

const App = ({ Component }) => {
	return (
		<>
			<Head>
				<title>MCHS webdev club</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div
				className="min-h-screen w-screen
                      bg-[#050913]
                        relative
                        -z-50"
			>
				<Component />
			</div>
		</>
	)
}

export default App
