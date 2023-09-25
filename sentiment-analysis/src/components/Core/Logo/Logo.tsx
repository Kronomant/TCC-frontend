import { Flex, Text } from "@chakra-ui/react"

import Balancer from 'react-wrap-balancer'

import * as S from './Logo.style'

export const Logo = () => (
  <Flex flexDir='column' justifyContent='center' gap='24px'>
    <S.Logo fontWeight='semiBold' textAlign='center'>OSÍRIS</S.Logo>
    <Text fontSize='4xl' textAlign='center' color='white'>
      <Balancer>
      Sentiment Analysis < br /> with Artificial Intelligence
      </Balancer> 
    </Text>
  </Flex>
  )