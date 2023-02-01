import { ReactNode } from "react";

import { Content } from "../../components/layout/MainLayout/Content";
import { Footer } from "../../components/layout/MainLayout/Footer";
import { Header } from "../../components/layout/MainLayout/Header";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithubSquare, FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa"
interface MainLayoutProps {
  children?: ReactNode | ReactNode[] | string;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>    
        <Header>                    
          {/* LOGO */}

          <Box w='20%' textAlign='center'>
            <Box as='button'>
              <Text fontSize={'36px'} color='white'>LOGO</Text>
            </Box>
          </Box>

          {/* Buttons */}

          <Box w='60%' display='flex' flexDirection='row' justifyContent='center'>
            <Box as='button' w='120px'>
              <Text color='white' fontSize={'20px'} textAlign='center'>Início</Text>
            </Box>
            <Box as='button' w='120px'>
              <Text color='white' fontSize={'20px'} textAlign='center'>Sobre Mim</Text>
            </Box>
            <Box as='button' w='120px'>
              <Text color='white' fontSize={'20px'} textAlign='center'>Serviços</Text>
            </Box>
            <Box as='button' w='120px'>
              <Text color='white' fontSize={'20px'} textAlign='center'>Portfólio</Text>
            </Box>
            <Box as='button' w='120px'>
              <Text color='white' fontSize={'20px'} textAlign='center'>Contato</Text>
            </Box>
          </Box>

          {/* Social Medias */}

          <Box w='20%' display='flex' flexDirection='row' justifyContent='center'>
            <Box>
              <Icon color='white' as={FaLinkedin} />
            </Box>
            <Box>
              <Icon color='white' as={FaGithubSquare} />
            </Box>
            <Box>
              <Icon color='white' as={FaInstagramSquare} />
            </Box>
            <Box>
              <Icon color='white' as={FaYoutubeSquare} />
            </Box>
          </Box>

        </Header>

        <Content>{children}</Content>

        <Footer />
    </>
  );
}
