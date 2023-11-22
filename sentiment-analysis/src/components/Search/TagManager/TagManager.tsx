import { Flex, Text } from "@chakra-ui/react"
import * as S from "./TagManager.style"
import { TagList } from "../TagList"
import { TagSection } from "../TagSection"

interface ITagManager {
  isActive: boolean
}

export const TagManager = ({ isActive }: ITagManager) => (
  <S.Container isActive={isActive}>
    <Flex w="100%" justifyContent="center" alignItems="center">
      <Text fontSize="xl"> Tag Manager</Text>
    </Flex>
    <Flex gap="64px">
      <TagList />
      <TagSection />
    </Flex>
  </S.Container>
)
