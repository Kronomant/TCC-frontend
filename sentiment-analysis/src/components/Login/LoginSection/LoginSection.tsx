import { useState } from "react"
import {
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  Text,
  InputRightElement,
} from "@chakra-ui/react"

interface ILoginSection {
  setShowSign: React.Dispatch<React.SetStateAction<boolean>>
}

import * as S from "./LoginSection.style"
import { useAuth } from "context/Auth/Auth.context"

export const LoginSection = ({ setShowSign }: ILoginSection) => {
  const [value, setValue] = useState({ email: "", password: "" })

  const { handleAuthenticate } = useAuth()

  const [show, setShow] = useState(false)

  const handleClick = () => {
    handleAuthenticate(value.email, value.password)
  }

  return (
    <S.LoginWrapper>
      <Flex flexDir="column" w="45%" gap="16px">
        <Flex gap="4px" flexDir="column">
          <Text fontSize="3xl">Welcome back</Text>
          <Text fontSize="xl" fontWeight={400} color="gray.500">
            Please enter yours details
          </Text>
        </Flex>

        <Input
          placeholder="Email"
          value={value?.email}
          onChange={(e) => setValue((s) => ({ ...s, email: e.target.value }))}
        />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={value?.password}
            onChange={(e) =>
              setValue((s) => ({ ...s, password: e.target.value }))
            }
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button colorScheme="blue" width="100%" onClick={handleClick}>
          Log in
        </Button>
        <Flex w="100%" flexDir="column" justifyContent="center">
          <Flex alignItems="center" gap="8px">
            <Divider />
            or
            <Divider />
          </Flex>
          <Flex w="100%" justifyContent="center" gap="8px">
            <Text fontSize="md">Don'thave a account? </Text>
            <S.SignUp
              fontSize="md"
              color="blue.500"
              onClick={() => setShowSign(true)}
            >
              Sign up
            </S.SignUp>
          </Flex>
        </Flex>
      </Flex>
    </S.LoginWrapper>
  )
}
