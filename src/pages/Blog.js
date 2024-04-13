import { Container, Heading, Box } from '@chakra-ui/react'
import Section from '../components/Section'
import Layout from '../components/layouts/Article'
import Paragraph from '../components/Paragraph'

const Blog = () => {
    return (
        <Layout>
            <Container>
                <Section delay={0.4} id='blog'>
                    <Heading as="h3" fontSize={28} mt={8} variant="section-title">
                        Blog
                    </Heading>
                    <Box>
                        <Paragraph>

                        </Paragraph>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Blog