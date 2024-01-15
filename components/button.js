import { Box, Button, useColorModeValue } from "@chakra-ui/react";

const SlideButton = ({ children }) => {
    const bgColor = useColorModeValue("teal.500", "teal.300");
    const hoverColor = useColorModeValue("teal.300", "teal.100");

    return (
        <Button
            position="relative"
            overflow="hidden"
            background={bgColor}
            transition="background 0.3s ease"
            _hover={{
                background: hoverColor,
                "& > div": { left: "90%" },
            }}
        >
            <Box position="relative" zIndex={1}>
                {children}
            </Box>
            <Box
                position="absolute"
                top={0}
                left={-2}
                bottom={0}
                width="100%"
                backgroundColor={hoverColor}
                transition="left 0.3s ease"
            />
        </Button>
    );
};

export default SlideButton;
