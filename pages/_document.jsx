import { Html, Head, Main, NextScript } from "next/document"

const Document = () => {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;600;700&display=swap"
					rel="stylesheet"
				/>
				<link rel="canonical" href="https://mchswebdev.club" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
