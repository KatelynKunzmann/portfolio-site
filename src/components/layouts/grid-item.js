import Image from 'next/image'
import styled from 'styled-components';
import { Box, Text, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'
import { Global } from '@emotion/react'

const StyledLinkWrapper = styled.div`

`;

export const GridItem = ({ children, href, title, thumbnail }) => (
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

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box width="100%" align="center" mt={4} mb={4}>
        <StyledLinkWrapper>
            <LinkBox
                cursor="pointer"
                borderRadius="lg"
                _hover={{
                    bg: useColorModeValue('theme_colors.mint_green', 'theme_colors.midnight_blue'),
                    opacity: 0.75,
                    shadow: 'md',
                    transitionDuration: '0.3s',
                    transitionTimingFunction: "ease-in-out"
                }}>
                <Image src={thumbnail} alt={title} className="grid-item-thumbnail" />
                <LinkOverlay href={`/ventures/${id}`}>
                    <Text mt={2} fontSize={22} fontWeight="bold">
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </StyledLinkWrapper>
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


