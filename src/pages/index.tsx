import { Box, Center, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../../styles/Home.module.css'
import { MainLayout } from '../layout/MainLayout'

export default function Home() {  

  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <Center>
          <Text>CONTENT HERE</Text>
        </Center>
      </MainLayout>
    </>
  )
}
