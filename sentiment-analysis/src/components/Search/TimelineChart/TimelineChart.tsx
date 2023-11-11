import { memo } from "react"

import ReactApexChart from "react-apexcharts"
import {
  Flex,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react"
import { ApexOptions } from "apexcharts"

import * as S from "./TimelineChart.style"

export const TimelineChart = () => {
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
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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
          Sentiment Chart
        </Text>
        <Text fontSize="xl">23/10/2023</Text>
      </Flex>

      <Tabs variant="soft-rounded" colorScheme="blackAlpha">
        <TabList>
          <Tab>Positive</Tab>
          <Tab>Negative</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ReactApexChart
              options={options}
              series={[
                {
                  name: "Inflation",
                  data: [
                    2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2,
                  ],
                },
              ]}
              type="bar"
              width={550}
            />
          </TabPanel>
          <TabPanel>
            <ReactApexChart
              options={options}
              series={[
                {
                  name: "Inflation",
                  data: [
                    5.3, 2.1, 1.0, 20.1, 3.0, 2.6, 6.2, 1.3, 6.4, 0.8, 2.5, 0.2,
                  ],
                },
              ]}
              type="bar"
              width={550}
            />
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </S.Container>
  )
}
