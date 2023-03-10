import { Flex, Box, Center, Text } from '@chakra-ui/layout'
import { BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Logo from '../../atoms/Logo';
import HeaderButtons from '../../molecules/HeaderButtons';
import SocialMedias from '../../molecules/SocialMedias';

export function MainHeader() {
  return (
    <Center as='header' position='absolute' w='100%'>
      <Box w='90%'>
        <Flex w='100%' alignItems={'center'} bgColor='black' boxShadow='lg' borderBottomRadius='10px' opacity='40%' h='80px'>            
            <Logo />
            <HeaderButtons />
            <SocialMedias />
        </Flex>
      </Box>
    </Center>
  )
}
