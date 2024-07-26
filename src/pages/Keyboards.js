import { Container, Heading, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layouts/Article'
import katkeeb from '../../public/images/hardware/kat-keeb.jpeg'
import retrokeeb from '../../public/images/hardware/retro-keeb.jpeg'
import tealkeeb from '../../public/images/hardware/teal-keeb.jpeg'
import Section from '../components/Section'

const Keyboards = () => {
    return (
        <Layout>

            <Container>
                <Heading as="h3" fontSize={28} mt={8} variant="section-title">
                    My Keyboards
                </Heading>
                <Section delay={0.4}>
                    I love the meticulous and stubborn art of constructing keyboards.
                    The process of refining and customizing my keyboards to achieve the perfect sound and feel is very satisfying.
                    It&apos;s not just about creating the perfect keyboard; it&apos;s about infusing a simplistic, often overlooked everyday device with an individuality.
                    This journey has been a relaxing and fulfilling form of self-expression, bringing comfort and joy into my life.
                    <br />
                    <br />
                    Below are the keyboards I have made so far in my keyboard building journey:
                </Section>
                <Section delay={0.6}>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={katkeeb} alt="Cat keyboard" className="grid-item-thumbnail" />
                    </Box>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={retrokeeb} alt="Retro keyboard" className="grid-item-thumbnail" />
                    </Box>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={tealkeeb} alt="Teal keyboard" className="grid-item-thumbnail" />
                    </Box>
                </Section>
            </Container>
        </Layout>

    )
}

export default Keyboards