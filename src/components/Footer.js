import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, Image, VStack } from '@chakra-ui/react'
import myImage from "./brookiesbows.png";
function Footer() {
  return (
    <Box backgroundColor="#8F00FF">
        <Grid templateColumns={["repear(1, 1fr)","repeat(3, 1fr)"]} color="white" fontWeight="bold">
        <Image src={myImage}/>
        <VStack p="2rem">
            <Link to="/">About</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Contact</Link>
        </VStack>
        <VStack p="2rem">
            <Link to="/">Twitter</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
        </VStack>
        </Grid>
        <Box>
            <Text textAlign="center" color="white" w="100%" borderTop="1px solid white" p="1rem">
                Copyright www.workingwithshopify.com
            </Text>
        </Box>
    </Box>
  )
}

export default Footer
