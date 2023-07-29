import React from 'react'
import { useState } from 'react'
import { Textarea, Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState('')

  //info: Toast from ChakraUI 
  const toast = useToast()

  //info: The function that's gonna validate if the given input is empty or not. If not, it'll run the extraction of the keywords.
  const submitText = () => {
    if(text === '') {
        toast({
            title: 'Text field is empty',
            description: 'Please enter some text to extract keywords',
            status: 'error',
            duration: 5000,
            isClosable: false
        })
    } else {
        extractKeywords(text);
    }
  }

  return (
    <>
        <Textarea
            bg='cyan.400'
            color='white'
            fontWeight='400'
            padding={4}
            marginTop={6}
            height={200}
            value={text}
            onChange={ (e) => setText(e.target.value) }
        />

        <Button
            bg='cyan.500'
            color='white'
            marginTop={4}
            width='100%'
            _hover={{ bg: 'cyan.700' }}
            onClick={ submitText }
        >
            Extract Keywords
        </Button>
    </>
  )
}

export default TextInput