import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";
import { ShopContext } from "../context/shopContext";
import Hero from "../components/Hero";
import ImageWithText from "../components/ImageWithText";
import myImage from "./blackbow.png";
import myImage2 from "./blackbow_29.png";
import RichText from "../components/RichText";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  console.log(products);
  if (!products) return <div>Loading...</div>;
  return (
    <Box>
      <Hero />
      <RichText
        heading="The fun you've been waiting for."
        text="Our Brookies Bows are fun, inexpensive, and unique."
      />
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}>
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box
              _hover={{ opacity: "80%" }}
              textAlign="center"
              position="relative"
            >
              <Image src={product.images[0].src} />
              <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
                {product.title}
              </Text>
              <Text position="absolute" bottom="5%" w="100%" color="gray.500">
                ${product.variants[0].price}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
      <RichText heading="Treat yourself!" />
      <ImageWithText
        image={myImage}
        heading="Heading"
        text="Hair bows have been worn since the 17th century. During the 17th and 18th centuries men and women used them with their wigs, with men tying their longer hair in the back with a bow."
      />
      <ImageWithText
        reverse
        image={myImage2}
        heading="Heading"
        text="The hair bow was originally gender-specific to adult males in Europe throughout the 1700s when men adorned their hair with bows to show they were prosperous and extravagant. Women also wore extravagant hairstyles, but these did not often feature hair bows; rather large ornaments and jewels were preferred. "
      />
    </Box>
  );
};

export default Home;
