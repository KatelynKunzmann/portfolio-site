import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/layouts/grid-item'
import Paragraph from './paragraph'
const Gems_and_minerals = () => {
    return (
        <Container>
            <Section delay={0.4} id='gems_and_minerals'>
                <Heading as="h3" fontSize={28} mt={8}>
                    Gems & Minerals
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <WorkGridItem id="gems_minerals">
                        Currently collecting...
                    </WorkGridItem>
                </SimpleGrid>
                <Paragraph>
                    Certainly! Here are three paragraphs of Lorem Ipsum filler text:

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat, nulla id posuere fermentum, orci mi feugiat lectus, non consectetur libero risus id mauris. Sed commodo, elit vel dapibus aliquam, justo ex consectetur eros, non tempus odio mi a libero. Vivamus eget urna non purus iaculis hendrerit id eget justo. Duis dapibus tincidunt massa, at rhoncus elit tincidunt eu.

                    Proin pulvinar nisi id lacus gravida tincidunt. Curabitur nec fringilla ex. Mauris vulputate vel nulla nec tincidunt. Nullam auctor eu odio id pellentesque. Fusce ut felis ut tellus efficitur fermentum. Ut congue tellus nec dolor facilisis, ac cursus mi suscipit. Phasellus vel turpis id urna blandit tempor.

                    Aliquam erat volutpat. Nunc id metus nec velit convallis venenatis. Integer nec bibendum elit. Maecenas sit amet justo vel ligula ullamcorper fringilla. Sed venenatis quam nec arcu congue, at varius felis ullamcorper. Sed ut dapibus ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ut odio vitae dui vestibulum auctor.
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Gems_and_minerals