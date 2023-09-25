import { Flex, Text } from "@chakra-ui/react";
import { Balancer } from "react-wrap-balancer";

export const PrimeCard = () => (
  <Flex 
    flexDir='column' 
    alignItems='center' 
    padding='24px' 
    width='350px' 
    height='600px' 
    backgroundColor='white'
    gap='16px'
    zIndex={9}
    boxShadow={'-18px 29px 0px 0px rgba(0,0,0,0.16)'}
  >
    <Flex width='100%' height='250px' backgroundColor='blue.400' />
    <Text fontSize='2xl' fontWeight='semibold'>Real Time Analysis</Text>
    <Text fontSize='md'>
      <Balancer>
        Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Porro dignissimos, vel doloribus esse 
        modi placeat accusantium ut nisi maxime quo eos dicta ea illo 
        repellat aut non amet praesentium fuga?
      </Balancer>
    </Text>
  </Flex>
  
  )