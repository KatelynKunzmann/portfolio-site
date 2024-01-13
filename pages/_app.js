import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        brand: {
            cyan: "#bbfdf0",
            teal: "#059175"
        },
    },
})

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website