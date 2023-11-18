import { useState } from "react"

import { Flex, Image } from "@chakra-ui/react"

import { SignUpSection } from "components/Login/SignUpSection"
import { LoginSection } from "components/Login/LoginSection"
import * as S from "./Login.style"

const Login = () => {
  const [showSign, setShowSign] = useState<boolean>(false)

  return (
    <S.Container>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="50%"
        flexDir="column"
      >
        {showSign && <SignUpSection setShowSign={setShowSign} />}
        {!showSign && <LoginSection setShowSign={setShowSign} />}
      </Flex>

      <Flex
        borderRadius="48px 0 0 48px"
        backgroundColor="#DADEE0"
        justifyContent="start"
        w="45%"
        position="relative"
        height="100vh"
      >
        <S.Logo fontWeight="semibold">OSÍRIS</S.Logo>
        <Image
          w="100%"
          objectFit="cover"
          borderRadius="48px 0 0 48px"
          src="/public/fisrtCard.jpg"
        />
      </Flex>
    </S.Container>
  )
}

export default Login
