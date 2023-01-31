import { Flex, Box, Center, Text } from '@chakra-ui/layout'

export function Header() {
  return (
    <Box as='header' boxShadow='lg'>
      <Center bgColor='cinza.700' h='50px'>
        <Flex w='100%' justifyContent='center'>
            <Text fontSize={'36px'}>HEADER</Text>
        </Flex>
      </Center>
    </Box>
  )
}
