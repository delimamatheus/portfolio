// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { webDevTheme } from "../../styles/themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={webDevTheme}>
        <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
