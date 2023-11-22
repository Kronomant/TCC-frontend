import { Flex, Skeleton, Text } from "@chakra-ui/react"
import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts"

import { format, parseISO, isValid } from "date-fns"

import * as S from "./TagSentimentChart.style"
import { EStatusOption, useApplication } from "context/Application"

export const TagSentimentChart = () => {
  const { tagData } = useApplication()

  const options: ApexOptions = {
    chart: {
      width: 200,
      type: "donut",
    },
    dataLabels: {
      enabled: true,
      textAnchor: "end",
      style: {
        fontSize: "14px",
      },
    },
    labels: ["Positive", "Negative", "Neutral"],
    colors: ["#26B20F", "#E13434", "#002B5B"],
    fill: {
      type: "solid",
    },
    legend: {
      position: "right",
      horizontalAlign: "center",
      fontSize: "16px",
    },
  }

  return (
    <S.Container>
      <Flex w="100%" justifyContent="space-between">
        <Text fontSize="md">Sentiment Chart</Text>
      </Flex>
      <Flex justifyContent="center" height="100%" alignItems="center">
        {tagData?.status === EStatusOption.PENDING && (
          <Skeleton height={220} w={220} borderRadius="50%" />
        )}
        {tagData?.status === EStatusOption.DONE && (
          <ReactApexChart
            options={options}
            series={[
              tagData?.data?.overall?.positive_percentage,
              tagData?.data?.overall?.negative_percentage,
              tagData?.data?.overall?.neutral_percentage,
            ]}
            type="donut"
            width={400}
          />
        )}
      </Flex>
    </S.Container>
  )
}
