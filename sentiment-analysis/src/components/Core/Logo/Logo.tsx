import { Flex, Text } from "@chakra-ui/react"

import Balancer from "react-wrap-balancer"

import * as S from "./Logo.syle.ts"

export const Logo = () => (
  <Flex flexDir="column" justifyContent="center" gap="24px">
    <S.Logo fontWeight="semiBold" textAlign="center">
      OSÍRIS
    </S.Logo>
    <S.subTitle fontSize="4xl">
      <Balancer>
        Sentiment Analysis <br /> with Artificial Intelligence
      </Balancer>
    </S.subTitle>
  </Flex>
)
