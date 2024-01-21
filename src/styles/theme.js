import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#f4f0e9', '#1a202c')(props)
        }
    })
}
const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: 'theme_colors.evergreen',
                textDecorationThickness: 4,
                marginTop: 4,
                marginBottom: 4
            }
        }
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c', 'sans-serif'",
    body: "'M PLUS Rounded 1c', 'sans-serif'",
}

const colors = {
    theme_colors: {
        midnight_blue: "#1a1333",
        cool_blue: "#05386b",
        sky_blue: "#87ceeb",
        pale_green: "#379683",
        evergreen: "#5cdb95",
        light_green: "#8ee4af",
        mint_green: "#a5e6a7",
        pale_white: "#edf5e1",
        dark_gray: "#282828",
        slate_gray: "#718093",
        purplish: "#bf00ff",
        dark_purple: "#7a00b4",
        lavendar: "#b877db",
        coral_pink: "#ff6b6b",
        soft_yellow: "#fff9c4",

    }
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

const theme = extendTheme({
    styles,
    components,
    fonts,
    colors,
    config,
})

export default theme