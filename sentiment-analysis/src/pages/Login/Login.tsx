import { useState } from "react"

import { Flex, Image } from "@chakra-ui/react"
import * as S from "./Login.style"

import { SignUpSection } from "components/Login/SignUpSection"
import { LoginSection } from "components/Login/LoginSection"
import AuthProvider from "context/Auth/Auth.context"

const Login = () => {
  const [showSign, setShowSign] = useState<boolean>(false)

  return (
    <AuthProvider>
      <S.Container>
        {showSign && <SignUpSection setShowSign={setShowSign} />}
        {!showSign && <LoginSection setShowSign={setShowSign} />}

        <Flex
          borderRadius="48px 0 0 48px"
          backgroundColor="#DADEE0"
          justifyContent="start"
          w="45%"
          height="100vh"
        >
          <Image
            w="100%"
            objectFit="cover"
            borderRadius="48px 0 0 48px"
            src="/public/login.jpg"
          />
        </Flex>
      </S.Container>
    </AuthProvider>
  )
}

export default Login
