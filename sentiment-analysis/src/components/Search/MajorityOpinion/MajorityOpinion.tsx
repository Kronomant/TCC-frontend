import { Flex, Text } from "@chakra-ui/react"
import { EOpinion } from "context/Application"

interface IMajorityOpinion {
  percentage: string
  option: EOpinion
}

export const MajorityOpinion = ({ percentage, option }: IMajorityOpinion) => {
  const Colors = {
    [EOpinion.NEGATIVE]: "#EA5455",
    [EOpinion.POSITIVE]: "#26B20F",
    [EOpinion.NEUTRAL]: "#61A3BA",
  }

  return (
    <Flex alignItems="center" gap="8px">
      <Text fontSize="3xl">{percentage}%</Text>
      <Text fontSize="3xl" color={Colors[option]} fontWeight="semibold">
        {option.toLowerCase()}
      </Text>
      <Text fontSize="3xl">opinions</Text>
    </Flex>
  )
}
