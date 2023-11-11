import { Flex } from "@chakra-ui/react"

import Balancer from "react-wrap-balancer"

import * as S from "./Logo.syle.ts"

interface ILogo {
  hasSubTitle?: boolean
}

export const Logo = ({ hasSubTitle }: ILogo) => (
  <Flex flexDir="column" justifyContent="center" gap="24px">
    <S.Logo hasSubTitle={hasSubTitle} fontWeight="semiBold" textAlign="center">
      OSÍRIS
    </S.Logo>
    {hasSubTitle && (
      <S.subTitle fontSize="4xl">
        <Balancer>
          Sentiment Analysis <br /> with Artificial Intelligence
        </Balancer>
      </S.subTitle>
    )}
  </Flex>
)
