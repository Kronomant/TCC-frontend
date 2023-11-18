import { Flex, Skeleton, Text } from "@chakra-ui/react"
import { EOpinion, EStatusOption } from "context/Application"

interface IMajorityOpinion {
  status: EStatusOption
  percentage: string
  option: EOpinion
}

export const MajorityOpinion = ({
  percentage,
  option,
  status,
}: IMajorityOpinion) => {
  const Colors = {
    [EOpinion.NEGATIVE]: "#EA5455",
    [EOpinion.POSITIVE]: "#26B20F",
    [EOpinion.NEUTRAL]: "#61A3BA",
  }

  return (
    <Flex alignItems="center" gap="8px">
      {status === EStatusOption.PENDING && (
        <Skeleton w="330px" height="40px" rounded="xl" />
      )}

      {status === EStatusOption.DONE && (
        <>
          <Text fontSize="3xl">{percentage}%</Text>
          <Text fontSize="3xl" color={Colors[option]} fontWeight="semibold">
            {option?.toLowerCase()}
          </Text>
          <Text fontSize="3xl">opinions</Text>
        </>
      )}
    </Flex>
  )
}
