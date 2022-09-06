import "../styles/globals.css"

const App = ({ Component, pageProps }) => {
    return <>
        <Head>
            <title>MCHS webdev club</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />    
    </>
}

export default App
