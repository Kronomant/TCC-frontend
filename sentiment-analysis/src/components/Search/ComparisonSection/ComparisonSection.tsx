import { TCompareSearch, useApplication } from "context/Application"
import * as S from "./ComparisonSection.style"

import { Flex, Text } from "@chakra-ui/react"
import { SentimentChart } from "../SentimentChart"
import { CompareTimelineChart } from "../CompareTimelineChart"

interface IComparisonSection {
  isActive: boolean
  searchQuery: TCompareSearch
}

export const ComparisonSection = ({
  isActive,
  searchQuery,
}: IComparisonSection) => {
  const { compareTerms } = useApplication()

  return (
    <S.Container isActive={isActive}>
      <Flex w="100%" className="wrapper" justifyContent="space-between">
        <Flex gap="8px">
          <Text fontSize="2xl">Results for: </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            {searchQuery?.terms[0]}
          </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            X
          </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            {searchQuery?.terms[1]}
          </Text>
        </Flex>
      </Flex>

      <Flex
        w="80%"
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        gap="16px"
      >
        <S.ChartWrapper>
          <SentimentChart
            title={`Sentiment Chart - ${searchQuery?.terms?.[0]}`}
            status={compareTerms?.status}
            data={
              compareTerms?.data?.[searchQuery?.terms?.[0]]?.sentiment_chart
            }
          />
          <SentimentChart
            title={`Sentiment Chart - ${searchQuery?.terms?.[1]}`}
            status={compareTerms?.status}
            data={
              compareTerms?.data?.[searchQuery?.terms?.[1]]?.sentiment_chart
            }
          />
        </S.ChartWrapper>
        <CompareTimelineChart
          status={compareTerms?.status}
          firstTermSearch={compareTerms?.data?.[searchQuery?.terms?.[0]]}
          secondTermSearch={compareTerms?.data?.[searchQuery?.terms?.[1]]}
        />
      </Flex>
    </S.Container>
  )
}
