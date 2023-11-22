import { Flex, Text } from "@chakra-ui/react"

import * as S from "./Profile.style"
import { useAuth } from "context/Auth/Auth.context"
import { Header, KeyForm } from "components"

export const Profile = () => {
  const { user } = useAuth()

  return (
    <Flex
      background="radial-gradient(circle at center, #ffffff, #f9f5eb)"
      alignItems="center"
      w="100%"
      minH="100vh"
      flexDir="column"
    >
      <Flex paddingBottom="64px" h="100%" w="40%" gap="32px" flexDir="column">
        <S.Cover>
          <Header isVariant hideProfile />
          <S.Overlay />
          <Flex>
            <Text zIndex={9} fontSize="5xl" color="white">
              {user?.username}
            </Text>
          </Flex>
        </S.Cover>

        <Flex
          gap="16px"
          border="1px solid #e0e2db"
          padding="16px"
          borderRadius="8px"
          flexDir="column"
        >
          <Text fontSize="xl" fontWeight="semibold">
            User Info
          </Text>
          <Flex flexDir="column" gap="4px">
            <Flex gap="8px">
              <Text fontSize="md" fontWeight="light">
                Username:
              </Text>
              <Text fontSize="md">{user?.username}</Text>
            </Flex>
            <Flex gap="8x">
              <Text fontSize="md" fontWeight="light">
                Email:
              </Text>
              <Text fontSize="md">{user?.email}</Text>
            </Flex>
          </Flex>
        </Flex>

        <KeyForm />
      </Flex>
    </Flex>
  )
}
