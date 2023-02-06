import { Flex, Box, Center, Text } from '@chakra-ui/layout'
import { BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface HeaderProps extends BoxProps {
  children: ReactNode;
}

export function Header( { children }: HeaderProps) {
  return (
    <Center as='header' position='absolute' w='100%'>
      <Box w='90%'>
        <Flex w='100%' alignItems={'center'} bgColor='black' boxShadow='lg' borderBottomRadius='10px' opacity='40%' h='80px'>
            {children}
        </Flex>
      </Box>
    </Center>
  )
}
