import { useCallback, useState } from "react"
import {
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  Text,
  InputRightElement,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react"

interface ILoginSection {
  setShowSign: React.Dispatch<React.SetStateAction<boolean>>
}

import * as S from "./LoginSection.style"
import { useAuth } from "context/Auth/Auth.context"
import { validateSchema } from "lib/common"
import { LoginSchema } from "./LoginSection.data"

export const LoginSection = ({ setShowSign }: ILoginSection) => {
  const [value, setValue] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState<{ [key:string] : string}>({})

  const { handleAuthenticate } = useAuth()

  const [show, setShow] = useState(false)


  const handleLogin = useCallback(async() =>  {
    validateSchema(LoginSchema, value, setErrors, async () => {
      await handleAuthenticate(value.email, value.password)
    })
  
  }, [])

  return (
    <S.LoginWrapper>
      <Flex flexDir="column" w="45%" gap="16px">
        <Flex gap="4px" flexDir="column">
          <Text fontSize="3xl">Welcome back</Text>
          <Text fontSize="xl" fontWeight={400} color="gray.500">
            Please enter yours details
          </Text>
        </Flex>

      <FormControl isInvalid={!!errors?.email}>
        <Input
          placeholder="Email"
          value={value?.email}
          onChange={(e) => setValue((s) => ({ ...s, email: e.target.value }))}
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
              <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        {!!errors?.password && (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
        </FormControl>

        <Button colorScheme="blue" width="100%" onClick={handleLogin}>
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
