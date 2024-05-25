import { Container, Heading, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layouts/Article'
import katkeeb from '../../public/images/hardware/kat-keeb.jpeg'
import retrokeeb from '../../public/images/hardware/retro-keeb.jpeg'
import tealkeeb from '../../public/images/hardware/teal-keeb.jpeg'
import Section from '../components/Section'

const keyboards = () => {
    return (
        <Layout>

            <Container thumbnail={katkeeb}>
                <Heading as="h3" fontSize={28} mt={8} variant="section-title">
                    My Keyboards
                </Heading>
                <Section delay={0.4}>
                    I love the meticulous and stubborn art of constructing keyboards.
                    I get to pick and choose the aesthetic and control every small detail and specification to the finest degree.
                    Building keyboards has become my creative outlet, blending technology and design in a way that brings me joy.
                    I enjoy the process of refining and customizing my keyboards to achieve the perfect sound and feel for my own taste.
                    It&apos;s not just about creating the perfect keyboard though, but about giving a simplistic, overlooked everyday device an individuality.
                    It&apos;s a relaxing journey of self-expression in something I find comforting and enjoyable.
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

export default keyboards