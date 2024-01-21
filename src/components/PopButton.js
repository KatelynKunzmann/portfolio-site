import { Button, Link, useColorModeValue } from "@chakra-ui/react"


export const PopButton = ({ label, id }) => {
    return (
        <Button
            border={useColorModeValue('2px solid #1a1333', '2px solid #64ffda')}
            borderRadius='md'
            padding='1.25rem 1.75rem'
            bg={useColorModeValue('#081527', 'transparent')}
            color='theme_colors.evergreen'
            px={4}
            h={8}
            _hover={{
                outline: "none",
                boxShadow: '5px 5px 0 0 #5cdb95',
                transform: "translate(-5px, -5px)",
            }}
        >
            <Link href={`/${id}`}
                style={{ textDecoration: 'none' }}
                color={useColorModeValue('theme_colors.light_green', 'theme_colors.evergreen')}>
                {label}
            </Link>

        </Button >
    )
}
