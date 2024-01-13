import Logo from './logo'
import {
    Text,
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

const LinkItem = ({ children, to = "/", ...rest }) => {
    return (
        <Box>
            <Link href={to} p={6} {...rest}>
                {children}
            </Link>
        </Box>

    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Flex
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
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
                    direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem to="/about">About</LinkItem>
                    <LinkItem to="/experience">Experience</LinkItem>
                    <LinkItem to="/blog">Blog</LinkItem>
                    <LinkItem to="/ventures">Ventures</LinkItem>
                </Stack>

                <Box flex={1} align="right" ml={2} display={{ base: 'inline-block', md: 'none' }}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                        />
                        <MenuList>
                            <MenuItem as='a' href="/about">About</MenuItem>
                            <MenuItem as='a' href="/experience">Experience</MenuItem>
                            <MenuItem as='a' href="/blog">Blog</MenuItem>
                            <MenuItem as='a' href="/ventures">Ventures</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Container>
        </Flex>
    )
}
export default Navbar