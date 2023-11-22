import { EOpinion, TTag } from "context/Application"
import * as S from "./Tag.style"
import { Flex, Text, Tag as TagChakra } from "@chakra-ui/react"

import TwitterIcon from "@mui/icons-material/Twitter"

interface ITag {
  tag: TTag
  isActive: boolean
  onClick: () => void
}

export const Tag = ({ tag, isActive, onClick }: ITag) => {
  return (
    <S.Container flexDir="column" onClick={onClick} isActive={isActive}>
      <Flex justifyContent="space-between" w="100%">
        <Flex padding="8px 16px" gap="8px">
          <Flex gap="4px">
            <Text>Term:</Text>
            <Text fontWeight="semibold">{tag?.term}</Text>
          </Flex>

          <Flex gap="4px">
            <Text>Frequency:</Text>
            <Text fontWeight="semibold">{tag?.frequency} min</Text>
          </Flex>

          <Flex gap="4px">
            <Text>Location:</Text>
            <Text fontWeight="semibold">{tag?.location.name}</Text>
          </Flex>
        </Flex>
        <TagChakra
          w="80px"
          h="20px"
          justifyContent="center"
          borderRadius="0px 6px "
          variant="subtle"
          colorScheme={tag?.is_active ? "green" : "gray"}
        >
          {tag?.is_active ? "Active" : "Disabled"}
        </TagChakra>
      </Flex>
      <Flex padding="8px 16px" gap="16px">
        <Flex alignItems="center" gap="4px">
          <TwitterIcon style={{ color: "#1DA1F2" }} />
          <Text fontWeight="light" fontSize="sm">
            Collected:
          </Text>
          <Text fontWeight="light" fontSize="sm">
            {tag?.tweets_collected} tweets
          </Text>
        </Flex>
      </Flex>
    </S.Container>
  )
}
