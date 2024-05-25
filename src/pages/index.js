import { Container, Box, Heading, Image, Link, useColorModeValue, Flex } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Section from '../components/Section.js'
import Paragraph from '../components/Paragraph.js'
import { BioSection, BioYear } from '../sections/Bio.js'
import { PopButton } from '../components/PopButton'
import Layout from '../components/layouts/Article.js'
import LowPolyCatLoader from '../components/Low-Poly-Cat-Loader.js'

const LowPolyCat = dynamic(() => import('../components/Low-Poly-Cat.js'), {
    ssr: false,
    loading: () => <LowPolyCatLoader />
})

const Home = () => {
    return (
        <Layout>
            <LowPolyCat />
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
                    Hello, I&apos;m a software developer based in Pittsburgh!
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
                            borderColor="theme_colors.pale_white"
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
                    <Box display={'flex'} justifyContent={'center'} gap={2} m={2}>
                        <PopButton
                            label="Experience"
                            id="Experience"
                        >
                        </PopButton>
                        <PopButton
                            label="Portfolio"
                            id="Ventures"
                        >
                        </PopButton>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1995</BioYear>
                        Born in Biloxi, MS
                    </BioSection>
                    <BioSection>
                        <BioYear>2003</BioYear>
                        Moved to Pennsylvania
                    </BioSection>
                    <BioSection>
                        <BioYear>2012</BioYear>
                        Adopted my cat, Melody
                    </BioSection>
                    <BioSection>
                        <BioYear>2014</BioYear>
                        Graduated High School
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Moved to Pittsburgh
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Took my first programming class (Python Programming) and loved it
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Declared Computer Science major
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Worked at <Link href="https://www.ncfta.net/" isExternal color={useColorModeValue("theme_colors.dark_purple", "theme_colors.purplish")} fontWeight="bold" _hover={{ color: "theme_colors.lavendar" }}>NCFTA</Link> as a Malware Analyst Intern
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Worked at <Link href="https://tackle.io/" isExternal color={useColorModeValue("theme_colors.dark_purple", "theme_colors.purplish")} fontWeight="bold" _hover={{ color: "theme_colors.lavendar" }}>Tackle.io </Link> as a Software Engineer Intern
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Graduated from the University of Pittsburgh with a Bachelor&apos;s Degree in Computer Science
                    </BioSection>
                    <BioSection>
                        <Flex direction="column" align="left">
                            <BioYear>2023 to Present</BioYear>
                        </Flex>
                        Working at{' '}
                        <Link
                            href="https://www.upmc.com/"
                            isExternal
                            color={useColorModeValue('theme_colors.dark_purple', 'theme_colors.purplish')}
                            fontWeight="bold"
                            _hover={{ color: 'theme_colors.lavendar' }}
                        >
                            UPMC
                        </Link>{' '}
                        as a Software Engineer Associate
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I ❤️
                    </Heading>
                    <Paragraph>
                        Snowboarding, Longboarding, Video Games, Minerals, Cuddling my cat, and {' '}
                        <Link href="/keyboards" color={useColorModeValue("theme_colors.dark_purple", "theme_colors.purplish")} fontWeight="bold" _hover={{ color: "theme_colors.lavendar" }}>Building Keyboards!</Link>
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Home 