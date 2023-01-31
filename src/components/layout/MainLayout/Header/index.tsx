import { Flex, Box, Center, Text } from '@chakra-ui/layout'
import { BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface HeaderProps extends BoxProps {
  children: ReactNode;
}

export function Header( { children }: HeaderProps) {
  return (
    <Center as='header'>
      <Box w='90%'>
        <Center bgColor='black' boxShadow='lg' borderBottomRadius='10px' opacity='40%' h='80px'>
          <Flex w='100%' alignItems={'center'}>
              {/* <Text fontSize={'36px'}>HEADER</Text> */}
              {children}
          </Flex>
        </Center>
      </Box>
    </Center>
  )
}
