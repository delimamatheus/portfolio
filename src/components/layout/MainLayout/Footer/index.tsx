import { Center, Flex, Grid, GridItem, Text, Box } from '@chakra-ui/layout'

export function Footer() {
  return (
    <Center as='footer'>
      <Box        
        display={'flex'}
        flexDirection='row'
      >
        <Text>
          Powered by <Text as='b'>Matheus de Lima</Text>
        </Text>        
      </Box>
    </Center>
  )
}
