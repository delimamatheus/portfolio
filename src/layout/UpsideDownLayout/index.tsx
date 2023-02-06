import { ReactNode } from "react";

import { Content } from "../../components/layout/UpsideDownLayout/Content";
import { Footer } from "../../components/layout/UpsideDownLayout/Footer";
import { Header } from "../../components/layout/UpsideDownLayout/Header";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithubSquare, FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa"
import { AnimatePresence, motion } from 'framer-motion'

interface UpsideDownLayoutProps {
  children?: ReactNode | ReactNode[] | string;
}

export function UpsideDownLayout({ children }: UpsideDownLayoutProps) {

  return (
    <>            
        <Box style={{transform: "rotate(180deg)"}}>
        <Header>                    
          {/* LOGO */}
          <Box w='20%' textAlign='center'>
            <Box as='button'>
              <Text fontSize={'36px'} color='white'>MTHSLM</Text>
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
        </Box>
        
    </>
  );
}
