import { Container, Heading } from '@chakra-ui/react'
import Section from '../components/Section'
import GlossyBox from '../components/GlossyBox'

const Minerals = () => {
    return (
        <Container>
            <Section delay={0.4} id='minerals'>
                <Heading as="h3" fontSize={28} mt={8} variant="section-title">
                    Minerals
                </Heading>
                <GlossyBox id="minerals">
                    Currently collecting...
                </GlossyBox>
            </Section>
        </Container>
    )
}

export default Minerals