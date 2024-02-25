import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import LowPolyCatLoader from '../low-poly-cat-loader.js'

const LowPolyCat = dynamic(() => import('../low-poly-cat.js'), {
    ssr: false,
    loading: () => <LowPolyCatLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="images/black-kat.png" />
                <title>Katelyn Kunzmann</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={16}>
                <LowPolyCat />

                {children}
            </Container>
        </Box>
    )
}
export default Main