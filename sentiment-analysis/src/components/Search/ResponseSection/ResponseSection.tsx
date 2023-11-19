import { useMemo } from "react"
import { Flex, Text } from "@chakra-ui/react"

import { MajorityOpinion } from "../MajorityOpinion"
import { EOpinion, useApplication } from "context/Application"
import { SentimentChart } from "../SentimentChart"
import { TimelineChart } from "../TimelineChart"

import * as S from "./ResponseSection.style"

interface IResponseSection {
  query: string
  isActive: boolean
}

export const ResponseSection = ({ query, isActive }: IResponseSection) => {
  const { search } = useApplication()

  const opinion = useMemo(() => {
    const labelArray = [EOpinion.POSITIVE, EOpinion.NEGATIVE, EOpinion.NEUTRAL]
    const array = [
      search?.data?.sentiment_chart?.positive_percentage,
      search?.data?.sentiment_chart?.negative_percentage,
      search?.data?.sentiment_chart?.neutral_percentage,
    ]

    const maxValue = Math.max(...array)
    const indexOfMaxValue = array.indexOf(maxValue)

    return { value: maxValue, opinion: labelArray[indexOfMaxValue] }
  }, [
    search?.data?.sentiment_chart?.positive_percentage,
    search?.data?.sentiment_chart?.negative_percentage,
    search?.data?.sentiment_chart?.neutral_percentage,
  ])

  return (
    <S.Container isActive={isActive}>
      <Flex w="100%" className="wrapper" justifyContent="space-between">
        <Flex gap="8px">
          <Text fontSize="2xl">Results for: </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            {query}
          </Text>
        </Flex>
        <MajorityOpinion
          status={search?.status}
          percentage={opinion.value.toFixed(1)}
          option={opinion.opinion}
        />
      </Flex>
      <Flex w="100%" justifyContent="center" alignItems="center">
        <S.ChartWrapper>
          <SentimentChart
            status={search?.status}
            data={search?.data?.sentiment_chart}
          />
          <TimelineChart
            status={search?.status}
            positiveChartData={search?.data?.positive_timeline_chart}
            negativeChartData={search?.data?.negative_timeline_chart}
          />
        </S.ChartWrapper>
      </Flex>
    </S.Container>
  )
}
