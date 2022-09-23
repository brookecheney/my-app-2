import React from "react";
import ImageWithText from "../components/ImageWithText";
import myImage from "./blackbow.png";
import { Box, Grid, Flex } from "@chakra-ui/react";
const About = () => {
  return (
    <Box p="2rem">
      <Grid m="auto">
        <Flex justifyContent="center" alignItems="center">
          <ImageWithText
            image={myImage}
            heading="About"
            text="l this mistaken
       idea of denouncing pleasure and praising pain was born and I will 
       give you a complete account of the system, and expound the actual 
       teachings of the great explorer of the truth, the master-builder of
        human happiness. No one rejects, dislikes, or avoids pleasure itself, 
        because it is pleasure, but because those who do not know how to pursue"
          />
        </Flex>
      </Grid>
    </Box>
  );
};

export default About;
