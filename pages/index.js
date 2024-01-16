import NextLink from 'next/link'
import { Container, Box, Heading, Image, Button, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Home = () => {
    return (

        <Container>
            <Box
                borderRadius={15}
                color="theme_colors.dark_gray"
                bg="theme_colors.evergreen"
                fontWeight="bold"
                p={3}
                m={6}
                textAlign="center"
            >
                Hello, I&apos;m a full-stack developer based in Pittsburgh!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Katelyn Kunzmann
                    </Heading>
                    <Paragraph>Software Engineer</Paragraph>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                        src="/images/Katelyn_and_Melody.png"
                        alt="Profile pic"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title" textDecoration="none">
                    💻Code  ☕Coffee  🐈Cats
                </Heading>
                <Paragraph>sums up my life as a cat-lover, developer, bean juice aficionado, and all-around tech geek.
                    You can find me coding away with my furrbaby purring louder than my computer!
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="experience">
                        <Button
                            rightIcon={<ChevronRightIcon />}
                            bg="theme_colors.evergreen"
                            color="theme_colors.dark_gray"
                            _hover={{
                                color: "theme_colors.pale_white"
                            }}
                        >
                            Experience
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1995</BioYear>
                    Born in Biloxi, MS, USA.
                </BioSection>
                <BioSection>
                    <BioYear>2012</BioYear>
                    Adopted my cat, Melody
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Took my first programming class (Python Programming) and loved it
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Declared major as Computer Science
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Worked at <Link href="https://www.ncfta.net/" color="#bf00ff" fontWeight="bold">NCFTA</Link> as a Malware Analyst Intern
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Worked at <Link href="https://tackle.io/" color="#bf00ff" fontWeight="bold">Tackle.io</Link> as a Software Engineer Intern

                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Completed a Bachelor&apos;s Degree in Computer Science at the University of Pittsburgh
                </BioSection>
                <BioSection>
                    <BioYear>2023 to present</BioYear>
                    Working at <Link href="https://www.upmc.com/" color="#bf00ff" fontWeight="bold">UPMC</Link> as a Software Engineer Associate
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ❤️
                </Heading>
                <Paragraph>
                    Snowboarding, Longboarding, Video Games, Gems and Minerals, Cuddling my cat, and {' '}
                    <Link href="/keyboards" color="#bf00ff" fontWeight="bold">Building Keyboards!</Link>
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Home 