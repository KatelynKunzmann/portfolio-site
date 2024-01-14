import Logo from './logo'
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
    IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ children, to = "/", ...rest }) => {
    return (
        <Box
            _hover={{
                color: "dark_gray",
                bg: "light_green",
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
        <Flex
            position="fixed"
            as="nav"
            w="100%"
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
                    <LinkItem to="/blog">Blog</LinkItem>
                    <LinkItem to="/ventures">Ventures</LinkItem>
                </Stack>
                <Box>
                    <ThemeToggleButton />
                </Box>
                <Box flex={1} align="right" ml={2} display={{ base: 'inline-block', md: 'none' }}>

                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem as='a' href="/" _hover={{ color: "dark_gray", bg: "light_green", borderRadius: '3' }}>About</MenuItem>
                            <MenuItem as='a' href="/experience" _hover={{ color: "dark_gray", bg: "light_green", borderRadius: '3' }}>Experience</MenuItem>
                            <MenuItem as='a' href="/blog" _hover={{ color: "dark_gray", bg: "light_green", borderRadius: '3' }}>Blog</MenuItem>
                            <MenuItem as='a' href="/ventures" _hover={{ color: "dark_gray", bg: "light_green", borderRadius: '3' }}>Ventures</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Container>
        </Flex>
    )
}
export default Navbar