import {
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react"
import { TUserSignUp } from "context/Auth"
import { useState } from "react"

import * as S from "./SingUp.style"

interface ISignUpSection {
  setShowSign: React.Dispatch<React.SetStateAction<boolean>>
}
export const SignUpSection = ({ setShowSign }: ISignUpSection) => {
  const [value, setValue] = useState<TUserSignUp>()
  const [password, setPassword] = useState<string>("")

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const invalidPassword = value?.password !== password && password?.length > 0

  return (
    <S.LoginWrapper>
      <Flex flexDir="column" gap="16px" w="45%">
        <Flex gap="4px" flexDir="column">
          <Text fontSize="3xl">Sign Up</Text>
          <Text fontSize="xl" fontWeight={400} color="gray.500">
            Create your account
          </Text>
        </Flex>

        <Flex w="100%" my="48px" flexDir="column" gap="24px">
          <Flex gap="24px">
            <Input
              placeholder="First Name"
              value={value?.firstName}
              onChange={(e) =>
                setValue((s) => ({ ...s, firstName: e.target.value }))
              }
            />
            <Input
              placeholder="Last Name"
              value={value?.lastName}
              onChange={(e) =>
                setValue((s) => ({ ...s, lastName: e.target.value }))
              }
            />
          </Flex>
          <Input
            placeholder="Email *"
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
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Input
            placeholder="Confirm Password *"
            value={password}
            isInvalid={invalidPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Flex>

        <Button colorScheme="blue" width="100%">
          Sign Up
        </Button>
        <Flex w="100%" flexDir="column" justifyContent="center">
          <Flex alignItems="center" gap="8px">
            <Divider />
            or
            <Divider />
          </Flex>
          <Flex w="100%" justifyContent="center">
            <S.LogIn
              fontSize="md"
              color="blue.500"
              onClick={() => setShowSign(false)}
            >
              Log in
            </S.LogIn>
          </Flex>
        </Flex>
      </Flex>
    </S.LoginWrapper>
  )
}
