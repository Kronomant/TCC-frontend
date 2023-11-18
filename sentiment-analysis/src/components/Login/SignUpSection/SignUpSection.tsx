import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react"
import { TUserSignUp } from "context/Auth"
import { useCallback, useState } from "react"

import * as S from "./SingUp.style"
import { useAuth } from "context/Auth/Auth.context"
import { validateSchema } from "lib/common"
import { SignSchema } from "./SignUp.data"

interface ISignUpSection {
  setShowSign: React.Dispatch<React.SetStateAction<boolean>>
}
export const SignUpSection = ({ setShowSign }: ISignUpSection) => {
  const [value, setValue] = useState<TUserSignUp>()
  const [password, setPassword] = useState<string>("")
  const { handleSignUp } = useAuth()
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const invalidPassword = value?.password !== password && password?.length > 0

  const handleSignUser = useCallback(async () => {
    validateSchema(SignSchema, value, setErrors, async () => {
      setErrors({})
      await handleSignUp(value)
    })
  }, [])

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
            <FormControl isInvalid={!!errors?.firstName}>
              <Input
                placeholder="First Name"
                value={value?.firstName}
                onChange={(e) =>
                  setValue((s) => ({ ...s, firstName: e.target.value }))
                }
              />
              {!!errors?.firstName && (
                <FormErrorMessage>First Name is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors?.lastName}>
              <Input
                placeholder="Last Name"
                value={value?.lastName}
                onChange={(e) =>
                  setValue((s) => ({ ...s, lastName: e.target.value }))
                }
              />
              {!!errors?.lastName && (
                <FormErrorMessage>Last Name is required.</FormErrorMessage>
              )}
            </FormControl>
          </Flex>
          <FormControl isInvalid={!!errors?.email}>
            <Input
              placeholder="Email *"
              value={value?.email}
              onChange={(e) =>
                setValue((s) => ({ ...s, email: e.target.value }))
              }
            />
            {!!errors?.email && (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors?.password}>
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
            {!!errors?.password && (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
          </FormControl>

          <Input
            placeholder="Confirm Password *"
            value={password}
            isInvalid={invalidPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Flex>

        <Button colorScheme="blue" width="100%" onClick={handleSignUser}>
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
