import { BackgroundAnimation, Footer, Header, Logo } from "components"

import * as S from "./Home.style"
import { PrimeCard } from "components/Home/PrimeCard"
import { Flex } from "@chakra-ui/react"
import { SecondCard } from "components/Home/SecondCard/SecondCard"

export const Home = () => (
  <S.Container>
    <S.Wrapper>
      <BackgroundAnimation color="#141E46" />
      <Header />
      <Flex gap="32px" alignItems="center" flexDir="column">
        <Logo hasSubTitle />
        <S.subTitle fontSize="lg">Features</S.subTitle>
      </Flex>
      <Flex alignItems="center">
        <Flex flexDir="column">
          <SecondCard
            title="Compare Terms"
            content="Compare public reactions to two topics."
            image="/src/assets/fisrtCard.jpg"
          />
          <SecondCard
            title="Tag Terms"
            content="Create routines to monitoring topics"
            image="/src/assets/secondCard.jpg"
          />
        </Flex>
        <PrimeCard />
      </Flex>
    </S.Wrapper>
    <Footer />
  </S.Container>
)
