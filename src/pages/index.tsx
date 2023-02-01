import { Box, Center, Fade, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { MainLayout } from '../layout/MainLayout'
import { AnimatePresence, motion } from 'framer-motion'
import { UpsideDownLayout } from '../layout/UpsideDownLayout'

export default function Home() {    

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
        <title>Title</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence>
      {!upsideDown &&(
        <motion.div
          animate = {{ rotate: rotate ? 180 : 0 }}
          transition={{ type: "tween", duration: 5 }}
        >        
          <MainLayout>
            <Center>
              <Text>CONTENT HERE</Text>
              <Box as='button' onClick={() => { changeRotate(), changeSide() }}>click here</Box>
            </Center>
          </MainLayout>
        </motion.div>
      )}

      {upsideDown &&(
        <motion.div
          animate = {{ rotate: rotate ? 180 : 0}}
          transition={{ type: "tween", duration: 5 }}      
        >        
          <UpsideDownLayout>
            <Center>              
              <Box as='button' onClick={() => { changeRotate(), changeSide() }}>click here</Box>
            </Center>
          </UpsideDownLayout>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  )
}
