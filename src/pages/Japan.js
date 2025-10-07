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
                    I had the privilege of solo venturing through Japan in 2025 and it was the most beautiful experience of my life.
                    Starting in the north in Niseko, Japan, I snowboarded down mountains while making international friends in a hostel
                    and attending a music festival with them during the night at the base of the mountain. I then ventured forth to Kyoto,
                    which became my favorite part of Japan. The traditional architecture and solemn atmosphere carried throughout the city.
                    I also explored Ghibli Park, experiencing the wonders of the Ghibli world in person.
                    Next was Osaka, AKA Japan&apos;s Kitchen, where I attended a food/beverage tour with my brother and sister-in-law.
                    After Osaka, was Tokyo where I stayed for 3 days and enjoyed every minute it had to offer. Lastly, I stayed one night
                    with the kindest Japanese family near Mt.Fuji. After getting to witness as much of Japan as I could in 2 weeks, I still have the
                    wanderlust urge to go bacl and do it all again.
                    Take a look below for the highlights of my trip.
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