import { Button, Flex } from "@chakra-ui/react"

import * as S from "./PrimeCard.style"
import { useNavigate } from "react-router-dom"
import { ERoutes } from "utils/enum/Routes"
import { useAuth } from "context/Auth/Auth.context"

export const PrimeCard = () => {
  const navigate = useNavigate()

  const { user } = useAuth()
  return (
    <S.Container>
      <Flex gap="24px" flexDir="column">
        <S.Cover background="/src/assets/clockBlue.jpg" />
        <S.Text fontSize="2xl">Real Time Analysis</S.Text>
        <S.Text fontSize="sm" fontWeight="light">
          Conduct research on any subject and receive a real-time analysis of
          how the audience is reacting. Additionally, searches can be narrowed
          down by specifying a location for more accurate insights.
        </S.Text>
      </Flex>
      <Button
        colorScheme="blue"
        variant={user ? "outline" : "solid"}
        onClick={() => navigate(user ? ERoutes.SEARCH : ERoutes.LOGIN)}
      >
        Get Started
      </Button>
    </S.Container>
  )
}
