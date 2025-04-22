import React from 'react'
import { Button, Stack, Flex } from "@chakra-ui/react"
import { useState } from 'react'

const App = () => {
  const [loading, setLoading] = useState(false)

  const handleClick = () =>{
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }
  
  return (
    <Flex 
      width="100%" 
      height="100vh" 
      justifyContent="center" 
      alignItems="center"
      backgroundColor="gray.200"
    >
      <Stack direction="row" gap="4" align="center">
        <Button 
        onClick={() => handleClick()} 
        loading={loading}
        variant={"subtle"}
        >Click me</Button>
      </Stack>
    </Flex>
  )
}

export default App