import { useMemo } from "react"
import ReactApexChart from "react-apexcharts"
import {
  Flex,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Skeleton,
} from "@chakra-ui/react"
import { ApexOptions } from "apexcharts"

import * as S from "./TimelineChart.style"
import { EStatusOption, TTimelineChartData } from "context/Application"

interface ITimelineChart {
  status: EStatusOption
  positiveChartData: TTimelineChartData
  negativeChartData: TTimelineChartData
}

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

export const TimelineChart = ({
  status,
  positiveChartData,
  negativeChartData,
}: ITimelineChart) => {
  const positiveData = useMemo(
    () =>
      positiveChartData?.percent?.map((percent) =>
        parseFloat(percent?.toFixed(1)),
      ),
    [positiveChartData],
  )

  const negativeData = useMemo(
    () =>
      negativeChartData?.percent?.map((percent) =>
        parseFloat(percent?.toFixed(1)),
      ),
    [negativeChartData],
  )

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
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
      position: "top",
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
        <Text fontSize="xl" fontWeight="semibold">
          Timeline Chart
        </Text>
      </Flex>

      <Tabs variant="soft-rounded" colorScheme="blackAlpha">
        <TabList>
          <Tab>Positive</Tab>
          <Tab>Negative</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {status === EStatusOption.PENDING && <TimelineSkeleton />}
            {status === EStatusOption.DONE && (
              <ReactApexChart
                options={{
                  ...options,
                  colors: ["#26B20F"],
                  xaxis: {
                    ...options.xaxis,
                    categories: positiveChartData?.days,
                  },
                }}
                series={[
                  {
                    name: "Positive",
                    data: positiveData,
                  },
                ]}
                type="bar"
                width={550}
              />
            )}
          </TabPanel>
          <TabPanel>
            {status === EStatusOption.PENDING && <TimelineSkeleton />}

            {status === EStatusOption.DONE && (
              <ReactApexChart
                options={{
                  ...options,
                  colors: ["#E13434"],
                  xaxis: {
                    ...options.xaxis,
                    categories: negativeChartData?.days,
                  },
                }}
                series={[
                  {
                    name: "Negative",
                    data: negativeData,
                  },
                ]}
                type="bar"
                width={550}
              />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </S.Container>
  )
}
