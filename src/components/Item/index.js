import React from 'react'
import { VStack,Button,Text, Image } from '@chakra-ui/react'

const Item = ({product}) => {
    console.log(product)
  return (
  
    <VStack boxShadow='lg' p='6' rounded= 'md' bg ='white' m ="15px" minWith="275p" maxW='550px'>
        <Image src={product.image} alt = {product.product} w ="100px"/>
        <Text>{product.product}</Text>
        <Text>${product.price}</Text>
        <Button colorSchame = 'red' size ='xs'>
            <link> ver detalle </link>
        </Button>
    </VStack>
  )
}

export  {Item}