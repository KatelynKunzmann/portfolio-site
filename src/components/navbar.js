import Logo from './Logo'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

export const LinkItem = ({ children, to = "/", ...rest }) => {
    return (
        <Box
            _hover={{
                color: "theme_colors.dark_gray",
                bg: "theme_colors.light_green",
                borderRadius: '5',
                shadow: 'md',
                transform: 'translateY(-5px)',
                transitionDuration: '0.2s',
                transitionTimingFunction: "ease-in-out"
            }}
            _focus={{ boxShadow: "outline" }}
        >
            <Link href={to} p={6} style={{ textDecoration: 'none' }} {...rest}>
                {children}
            </Link>
        </Box>
    )
}

const Navbar = props => {
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}>
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem to="/">About</LinkItem>
                    <LinkItem to="/experience">Experience</LinkItem>
                    <LinkItem to="/ventures">Ventures</LinkItem>
                    <LinkItem to="/blog">Blog</LinkItem>
                </Stack>

                <Box flex={1} align="right" >
                    <ThemeToggleButton />

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>

                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem as='a' href="/" _hover={{ color: "theme_colors.dark_gray", bg: "theme_colors.light_green", borderRadius: '3' }}>About</MenuItem>
                                <MenuItem as='a' href="/experience" _hover={{ color: "theme_colors.dark_gray", bg: "theme_colors.light_green", borderRadius: '3' }}>Experience</MenuItem>
                                <MenuItem as='a' href="/ventures" _hover={{ color: "theme_colors.dark_gray", bg: "theme_colors.light_green", borderRadius: '3' }}>Ventures</MenuItem>
                                <MenuItem as='a' href="/blog" _hover={{ color: "theme_colors.dark_gray", bg: "theme_colors.light_green", borderRadius: '3' }}>Blog</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Navbar