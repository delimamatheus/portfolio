import { Box, Center, Fade, Image, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { MainLayout } from '../layout/MainLayout'
import { AnimatePresence, motion } from 'framer-motion'
import { UpsideDownLayout } from '../layout/UpsideDownLayout'

export default function Home() {    

  const me = "../image/me.png"

  const [rotate, setRotate] = useState(false);

  const [upsideDown, setUpsideDown] = useState(false);  

  const changeRotate = () => {
    setTimeout(function() {
      setRotate(!rotate)
    }, 0)
  }

  const changeSide = () => {
    setTimeout(function() {
      setUpsideDown(!upsideDown)
    }, 2500)
  }

  return (
    <>
      <Head>
        <title>MTHSLM</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence>
      {/* WEB DEV */}
      {!upsideDown &&(
        <motion.div
          animate = {{ rotate: rotate ? 180 : 0 }}
          transition={{ type: "tween", duration: 5 }}
        >        
          <MainLayout>
            <Center minH='650px' bgGradient='linear(to-r, blue.900, blue.400, blue.900)'>
              <Box display='flex' flexDirection='row' alignItems='center'>
                <Box p='10%' maxW='60%'>
                  <Text as='h1' fontSize='36px' textAlign='center'>Hey, what's up</Text>
                  <Text fontSize='20px' textAlign='left'>Empresa focada em desenvolvimento de páginas Web como Landing Pages, E-Commerce e Páginas Institucionais</Text>
                  <Box as='button' onClick={() => { changeRotate(), changeSide() }}>click here</Box> 
                </Box>
                <Box pl='1%'>
                  <Image alt='Matheus de Lima' src={me} w='100%'></Image>
                </Box>                                
              </Box>
            </Center>
            <Box>

            </Box>
          </MainLayout>
        </motion.div>
      )}

      {/* GAME DEV */}
      {upsideDown &&(
        <motion.div
          animate = {{ rotate: rotate ? 180 : 0}}
          transition={{ type: "tween", duration: 5 }}      
        >        
          <UpsideDownLayout>
            <Center minH='650px' bgGradient='linear(to-r, red.900, red.400, red.900)'>
            <Box display='flex' flexDirection='row' alignItems='center'>
                <Box p='10%' maxW='60%'>
                  <Text as='h1' fontSize='36px' textAlign='center'>Hey, what's up</Text>
                  <Text fontSize='20px' textAlign='left'>Empresa focada em desenvolvimento de jogos</Text>
                  <Box as='button' onClick={() => { changeRotate(), changeSide() }}>click here</Box> 
                </Box>
                <Box pl='1%'>
                  <Image alt='Matheus de Lima' src={me} w='100%'></Image>
                </Box>                                
              </Box>
            </Center>
          </UpsideDownLayout>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  )
}
