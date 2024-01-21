import { Container, Box, Heading, Image, Link, useColorModeValue, Flex } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../sections/bio'
import { PopButton } from '../components/PopButton'

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
                    <PopButton
                        label="Experience"
                        id="experience"
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
                    <BioYear>2012</BioYear>
                    Adopted my cat, Melody
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Took my first programming class (Python Programming) and loved it
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Changed major to Computer Science
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Worked at <Link href="https://www.ncfta.net/" color={useColorModeValue("theme_colors.dark_purple", "theme_colors.purplish")} fontWeight="bold" _hover={{ color: "theme_colors.lavendar" }}>NCFTA</Link> as a Malware Analyst Intern
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Worked at <Link href="https://tackle.io/" color={useColorModeValue("theme_colors.dark_purple", "theme_colors.purplish")} fontWeight="bold" _hover={{ color: "theme_colors.lavendar" }}>Tackle.io </Link> as a Software Engineer Intern

                </BioSection>
                <BioSection>
                    <Flex direction="column" align="left">
                        <BioYear>2023 to Present</BioYear>
                    </Flex>
                    Working at{' '}
                    <Link
                        href="https://www.upmc.com/"
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
                    <Link href="/hardware/keyboards" color={useColorModeValue("theme_colors.dark_purple", "theme_colors.purplish")} fontWeight="bold" _hover={{ color: "theme_colors.lavendar" }}>Building Keyboards!</Link>
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Home 