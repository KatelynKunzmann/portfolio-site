import { Box } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"

const RoundedBox = ({ label }) => {
    const bgColor = useColorModeValue("#e9e8ec", "#121c38");
    const textColor = useColorModeValue("#444444", "theme_colors.sky_blue");
    const boxShadowColor = useColorModeValue("#d7d4dc", "#1a233f");
    return (
        <Box
            borderRadius="lg"
            color={textColor}
            bg={bgColor}
            outline="none"
            boxShadow={`0 2px 2px 0 inset ${boxShadowColor}`}
            maxWidth="fit-content"
            padding="4px"
            margin="2px"
        >
            {label}
        </Box >
    )
}

export default RoundedBox