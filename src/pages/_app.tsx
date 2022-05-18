import "../styles/globals.css";
import {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react"
import customTheme from "../theme"

function App({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={customTheme}>
            <Component {...pageProps} />;
        </ChakraProvider>
    );
}

export default App;
