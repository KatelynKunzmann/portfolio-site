import { Container, Heading, Stack, Box, Button, IconButton, useColorModeValue } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { Link } from "react-scroll"
import Layout from '../components/layouts/article';
import Travel from '../sections/Travel';
import Software from '../sections/Software';
import Hardware from '../sections/Hardware';
import Blockchain from '../sections/Blockchain';
import Minerals from '../sections/Minerals';
import Languages from '../sections/Languages';

const Ventures = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={30} mt={6} mb={6}>
                    My Personal Ventures into...
                </Heading>
                <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center" alignItems="center">
                    <Box align="center" mx={1}>
                        <Button
                            border={useColorModeValue('2px solid #1a1333', '2px solid #64ffda')}
                            borderRadius='md'
                            padding='1.25rem 1.75rem'
                            bg={useColorModeValue('#081527', 'transparent')}
                            color='theme_colors.evergreen'
                            px={4}
                            h={8}
                            _hover={{
                                outline: "none",
                                boxShadow: '5px 5px 0 0 #5cdb95',
                                transform: "translate(-5px, -5px)",
                            }}
                        >
                            <Link
                                activeClass="active"
                                to="software"
                                spy={true}
                                smooth={true}
                                offset={-95}
                                duration={500}
                                color={useColorModeValue('theme_colors.light_green', 'theme_colors.evergreen')}>
                                Software
                            </Link>
                        </Button>
                    </Box>

                    <Box align="center" my={1}>
                        <Button
                            border={useColorModeValue('2px solid #1a1333', '2px solid #64ffda')}
                            borderRadius='md'
                            padding='1.25rem 1.75rem'
                            bg={useColorModeValue('#081527', 'transparent')}
                            color='theme_colors.evergreen'
                            px={4}
                            h={8}
                            _hover={{
                                outline: "none",
                                boxShadow: '5px 5px 0 0 #5cdb95',
                                transform: "translate(-5px, -5px)",
                            }}
                        >
                            <Link
                                activeClass="active"
                                to="hardware"
                                spy={true}
                                smooth={true}
                                offset={-95}
                                duration={500}
                                color={useColorModeValue('theme_colors.light_green', 'theme_colors.evergreen')}>
                                Hardware
                            </Link>
                        </Button>
                    </Box>
                    <Box align="center" my={1}>
                        <Button
                            border={useColorModeValue('2px solid #1a1333', '2px solid #64ffda')}
                            borderRadius='md'
                            padding='1.25rem 1.75rem'
                            bg={useColorModeValue('#081527', 'transparent')}
                            color='theme_colors.evergreen'
                            px={4}
                            h={8}
                            _hover={{
                                outline: "none",
                                boxShadow: '5px 5px 0 0 #5cdb95',
                                transform: "translate(-5px, -5px)",
                            }}
                        >
                            <Link
                                activeClass="active"
                                to="blockchain"
                                spy={true}
                                smooth={true}
                                offset={-95}
                                duration={500}
                                color={useColorModeValue('theme_colors.light_green', 'theme_colors.evergreen')}>
                                Blockchain
                            </Link>
                        </Button>
                    </Box>
                    <Box align="center" my={1}>
                        <Button
                            border={useColorModeValue('2px solid #1a1333', '2px solid #64ffda')}
                            borderRadius='md'
                            padding='1.25rem 1.75rem'
                            bg={useColorModeValue('#081527', 'transparent')}
                            color='theme_colors.evergreen'
                            px={4}
                            h={8}
                            _hover={{
                                outline: "none",
                                boxShadow: '5px 5px 0 0 #5cdb95',
                                transform: "translate(-5px, -5px)",
                            }}
                        >
                            <Link
                                activeClass="active"
                                to="travel"
                                spy={true}
                                smooth={true}
                                offset={-95}
                                duration={500}
                                color={useColorModeValue('theme_colors.light_green', 'theme_colors.evergreen')}>
                                Travel
                            </Link>
                        </Button>
                    </Box>
                    <Box align="center" my={1}>
                        <Button
                            border={useColorModeValue('2px solid #1a1333', '2px solid #64ffda')}
                            borderRadius='md'
                            padding='1.25rem 1.75rem'
                            bg={useColorModeValue('#081527', 'transparent')}
                            color='theme_colors.evergreen'
                            px={4}
                            h={8}
                            _hover={{
                                outline: "none",
                                boxShadow: '5px 5px 0 0 #5cdb95',
                                transform: "translate(-5px, -5px)",
                            }}
                        >
                            <Link
                                activeClass="active"
                                to="minerals"
                                spy={true}
                                smooth={true}
                                offset={-95}
                                duration={500}
                                color={useColorModeValue('theme_colors.light_green', 'theme_colors.evergreen')}
                            >
                                Minerals
                            </Link>
                        </Button>
                    </Box>
                    <Box align="center" my={1}>
                        <Button
                            border={useColorModeValue('2px solid #1a1333', '2px solid #64ffda')}
                            borderRadius='md'
                            padding='1.25rem 1.75rem'
                            bg={useColorModeValue('#081527', 'transparent')}
                            color='theme_colors.evergreen'
                            px={4}
                            h={8}
                            _hover={{
                                outline: "none",
                                boxShadow: '5px 5px 0 0 #5cdb95',
                                transform: "translate(-5px, -5px)",
                            }}
                        >
                            <Link
                                activeClass="active"
                                to="languages"
                                spy={true}
                                smooth={true}
                                offset={-95}
                                duration={500}
                                color={useColorModeValue('theme_colors.light_green', 'theme_colors.evergreen')}>
                                Languages
                            </Link>
                        </Button>
                    </Box>
                </Stack>

                <div id="software"><Software /></div>
                <div id="hardware"><Hardware /></div>
                <div id="blockchain"><Blockchain /></div>
                <div id="travel"><Travel /></div>
                <div id="minerals"><Minerals /></div>
                <div id="languages"><Languages /></div>


                {scrollPosition > 100 && (
                    <IconButton
                        icon={<ChevronUpIcon />}
                        aria-label="Return to Top"
                        onClick={scrollToTop}
                        position="fixed"
                        bottom="4"
                        right="4"
                        bgColor="theme_colors.evergreen"
                        color="theme_colors.dark_gray"
                        borderRadius="md"
                        _hover={{
                            bgColor: "theme_colors.mint_green",
                            color: "theme_colors.dark_gray",
                            transitionDuration: '0.3s',
                            transitionTimingFunction: "ease-in-out"
                        }}
                    />
                )}
            </Container>
        </Layout>
    );
};

export default Ventures;
