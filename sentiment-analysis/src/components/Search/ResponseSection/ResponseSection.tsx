import { Flex, Text } from "@chakra-ui/react"
import * as S from "./ResponseSection.style"
import { MajorityOpinion } from "../MajorityOpinion"
import { EOpinion } from "context/Application"
import { SentimentChart } from "../SentimentChart"
import { TimelineChart } from "../TimelineChart"

interface IResponseSection {
  query: string
  isActive: boolean
}

export const ResponseSection = ({ query, isActive }: IResponseSection) => (
  <S.Container isActive={isActive}>
    <Flex w="100%" className="wrapper" justifyContent="space-between">
      <Flex gap="8px">
        <Text fontSize="2xl">Results for: </Text>
        <Text fontSize="2xl" fontWeight="semibold">
          {query}
        </Text>
      </Flex>
      <MajorityOpinion percentage="40" option={EOpinion.POSITIVE} />
    </Flex>
    <Flex w="100%" justifyContent="center" alignItems="center">
      <S.ChartWrapper>
        <SentimentChart />
        <TimelineChart />
      </S.ChartWrapper>
    </Flex>
  </S.Container>
)
