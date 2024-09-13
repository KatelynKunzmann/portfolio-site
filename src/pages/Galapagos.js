import { Container, Heading, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layouts/Article'
import Section from '../components/Section'
import tortoise from '../../public/images/travel/galapagos/galapagos-tortoise.JPG'
import lat0 from '../../public/images/travel/galapagos/Lat00.JPEG'
import choco_coffee from '../../public/images/travel/galapagos/choco_coffee.JPEG'

const Galapagos = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={28} mt={8} variant="section-title">
                    Galápagos Islands Research Trip 2020
                </Heading>
                <Section delay={0.4}>
                    In the beginning of 2020, before COVID, I had the privilege of traveling to the Galápagos Islands with
                    a group of fellow students for research. The research was a broad investigation into evolution and ecology,
                    exploring how they shape each other and are ever-present in the flora and fauna of the Galápagos.
                    It was a once in a lifetime opportunity that also changed my life.
                    <br />
                    <br />
                    View my adventure through the
                    following photos and descriptions:
                </Section>
                <Section delay={0.6}>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={tortoise} alt="Tortoise portrait" className="grid-item-thumbnail" />
                        Galápagos Tortoise
                        <br />
                        The comeback of the tortoises is one of the greatest success stories in conservation history.
                    </Box>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={lat0} alt="Standing on Equator" className="grid-item-thumbnail" />
                    </Box>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={choco_coffee} alt="Chocolate and Coffee" className="grid-item-thumbnail" />
                        Some of the best chocolate and coffee in the world.
                    </Box>
                </Section>
            </Container>
        </Layout>

    )
}

export default Galapagos