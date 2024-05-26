import { Container, Heading } from '@chakra-ui/react'
import Section from '../components/Section'
import GlossyBox from '../components/GlossyBox'
import katkeeb from '../../public/images/hardware/kat-keeb.jpeg'

const Hardware = () => {
    return (
        <Container>
            <Section delay={0.4} id='hardware'>
                <Heading as="h3" fontSize={28} mt={8} variant="section-title">
                    Hardware
                </Heading>
                <GlossyBox id="Keyboards" title="Keyboards" thumbnail={katkeeb}>
                </GlossyBox>
            </Section>
        </Container>
    )
}

export default Hardware