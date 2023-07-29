import React from 'react'
import { Box, Image, Text, Flex } from '@chakra-ui/react'
import logo from '../assets/openai.png'

const Footer = () => {
  return (
   <Box marginTop={50}>
    <Flex justifyContent='center' alignItems='center'>
        <Image src={logo} marginRight={1} />
        <Text>
            Powered by Open AI & Created By Pranav D.C. Patil
        </Text>
    </Flex>
   </Box>
  )
}

export default Footer