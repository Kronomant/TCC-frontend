import { Button, Flex } from "@chakra-ui/react"

import * as S from "./PrimeCard.style"

export const PrimeCard = () => (
  <S.Container>
    <Flex gap="24px" flexDir="column">
      <S.Cover background="/src/assets/clockBlue.jpg" />
      <S.Text fontSize="2xl">Real Time Analysis</S.Text>
      <S.Text fontSize="xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
        dignissimos, vel doloribus esse modi placeat accusantium ut nisi maxime
        quo eos dicta ea illo repellat aut non amet praesentium fuga?
      </S.Text>
    </Flex>
    <Button colorScheme="blue" variant="outline">
      Access
    </Button>
  </S.Container>
)
