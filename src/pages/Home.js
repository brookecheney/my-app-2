import React, { useContext, useEffect } from "react";
import { Link, } from 'react-router-dom'
import { Box, Grid, Text, Image } from '@chakra-ui/react';
import { ShopContext } from "../context/shopContext";
import Hero from "../components/Hero";
import ImageWithText from "../components/ImageWithText";
import myImage from "./blackbow.png";
import RichText from "../components/RichText";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  console.log(products)
  if (!products) return <div>Loading...</div>;
  return (
    <Box>
      <Hero/>
      <RichText
      heading="The fun you've been waiting for."
      text="Our Brookies Bows are fun, inexpensive, and unique."
      />
        <Grid templateColumns="repeat(3, 1fr)">
      {
      products.map(product => (
        <Link to={`/products/${product.handle}`} key={product.id}>
            <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative">
            <Image src={product.images[0].src}/>
            <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
            {product.title}
            </Text>
            <Text position="absolute" bottom="5%" w="100%" color="gray.500">
           ${product.variants[0].price}
            </Text>
            </Box>
        </Link>
      ))
      }
      </Grid>
      <RichText
      heading="Treat yourself!"
      />
      <ImageWithText image={myImage} heading="Heading" text="l this mistaken
       idea of denouncing pleasure and praising pain was born and I will 
       give you a complete account of the system, and expound the actual 
       teachings of the great explorer of the truth, the master-builder of
        human happiness. No one rejects, dislikes, or avoids pleasure itself, 
        because it is pleasure, but because those who do not know how to pursue 
        pleasure rationally encounter consequences that are extremely painful. 
 
        exercise, except to obtain some advantage from it? But who has any right
         to find fault with a man who chooses to enjoy a pleasure that has no annoying
          consequences, or one who avoids a pain that produces no resultant pleasure"/>
                <ImageWithText reverse image={myImage} heading="Heading" text="l this mistaken
       idea of denouncing pleasure and praising pain was born and I will 
       give you a complete account of the system, and expound the actual 
       teachings of the great explorer of the truth, the master-builder of
        human happiness. No one rejects, dislikes, or avoids pleasure itself, 
        because it is pleasure, but because those who do not know how to pursue 
        pleasure rationally encounter consequences that are extremely painful. 
 
        exercise, except to obtain some advantage from it? But who has any right
         to find fault with a man who chooses to enjoy a pleasure that has no annoying
          consequences, or one who avoids a pain that produces no resultant pleasure"/>
    </Box>
  );
};

export default Home;
