import Head from "next/head"
import "../styles/globals.css"

const App = ({ Component }) => {
	return (
		<>
			<Head>
				<title>MCHS webdev club</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Component />
		</>
	)
}

export default App
