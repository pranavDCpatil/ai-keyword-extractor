import React from 'react'
import { useState } from 'react'
import { Container, Box } from '@chakra-ui/react'
import Header from './components/Header'
import Footer from './components/Footer'
import TextInput from './components/TextInput'
import KeywordsModal from './components/KeywordsModal'

const App = () => {

  //info: GLOBAL STATE
  const [keywords, setKeywords] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  //info: Actual function that is gonna extract the  keywords from the given input
  const extractKeywords = async (text) => {
    setLoading(true)
    setIsOpen(true)

    //info: The instructions which are to be sent to the OpenAI API
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n' + text + '',
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8
      })
    }

    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options)

    const json = await response.json()

    const data = json.choices[0].text.trim()

    console.log(data);
    setKeywords(data)
    setLoading(false)
  }


  //info: To close the Modal
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Box bg='cyan.600' color='white' height='100vh' paddingTop={130} >
      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordsModal keywords={keywords} loading={loading} isOpen={isOpen} closeModal={closeModal} />
    </Box>
  )
}

export default App