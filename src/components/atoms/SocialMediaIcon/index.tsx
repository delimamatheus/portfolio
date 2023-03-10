import { Box, Icon } from "@chakra-ui/react"
import { SocialMediaProps } from "../../../interface/atoms/ISocialMediaIcon"

const SocialMediaIcon = ({ 
    icon 
}: SocialMediaProps) => {
    return (
        <>
            <Box>
              <Icon color='white' as={icon} />
            </Box>
        </>
    )
}

export default SocialMediaIcon