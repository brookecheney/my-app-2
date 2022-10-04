import React from "react";
import ImageWithText from "../components/ImageWithText";
import myImage from "./blackbow.png";import { Box, Grid, Flex } from "@chakra-ui/react";
const About = () => {
  return (
    <Box p="2rem">
      <Grid m="auto">
        <Flex justifyContent="center" alignItems="center">
          <ImageWithText
            image={myImage}
            heading="App Privacy Policy"
            text="https://app.termly.io/document/privacy-policy/1f637ff0-abb2-4d5a-88fe-fbce5a18235b"
            
          />
          
        </Flex>
      </Grid>
    </Box>
  );
};

export default About;
