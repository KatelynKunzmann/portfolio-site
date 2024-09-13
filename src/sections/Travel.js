import { Container, Heading, Box } from '@chakra-ui/react'
import Section from '../components/Section'
import GlossyBox from '../components/GlossyBox'
import tortoise from '../../public/images/travel/galapagos/galapagos-tortoise.JPG'
import halongbay from '../../public/images/travel/vietnam/halongbay.jpeg'

const Travel = () => {
    return (
        <Container>
            <Section delay={0.4} id='travel'>
                <Heading as="h3" fontSize={28} mt={8} variant="section-title">
                    Travel
                </Heading>
                <Box flexWrap="wrap">
                    <GlossyBox id="Vietnam" title="Vietnam" thumbnail={halongbay}>
                        Vietnam Trip 2022
                    </GlossyBox>
                    <GlossyBox id="Galapagos" title="Galapagos Islands" thumbnail={tortoise}>
                        Galápagos Islands Research Trip 2020
                    </GlossyBox>
                </Box>
            </Section>
        </Container>
    )
}

export default Travel