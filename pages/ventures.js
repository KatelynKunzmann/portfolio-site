import { Container, Heading, HStack, Box, IconButton } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { useRef, useState, useEffect } from 'react';
import Travel from '../components/Travel';
import Software from '../components/Software';
import Hardware from '../components/Hardware';
import Blockchain from '../components/Blockchain';
import Gems_and_minerals from '../components/Gems_and_Minerals';
import Languages from '../components/Languages';

const Ventures = () => {
    const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleClick = (index) => {
        refs[index].current?.scrollIntoView({ behavior: 'smooth' });
    };

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
            <HStack direction='row' spacing={2} >
                {['Software', 'Hardware', 'Blockchain', 'Travel', 'Minerals', 'Languages'].map((label, index) => (
                    <Box
                        key={label}
                        onClick={() => handleClick(index)}
                        as='button'
                        borderRadius='md'
                        bg='theme_colors.cool_blue'
                        color='white'
                        px={4}
                        h={8}
                        _hover={{
                            color: "theme_colors.dark_gray",
                            bg: "theme_colors.light_green",
                            borderRadius: '5',
                            shadow: 'md',
                            transitionDuration: '0.2s',
                            transitionTimingFunction: "ease-in-out"
                        }}
                    >
                        {label}
                    </Box>
                ))}
            </HStack>

            {['Software', 'Hardware', 'Blockchain', 'Travel', 'Gems_and_minerals', 'Languages'].map((component, index) => (
                <div key={component} ref={refs[index]}>
                    {component === 'Software' && <Software />}
                    {component === 'Hardware' && <Hardware />}
                    {component === 'Blockchain' && <Blockchain />}
                    {component === 'Travel' && <Travel />}
                    {component === 'Gems_and_minerals' && <Gems_and_minerals />}
                    {component === 'Languages' && <Languages />}
                </div>
            ))}

            {scrollPosition > 100 && (
                <IconButton
                    icon={<ChevronUpIcon />}
                    aria-label="Return to Top"
                    onClick={scrollToTop}
                    position="fixed"
                    bottom="4"
                    right="4"
                    bgColor="theme_colors.cool_blue"
                    color="white"
                    borderRadius="md"
                    _hover={{
                        bgColor: "theme_colors.light_green",
                        color: "theme_colors.dark_gray",
                        transitionDuration: '0.2s',
                        transitionTimingFunction: "ease-in-out"
                    }}
                />
            )}
        </Container>
    );
};

export default Ventures;
