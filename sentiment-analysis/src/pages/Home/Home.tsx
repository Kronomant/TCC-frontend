
import { Header, Logo } from "components"

import * as S from './Home.style'
import { PrimeCard } from "components/Home/PrimeCard"
import { Flex } from "@chakra-ui/react"
import { SecondCard } from "components/Home/SecondCard/SecondCard"

export const Home = () => (
  <S.Container >
    <S.Overlay />
    <S.Wrapper>
      <Header />
      <Logo />
      <Flex alignItems='center'>
        <Flex flexDir='column'>
          <SecondCard />
          <SecondCard />
        </Flex>
      <PrimeCard />
      </Flex>
    </S.Wrapper>
  </S.Container>
)

