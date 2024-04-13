import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue, useColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`
const Logo = () => {
    const { colorMode } = useColorMode();
    const isDarkMode = colorMode === "dark";
    const catLogo = isDarkMode
        ? "/images/white-kat.png"
        : "/images/black-kat.png";
    return (
        <Link href="/">
            <LogoBox>
                <Image src={catLogo} width={20} height={20} alt="logo" />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c'
                    fontWeight='bold'
                    ml={3}>Katelyn Kunzmann</Text>
            </LogoBox>
        </Link>
    )
}

export default Logo