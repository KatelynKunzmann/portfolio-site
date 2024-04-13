import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../styles/Fonts'
import theme from '../styles/Theme'
import { AnimatePresence } from 'framer-motion'

const App = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence mode='wait' initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>

            </Layout>
        </ChakraProvider>
    )
}

export default App