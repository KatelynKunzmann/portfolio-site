import { Container, Heading, Stack, Box, IconButton } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { Link } from "react-scroll"
import Travel from '../components/Travel';
import Software from '../components/Software';
import Hardware from '../components/Hardware';
import Blockchain from '../components/Blockchain';
import Minerals from '../components/Minerals';
import Languages from '../components/Languages';

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
        <Container>
            <Heading as="h3" fontSize={30} mt={4} mb={4}>
                My Personal Ventures into...
            </Heading>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={2} padding={2} justifyContent="center" alignItems="center">
                <Box
                    as='button'
                    borderRadius='md'
                    bg='theme_colors.evergreen'
                    color='theme_colors.dark_gray'
                    px={4}
                    h={8}
                    _hover={{
                        color: "theme_colors.dark_gray",
                        bg: "theme_colors.mint_green",
                        borderRadius: '5',
                        shadow: 'md',
                        transitionDuration: '0.3s',
                        transitionTimingFunction: "ease-in-out"
                    }}
                >
                    <Link
                        activeClass="active"
                        to="software"
                        spy={true}
                        smooth={true}
                        offset={-95}
                        duration={500}
                    >
                        Software
                    </Link>
                </Box>
                <Box
                    as='button'
                    borderRadius='md'
                    bg='theme_colors.evergreen'
                    color='theme_colors.dark_gray'
                    px={4}
                    h={8}
                    _hover={{
                        color: "theme_colors.dark_gray",
                        bg: "theme_colors.mint_green",
                        borderRadius: '5',
                        shadow: 'md',
                        transitionDuration: '0.3s',
                        transitionTimingFunction: "ease-in-out"
                    }}
                >
                    <Link
                        activeClass="active"
                        to="hardware"
                        spy={true}
                        smooth={true}
                        offset={-95}
                        duration={500}
                    >
                        Hardware
                    </Link>
                </Box>
                <Box
                    as='button'
                    borderRadius='md'
                    bg='theme_colors.evergreen'
                    color='theme_colors.dark_gray'
                    px={4}
                    h={8}
                    _hover={{
                        color: "theme_colors.dark_gray",
                        bg: "theme_colors.mint_green",
                        borderRadius: '5',
                        shadow: 'md',
                        transitionDuration: '0.3s',
                        transitionTimingFunction: "ease-in-out"
                    }}
                >
                    <Link
                        activeClass="active"
                        to="blockchain"
                        spy={true}
                        smooth={true}
                        offset={-95}
                        duration={500}
                    >
                        Blockchain
                    </Link>
                </Box>
                <Box
                    as='button'
                    borderRadius='md'
                    bg='theme_colors.evergreen'
                    color='theme_colors.dark_gray'
                    px={4}
                    h={8}
                    _hover={{
                        color: "theme_colors.dark_gray",
                        bg: "theme_colors.mint_green",
                        borderRadius: '5',
                        shadow: 'md',
                        transitionDuration: '0.3s',
                        transitionTimingFunction: "ease-in-out"
                    }}
                >
                    <Link
                        activeClass="active"
                        to="travel"
                        spy={true}
                        smooth={true}
                        offset={-95}
                        duration={500}
                    >
                        Travel
                    </Link>
                </Box>
                <Box
                    as='button'
                    borderRadius='md'
                    bg='theme_colors.evergreen'
                    color='theme_colors.dark_gray'
                    px={4}
                    h={8}
                    _hover={{
                        color: "theme_colors.dark_gray",
                        bg: "theme_colors.mint_green",
                        borderRadius: '5',
                        shadow: 'md',
                        transitionDuration: '0.3s',
                        transitionTimingFunction: "ease-in-out"
                    }}
                >
                    <Link
                        activeClass="active"
                        to="minerals"
                        spy={true}
                        smooth={true}
                        offset={-95}
                        duration={500}
                    >
                        Minerals
                    </Link>
                </Box>
                <Box
                    as='button'
                    borderRadius='md'
                    bg='theme_colors.evergreen'
                    color='theme_colors.dark_gray'
                    px={4}
                    h={8}
                    _hover={{
                        color: "theme_colors.dark_gray",
                        bg: "theme_colors.mint_green",
                        borderRadius: '5',
                        shadow: 'md',
                        transitionDuration: '0.3s',
                        transitionTimingFunction: "ease-in-out"
                    }}
                >
                    <Link
                        activeClass="active"
                        to="languages"
                        spy={true}
                        smooth={true}
                        offset={-95}
                        duration={500}
                    >
                        Languages
                    </Link>
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
    );
};

export default Ventures;
