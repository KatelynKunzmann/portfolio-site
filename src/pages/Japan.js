import { Container, Heading, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layouts/Article'
import fuji from '../../public/images/travel/japan/fuji.JPEG'
import Section from '../components/Section'

const Japan = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={28} mt={8} variant="section-title">
                    Japan Trip 2025
                </Heading>
                <Section delay={0.4}>
                    My trip through Japan in 2025 was ...
                </Section>
                <Section delay={0.6}>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={fuji} alt="Mt. Fuji" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        Chureito Pagoda with Mt. Fuji in the distance.
                    </Box>
                </Section>
            </Container>
        </Layout>

    )
}

export default Japan