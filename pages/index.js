import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius={15} color="dark_gray" bg="evergreen" p={3} mb={6} align="center"> Hello, I'm a full stack developer </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Katelyn Kunzmann
                    </Heading>
                    <p>Coffee and Cat lover</p>
                </Box>
            </Box>
        </Container>

    )
}

export default Page 