import { Box } from "@chakra-ui/react"
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa"
import SocialMediaIcon from "../../atoms/SocialMediaIcon"

const SocialMedias = () => {
    return (
        <>
            <Box w='20%' display='flex' flexDirection='row' justifyContent='center'>
                <SocialMediaIcon icon={FaLinkedin} />
                <SocialMediaIcon icon={FaGithubSquare} />
                <SocialMediaIcon icon={FaInstagramSquare} />
                <SocialMediaIcon icon={FaYoutubeSquare} />
            </Box>    
        </>
    )
    
}

export default SocialMedias