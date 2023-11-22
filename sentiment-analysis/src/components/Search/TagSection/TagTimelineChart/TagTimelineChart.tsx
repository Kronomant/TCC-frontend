import { useMemo } from "react"
import ReactApexChart from "react-apexcharts"
import { Flex, Text, Skeleton } from "@chakra-ui/react"
import { ApexOptions } from "apexcharts"

import * as S from "./TagTimelineChart.style"
import { EStatusOption, useApplication } from "context/Application"

const TimelineSkeleton = () => (
  <Flex alignItems="baseline" gap="16px">
    <Skeleton w="30px" height="200px" rounded="lg" />
    <Skeleton w="30px" height="120px" rounded="lg" />
    <Skeleton w="30px" height="180px" rounded="lg" />
    <Skeleton w="30px" height="50px" rounded="lg" />
    <Skeleton w="30px" height="20px" rounded="lg" />
    <Skeleton w="30px" height="10px" rounded="lg" />
    <Skeleton w="30px" height="120px" rounded="lg" />
    <Skeleton w="30px" height="80px" rounded="lg" />
    <Skeleton w="30px" height="50px" rounded="lg" />
    <Skeleton w="30px" height="20px" rounded="lg" />
  </Flex>
)

export const TagTimelineChart = () => {
  const { tagData } = useApplication()

  const positiveData = useMemo(
    () =>
      tagData?.data?.timeline?.positive?.percent?.map((percent) =>
        parseFloat(percent?.toFixed(1)),
      ),
    [tagData?.data],
  )

  const negativeData = useMemo(
    () =>
      tagData?.data?.timeline?.negative?.percent?.map((percent) =>
        parseFloat(percent?.toFixed(1)),
      ),
    [tagData?.data],
  )

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "55%",
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%"
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      position: "bottom",
      labels: {
        style: {
          fontSize: "10px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,

        formatter: function (val) {
          return val + "%"
        },
      },
    },
  }

  return (
    <S.Container>
      <Flex w="100%" justifyContent="space-between">
        <Text fontSize="lg">Timeline Chart</Text>
      </Flex>

      {tagData?.status === EStatusOption.PENDING && <TimelineSkeleton />}
      {tagData?.status === EStatusOption.DONE && (
        <ReactApexChart
          options={{
            ...options,
            colors: ["#26B20F", "#E13434"],
            xaxis: {
              ...options.xaxis,
              categories: tagData?.data?.timeline?.positive?.intervals.slice(
                0,
                positiveData?.length,
              ),
            },
          }}
          series={[
            {
              name: "Positive",
              data: positiveData,
            },
            {
              name: "negative",
              data: negativeData,
            },
          ]}
          type="bar"
          height={300}
          width={950}
        />
      )}
    </S.Container>
  )
}
