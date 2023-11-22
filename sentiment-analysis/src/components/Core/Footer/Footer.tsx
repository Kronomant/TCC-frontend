import * as S from "./Footer.style"

import { Image, Text, Flex } from "@chakra-ui/react"

export const Footer = () => (
  <S.Container>
    <S.Cover />
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      zIndex={5}
      gap="16px"
    >
      <Image w="190px" height="150px" src="/src/assets/logo-puc-minas.png" />
      <Flex w="70%">
        <Text fontSize="sm" fontWeight="thin" color="white">
          Social networks provide an environment where individuals feel
          comfortable expressing diverse opinions, which may or may not receive
          a positive reception. However, achieving an impartial and accurate
          analysis of the network's opinions is difficult due to the tendency of
          social networks to create bubbles of similar opinions, leading to
          polarization and the formation of digital tribes where opinions are
          constantly reaffirmed. Thus, having a tool that can impartially
          analyze the network's reception over a period of time regarding a
          specific subject, theme, discussion, or person could be essential for
          those involved and the topics being discussed.
        </Text>
      </Flex>
    </Flex>
  </S.Container>
)
