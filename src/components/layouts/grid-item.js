import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'


const GridItem = ({ children, href, title, thumbnail }) => (
    <Box width="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                loading='lazy'
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const GlossyBox = ({ children, id, title, thumbnail }) => (
    <Box width="100%" align="center" mt={4} mb={4} borderRadius="lg"
        _hover={{
            color: useColorModeValue("#484848", "theme_colors.sky_blue"),
            bg: useColorModeValue("#cbc7d0", "#121c38"),
            outline: "none",
            boxShadow: '0 2px 0 0 inset ' + useColorModeValue("#d7d4dc", "#1a233f"),
            transform: "translate(-1px, -1px)",
            transition: "transform 0.2s ease-in-out"
        }}
    >
        <LinkBox
            cursor="pointer"
            borderRadius="lg"
            padding='1.25rem 1rem'
            bg='transparent'
        >
            <Image src={thumbnail} alt={title} className="grid-item-thumbnail" />
            <LinkOverlay href={`/ventures/${id}`}>
                <Text mt={2} fontSize={22} fontWeight="bold">
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box >
)

export const GridItemStyle = () => (
    <Global styles={`
    .grid-item-thumbnail {
        border-radius: 12px;
    }
    `}
    />
)

export default GridItem
