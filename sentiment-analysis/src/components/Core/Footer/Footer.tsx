import * as S from './Footer.style'

import { Image, Text, Flex } from '@chakra-ui/react'

export const Footer = () => (
  <S.Container>
    <Image w='200px' height='150px'  src='/src/assets/logo-puc-minas.png' />
    <Flex w='40%'>
    <Text fontSize='md' color='white'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias architecto, corrupti laboriosam tempore fuga officia quasi suscipit aspernatur? Delectus, magni a praesentium magnam dignissimos explicabo quo. At sequi consectetur reiciendis!</Text>
    </Flex>
  </S.Container>
  )