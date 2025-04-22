import React from 'react'
import { Button, ButtonGroup, Stack, Flex } from "@chakra-ui/react"

const App = () => {
  return (
    <Flex 
      width="100%" 
      height="100vh" 
      justifyContent="center" 
      alignItems="center"
      backgroundColor="gray.200"
    >
      <Stack direction="row" gap="4" align="center">
        <Button loading>Click me</Button>
        <Button loading loadingText="Saving...">
          Click me
        </Button>
        <Button colorScheme="teal">New Button</Button>
      </Stack>
    </Flex>
  )
}

export default App