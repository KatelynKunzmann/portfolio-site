import { Container, Heading, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layouts/Article'
import katkeeb from '../../public/images/hardware/kat-keeb.jpeg'
import retrokeeb from '../../public/images/hardware/retro-keeb.jpeg'
import tealkeeb from '../../public/images/hardware/teal-keeb.jpeg'
import pinkkeeb from '../../public/images/hardware/pinkkeeb.jpg'
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
                        Clack cat as an acrylic keyboard - I went for a typewriter look and feel
                        <br />
                        <div align="left" >
                            - Switches: Gazzew Boba Black U4T Tactile
                            <br />
                            - Keycaps: Cheap amazon find (look and feel great still)
                            <br />
                            - Board: Drop Bongo Cat Acrylic
                            <br />
                        </div>
                    </Box>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={retrokeeb} alt="Retro keyboard" className="grid-item-thumbnail" />
                        Inspired by the Commodore 64 - retro keyboard with large keycaps that produce a nostalgic feel and sound
                        <br />
                        <div align="left" >
                            - Switches: Gazzew Boba Black U4T Tactile
                            <br />
                            - Keycaps: Novelkeys SA Recall
                            <br />
                            - Board: Candykeys Command 65
                            <br />
                        </div>

                    </Box>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={tealkeeb} alt="Teal keyboard" className="grid-item-thumbnail" />
                        The first keyboard I ever built - still has the most satisfying sound out of all of them
                        <br />
                        <div align="left" >
                            - Switches: Gateron Black Linear
                            <br />
                            - Keycaps: Novelkeys SA Recall
                            <br />
                            - Board: Glorious GMMK Pro
                            <br />
                        </div>
                    </Box>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={pinkkeeb} alt="Pink Ceramic keyboard" className="grid-item-thumbnail" />
                        Full keyboard with ceramic keycaps
                        <br />
                        <div align="left" >
                            - Switches: KTT Kang White Linear
                            <br />
                            - Keycaps: Cerakey Ceramic keycaps
                            <br />
                            - Board: Cheap amazon find
                            <br />
                        </div>
                    </Box>
                </Section>
            </Container>
        </Layout>

    )
}

export default Keyboards