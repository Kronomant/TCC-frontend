import { useMemo } from "react"
import { Flex, Text } from "@chakra-ui/react"

import { MajorityOpinion } from "../MajorityOpinion"
import { EOpinion, TRealTimeSearchResponse } from "context/Application"
import { SentimentChart } from "../SentimentChart"
import { TimelineChart } from "../TimelineChart"

import * as S from "./ResponseSection.style"

interface IResponseSection {
  query: string
  isActive: boolean
  searchResponse: TRealTimeSearchResponse
}

export const ResponseSection = ({
  query,
  isActive,
  searchResponse,
}: IResponseSection) => {
  const opinion = useMemo(() => {
    const labelArray = [EOpinion.POSITIVE, EOpinion.NEGATIVE, EOpinion.NEUTRAL]
    const array = [
      searchResponse?.data?.sentiment_chart?.positive_percentage,
      searchResponse?.data?.sentiment_chart?.negative_percentage,
      searchResponse?.data?.sentiment_chart?.neutral_percentage,
    ]

    const maxValue = Math.max(...array)
    const indexOfMaxValue = array.indexOf(maxValue)

    return { value: maxValue, opinion: labelArray[indexOfMaxValue] }
  }, [
    searchResponse?.data?.sentiment_chart?.positive_percentage,
    searchResponse?.data?.sentiment_chart?.negative_percentage,
    searchResponse?.data?.sentiment_chart?.neutral_percentage,
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
          status={searchResponse.status}
          percentage={opinion.value.toFixed(1)}
          option={opinion.opinion}
        />
      </Flex>
      <Flex w="100%" justifyContent="center" alignItems="center">
        <S.ChartWrapper>
          <SentimentChart
            status={searchResponse?.status}
            data={searchResponse?.data?.sentiment_chart}
          />
          <TimelineChart
            status={searchResponse?.status}
            positiveChartData={searchResponse?.data?.positive_timeline_chart}
            negativeChartData={searchResponse?.data?.negative_timeline_chart}
          />
        </S.ChartWrapper>
      </Flex>
    </S.Container>
  )
}
