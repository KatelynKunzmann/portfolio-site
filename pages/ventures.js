import { Container, Heading, Link, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/layouts/grid-item'
import Paragraph from '../components/paragraph'
import { animateScroll as scroll } from 'react-scroll'

const scrollToSection = (section) => {
    scroll.scrollTo({ section }, {
        spy: true,
        smooth: true,
        offset: -70,
        duration: 500,
    });
};

const Ventures = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={30} mt={4} mb={4}>
                My Personal Ventures into...
            </Heading>
            Software, Hardware, Blockchain, Travel, Gems & Minerals, Languages
            <Heading as="h3" fontSize={26} mt={4} mb={4}>
                Software
            </Heading>
        </Container>
    );
};

export default Ventures