import { Flex, Skeleton, Text } from "@chakra-ui/react"
import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts"

import { format, parseISO, isValid } from "date-fns"

import * as S from "./SentimentChart.style"
import { EStatusOption, TSentimentChartData } from "context/Application"

interface ISentimentChart {
  status: EStatusOption
  data: TSentimentChartData
  title?: string
}

export const SentimentChart = ({ status, data, title }: ISentimentChart) => {
  const formattedDate =
    data && isValid(parseISO(data.created_at))
      ? format(new Date(data.created_at), "dd/MM/yyyy HH:mm")
      : "Invalid Date"

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
        <Text fontSize="xl" fontWeight="semibold">
          {title || "Sentiment Chart"}
        </Text>
        <Text fontSize="xl">{formattedDate}</Text>
      </Flex>
      <Flex justifyContent="center" height="100%" alignItems="center">
        {status === EStatusOption.PENDING && (
          <Skeleton height={250} w={250} borderRadius="50%" />
        )}
        {status === EStatusOption.DONE && (
          <ReactApexChart
            options={options}
            series={[
              data?.positive_percentage,
              data?.negative_percentage,
              data?.neutral_percentage,
            ]}
            type="donut"
            width={450}
          />
        )}
      </Flex>
    </S.Container>
  )
}
