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
            text="The hair bow was originally gender-specific to adult males in Europe throughout the 1700s when men adorned their hair with bows to show they were prosperous and extravagant.

            Women also wore extravagant hairstyles, but these did not often feature hair bows; rather large ornaments and jewels were preferred.
            
            After the French Revolution extravagance in dress and hairstyle was frowned upon and hair bows were rarely worn. By the 1800s it became common for male children to wear hair bows tying hair at the nape of the neck.
            
            Women throughout the 19th century wore hair ornaments and hats, but the hair bow only really achieved widespread popularity in the 20th century before the second world war"
          />
        </Flex>
      </Grid>
    </Box>
  );
};

export default About;
