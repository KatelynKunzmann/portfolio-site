import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('theme_colors.dark_white', 'theme_colors.dark_navy')(props)
        }
    })
}
const components = {
    Heading: {
        variants: {
            'title': {
                marginTop: 4,
                marginBottom: 4,
                fontSize: 36,
                textDecoration: 'underline',
                textUnderlineOffset: 6,
                textDecorationColor: mode('theme_colors.dark_evergreen', 'theme_colors.evergreen'),
                textDecorationThickness: 4
            },
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: mode('theme_colors.dark_evergreen', 'theme_colors.evergreen'),
                textDecorationThickness: 4,
                marginTop: 4,
                marginBottom: 4
            },
            'paragraph-title': {
                fontSize: 22,
                marginTop: 2,
                marginBottom: 2
            },
            'date': {
                fontSize: 18,
                marginBottom: 2,
                color: mode('theme_colors.dark_evergreen', 'theme_colors.evergreen')
            },
            'subtitle': {
                fontSize: 22,
                color: mode('theme_colors.purplish', 'theme_colors.dark_purple'),
                marginTop: 2,
                marginBottom: 2
            }
        }
    }
}

const fonts = {
    heading: "'Fira Code', monospace;",
    body: "'Fira Code', monospace;",
}

const colors = {
    theme_colors: {
        light_navy: "#121c38",
        dark_navy: "#081527",
        midnight_blue: "#1a1333",
        cool_blue: "#05386b",
        sky_blue: "#87ceeb",
        pale_green: "#379683",
        evergreen: "#5cdb95",
        dark_evergreen: "#15a182",
        light_green: "#8ee4af",
        mint_green: "#64ffda",
        pale_white: "#f4f0e9",
        dark_white: "#e1dee4",
        dark_gray: "#282828",
        slate_gray: "#d4d3cf",
        light_gray: "#b9c6d2",
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