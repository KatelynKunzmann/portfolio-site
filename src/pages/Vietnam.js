import { Container, Heading, Box, Link, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layouts/Article'
import halongbay from '../../public/images/travel/vietnam/halongbay.jpeg'
import vietcoffee from '../../public/images/travel/vietnam/vietcoffee.jpeg'
import vietwalkstreet from '../../public/images/travel/vietnam/walkingstreet.jpeg'
import bunbohue from '../../public/images/travel/vietnam/bunbohue.jpeg'
import vietcafe from '../../public/images/travel/vietnam/viet_cafe.jpeg'
import coffee_beans from '../../public/images/travel/vietnam/coffee_beans.jpeg'
import viet_house from '../../public/images/travel/vietnam/viet_house.jpeg'
import bitexco from '../../public/images/travel/vietnam/bitexco.jpeg'
import aodai from '../../public/images/travel/vietnam/aodai.jpeg'
import viet_apt from '../../public/images/travel/vietnam/viet_apt.jpeg'
import apt from '../../public/images/travel/vietnam/apt.jpeg'
import pink_church from '../../public/images/travel/vietnam/pink_church.jpeg'
import door1 from '../../public/images/travel/vietnam/door1.jpeg'
import door2 from '../../public/images/travel/vietnam/door2.jpeg'
import door3 from '../../public/images/travel/vietnam/door3.jpeg'
import door4 from '../../public/images/travel/vietnam/door4.jpeg'
import buddhist_temple from '../../public/images/travel/vietnam/buddhist_temple.jpeg'
import staff from '../../public/images/travel/vietnam/staff.jpeg'
import tub from '../../public/images/travel/vietnam/tub.jpeg'
import coffee_view from '../../public/images/travel/vietnam/coffee_view.jpeg'
import halongbay2 from '../../public/images/travel/vietnam/halongbay2.jpeg'
import restaurant from '../../public/images/travel/vietnam/restaurant.jpeg'
import dinner from '../../public/images/travel/vietnam/dinner.jpeg'
import flight from '../../public/images/travel/vietnam/flight.jpeg'

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
                    traveling time, with one 14-hour flight over the Pacific Ocean to Tokyo. The constant flying and living in airplanes/airports was a grueling start to an otherwise spectacular trip.
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
                        <video controls className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65}
                            src={"/images/travel/vietnam/Viet00.mp4"}
                            type="video/mp4"
                            style={{ width: "500px", height: "600px" }}
                        />
                        Driving through Saigon (Ho Chi Minh City)
                    </Box>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={bunbohue} alt="Bun Bo Hue" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        Bún Bò Huế - my breakfast every day. It is a spicy beef noodle soup, miles better than Pho in my opinion.
                    </Box>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={vietcoffee} alt="Vietnamese Coffee" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        Homemade Vietnamese Coffee
                        <br />
                        Vietnamese coffee is unique because it is typically made with Robusta beans, not Arabica.
                    </Box>
                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={vietwalkstreet} alt="Bui Vien Walking Street" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        {' '}
                        <Link href="https://www.youtube.com/watch?v=_RbiFq6PMZY" isExternal color={useColorModeValue("theme_colors.dark_purple", "theme_colors.purplish")}
                            fontWeight="bold" _hover={{ color: "theme_colors.lavendar" }}>Phố đi bộ Bùi Viện</Link>
                        <br />
                        Bùi Viện Walking Street in Saigon
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={vietcafe} alt="Stocking Vietnamese Cafe" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        {' '}
                        <Link href="https://oivietnam.com/2016/03/stocking-coffee/" isExternal color={useColorModeValue("theme_colors.dark_purple", "theme_colors.purplish")}
                            fontWeight="bold" _hover={{ color: "theme_colors.lavendar" }}>Traditional Stocking Coffee</Link>
                        <br />
                        Coffee filtered through a cotton stocking and spoon net filter
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={coffee_beans} alt="Coffee Beans" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        {' '}
                        <Link href="https://en.wikipedia.org/wiki/Kopi_luwak" isExternal color={useColorModeValue("theme_colors.dark_purple", "theme_colors.purplish")}
                            fontWeight="bold" _hover={{ color: "theme_colors.lavendar" }}>Civet Coffee Beans</Link>
                        <br />
                        Different types of coffee beans made from partially digested coffee cherries, which have been eaten and defecated by different types of small mammals,
                        such as civets, ferrets, squirrels, and weasels.
                        <br />
                        Yes, I bought some and tried it. Delicious, only difference I could tell was more oils on the beans and in the coffee.
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={viet_house} alt="Typical Vietnam house" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        Typical Vietnam house
                        <br />
                        I adored the architecture, every house was unique
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={bitexco} alt="Bitexco Financial Tower" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        {' '}
                        <Link href="https://en.wikipedia.org/wiki/Bitexco_Financial_Tower" isExternal color={useColorModeValue("theme_colors.dark_purple", "theme_colors.purplish")}
                            fontWeight="bold" _hover={{ color: "theme_colors.lavendar" }}>Bitexco Financial Tower</Link>
                        <br />
                        Second tallest skyscraper in Saigon. Inspired by Vietnam&apos;s national flower, the Lotus
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={aodai} alt="Ao Dai" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        {' '}
                        <Link href="https://localvietnam.com/blog/ao-dai-museum/" isExternal color={useColorModeValue("theme_colors.dark_purple", "theme_colors.purplish")}
                            fontWeight="bold" _hover={{ color: "theme_colors.lavendar" }}>Áo Dài</Link>
                        <br />
                        Traditional Vietnamese garment
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={viet_apt} alt="Beautifully designed apartments" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        More architecture appreciation
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={apt} alt="More beautifully designed apartments" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        More architecture appreciation
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={pink_church} alt="Pink Church" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        {' '}
                        <Link href="https://en.wikipedia.org/wiki/T%C3%A2n_%C4%90%E1%BB%8Bnh_Church" isExternal color={useColorModeValue("theme_colors.dark_purple", "theme_colors.purplish")}
                            fontWeight="bold" _hover={{ color: "theme_colors.lavendar" }}>Tân Định Church</Link>
                        <br />
                        Also known as The Pink Church. Catholic church built during the French colonial period in the 1870s.
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={door1} alt="Yellow door" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        Door design appreciation #1
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={door2} alt="Bronze door" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        Door design appreciation #2
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={buddhist_temple} alt="Buddhist Temple" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        Buddhist Temple
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={halongbay} alt="Ha Long Bay" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        {' '}
                        <Link href="https://nature.new7wonders.com/wonders/ha-long-bay-vietnam/" isExternal color={useColorModeValue("theme_colors.dark_purple", "theme_colors.purplish")}
                            fontWeight="bold" _hover={{ color: "theme_colors.lavendar" }}>Ha Long Bay</Link>
                        <br />
                        One of the 7 wonders of the world
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={staff} alt="Staff" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        The Aspira cruise staff greeting us
                        <br />
                        Very friendly staff with the best service for the entire 2 day trip in Ha Long Bay
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <video controls className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65}
                            src={"/images/travel/vietnam/room.mp4"}
                            type="video/mp4"
                            style={{ width: "500px", height: "600px" }}
                        />
                        Our room
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <video controls className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65}
                            src={"/images/travel/vietnam/deck.mp4"}
                            type="video/mp4"
                            style={{ width: "500px", height: "600px" }}
                        />
                        View from our deck
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={tub} alt="Tub" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        Jet tub with wide window view
                        <br />
                        If I could, I&apos;d stay in here until I shriveled to a raisin
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={coffee_view} alt="Coffee view" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        Enjoying life&apos;s simple pleasures with Mother Nature
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <video controls className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65}
                            src={"/images/travel/vietnam/cave.mp4"}
                            type="video/mp4"
                            style={{ width: "500px", height: "600px" }}
                        />
                        Kayaking through one of the caves in Ha Long Bay
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <video controls className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65}
                            src={"/images/travel/vietnam/topdeck.mp4"}
                            type="video/mp4"
                            style={{ width: "500px", height: "600px" }}
                        />
                        360 degree view from the top deck
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={halongbay2} alt="Ha long bay" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        So long Ha Long
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={restaurant} alt="Beautiful restaurant" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        Large family style restaurant
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={dinner} alt="Family style dinner" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        Family dinner
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={door3} alt="White intricate door" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        Door design appreciation #3
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={door4} alt="Wooden door" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        Door design appreciation #4
                    </Box>

                    <Box align="center" mt={4} mb={4} padding='1.25rem 1rem'>
                        <Image src={flight} alt="Flight path" className="grid-item-thumbnail" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={65} />
                        First leg of flight, arriving in Tokyo.
                        <br />
                        All in all, it was a 10/10 vacation. The food, hospitality, overall safety, and nature was top-notch. We only stayed in Saigon and Ha Long Bay. I already am making plans to go back and see the rest
                        of Vietnam, since there is so much more to explore.
                    </Box>

                </Section>
            </Container>
        </Layout>

    )
}

export default Vietnam