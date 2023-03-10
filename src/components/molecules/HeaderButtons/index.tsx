import { Box } from "@chakra-ui/react"
import Button from "../../atoms/Button"

const HeaderButtons = () => {
    return (
        <>
            <Box w='60%' display='flex' flexDirection='row' justifyContent='center'>
                <Button text='Início' />
                <Button text='Sobre Mim' />
                <Button text='Serviços' />
                <Button text='Portfólio' />
                <Button text='Contato' />            
          </Box>
        </>
    )
}

export default HeaderButtons