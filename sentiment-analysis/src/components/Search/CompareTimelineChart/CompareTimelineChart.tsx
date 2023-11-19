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

import * as S from "./CompareTimelineChart.style"
import { EStatusOption, RealTimeSearch } from "context/Application"

interface ITimelineChart {
  status: EStatusOption
  firstTermSearch: RealTimeSearch
  secondTermSearch: RealTimeSearch
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

export const CompareTimelineChart = ({
  status,
  firstTermSearch,
  secondTermSearch,
}: ITimelineChart) => {
  const firstPositiveData = useMemo(
    () =>
      firstTermSearch?.positive_timeline_chart?.percent?.map((percent) =>
        parseFloat(percent?.toFixed(1)),
      ),
    [firstTermSearch],
  )

  const secondPositiveData = useMemo(
    () =>
      secondTermSearch?.positive_timeline_chart?.percent?.map((percent) =>
        parseFloat(percent?.toFixed(1)),
      ),
    [secondTermSearch],
  )

  const firstNegativeData = useMemo(
    () =>
      firstTermSearch?.negative_timeline_chart?.percent?.map((percent) =>
        parseFloat(percent?.toFixed(1)),
      ),
    [firstTermSearch],
  )

  const secondNegativeData = useMemo(
    () =>
      secondTermSearch?.negative_timeline_chart?.percent?.map((percent) =>
        parseFloat(percent?.toFixed(1)),
      ),
    [secondTermSearch],
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
                  colors: ["#1DA1F2", "#002B5B"],
                  xaxis: {
                    ...options.xaxis,
                    categories: firstTermSearch?.positive_timeline_chart?.days,
                  },
                }}
                series={[
                  {
                    name: "term 1 Positive",
                    data: firstPositiveData,
                  },
                  {
                    name: "term 2 Positive",
                    data: secondPositiveData,
                  },
                ]}
                type="bar"
                height={300}
                width={850}
              />
            )}
          </TabPanel>
          <TabPanel>
            {status === EStatusOption.PENDING && <TimelineSkeleton />}

            {status === EStatusOption.DONE && (
              <ReactApexChart
                options={{
                  ...options,
                  colors: ["#EA5455", "#E13434"],
                  xaxis: {
                    ...options.xaxis,
                    categories: firstTermSearch?.negative_timeline_chart?.days,
                  },
                }}
                series={[
                  {
                    name: "term 1 Negative",
                    data: firstNegativeData,
                  },
                  {
                    name: "term 2 Negative",
                    data: secondNegativeData,
                  },
                ]}
                type="bar"
                height={300}
                width={850}
              />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </S.Container>
  )
}
