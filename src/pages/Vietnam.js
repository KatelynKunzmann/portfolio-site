import { Container, Heading, Box } from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layouts/Article'
import halongbay from '../../public/images/travel/vietnam/halongbay.jpeg'
import Section from '../components/Section'

const Vietnam = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={28} mt={8} variant="section-title">
                    Vietnam Trip 2022
                </Heading>
                <Section delay={0.4}>
                    Traveling to Vietnam in 2022 was the longest flight I had ever been on. Over 30 hours total
                    traveling time, with one 14-hour flight over the Pacific Ocean to Tokyo, which by the way had
                    the fastest wifi I had ever witnessed, and this is airport wifi so that earns it even more stars
                    in my book. The constant flying and living in airplanes/airports was a grueling start to an otherwise spectacular trip.
                    Arriving in Saigon (Ho Chi Minh City), during morning time made the city feel bustling and full of exciting
                    places and food to discover, which it absolutely delivered on. Later in the trip, experiencing Ha Long Bay
                    via river or bay? cruise ship was the most beautiful sight I have ever seen. The mountains covered in
                    rainforest jutted out of the sea in all directions. Hidden caves, wild animals, and makeshift houses
                    floating on the bay gave it an ancient, ethereal atmosphere that I desperately hope to experience
                    more times in my life.
                    <br />
                    <br />
                    I highly recommend Vietnam to any person seeking adventure. See it through my lens below:
                </Section>
                <Section delay={0.6}>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={halongbay} alt="Ha Long Bay" className="grid-item-thumbnail" />
                    </Box>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                    </Box>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                    </Box>
                </Section>
            </Container>
        </Layout>

    )
}

export default Vietnam