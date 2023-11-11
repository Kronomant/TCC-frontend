import { Flex, Text } from "@chakra-ui/react"
import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts"

import * as S from "./SentimentChart.style"

export const SentimentChart = () => {
  const options: ApexOptions = {
    chart: {
      width: 200,
      type: "donut",
    },
    dataLabels: {
      enabled: true,
      textAnchor: "end",
    },
    labels: ["Positive", "Negative", "Neutral"],
    colors: ["#26B20F", "#E13434", "#002B5B"],
    fill: {
      type: "solid",
    },
    legend: {
      position: "right",
    },
  }

  return (
    <S.Container>
      <Flex w="100%" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="semibold">
          Sentiment Chart
        </Text>
        <Text fontSize="xl">23/10/2023</Text>
      </Flex>
      <ReactApexChart
        options={options}
        series={[9, 15, 5]}
        type="donut"
        width={450}
      />
    </S.Container>
  )
}
