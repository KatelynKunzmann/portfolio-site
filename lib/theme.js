import { extendTheme } from "@chakra-ui/react"


const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'",
    body: "'M PLUS Rounded 1c'",
}
const colors = {
    cool_blue: "#05386b",
    pale_green: "#379683",
    evergreen: "#5cdb95",
    light_green: "#8ee4af",
    pale_white: "#edf5e1",
    dark_gray: "#282828"
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

const theme = extendTheme({
    components,
    fonts,
    colors,
    config
})

export default theme