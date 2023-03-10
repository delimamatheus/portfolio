import { Box, Text } from "@chakra-ui/react"
import { ButtonProps } from "../../../interface/atoms/IButton"

const Button = ({
    text
}: ButtonProps) => {
    return (
        <>
            <Box as='button' w='120px'>
              <Text color='white' fontSize={'20px'} textAlign='center'>{text}</Text>
            </Box>
        </>
    )
}

export default Button