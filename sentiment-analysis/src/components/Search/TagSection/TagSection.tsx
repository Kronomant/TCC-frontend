import { useCallback, useEffect, useState } from "react"
import { TTagInfo, useApplication } from "context/Application"
import * as S from "./TagSection.style"
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  Select,
  Switch,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react"
import { validateSchema } from "lib/common"
import { useAuth } from "context/Auth/Auth.context"
import { TagSchema } from "../TagList/TagList.data"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import { TagInfo } from "./TagInfo"
import { TagSentimentChart } from "./TagSentimentChart"
import { TagTimelineChart } from "./TagTimelineChart"

export const TagSection = () => {
  const [value, setValue] = useState<TTagInfo>()
  const [isActive, setIsActive] = useState<boolean>(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const {
    activeTag,
    locations,
    handleUpdateTag,
    handleActiveTag,
    handleDeleteTag,
  } = useApplication()
  const { user } = useAuth()

  const handleSendData = useCallback(async () => {
    validateSchema(TagSchema, value, setErrors, async () => {
      await handleUpdateTag({ ...value, user_id: user.id })
      setErrors({})
    })
  }, [value, location, setValue, setErrors, user, errors])

  const handleSendActive = useCallback(async () => {
    await handleActiveTag(value.id)
    setIsActive((v) => !v)
  }, [value, setIsActive])

  const handleRemoveTag = useCallback(async () => {
    await handleDeleteTag(value.id)
  }, [value])

  useEffect(() => {
    if (activeTag) {
      setValue((v) => ({
        ...v,
        id: activeTag.id,
        term: activeTag?.term,
        location: activeTag?.location.woeid,
        frequency: activeTag?.frequency,
      }))
      setIsActive(activeTag.is_active)
    }
  }, [activeTag])

  return (
    <S.Container>
      {!!activeTag ? (
        <S.TagForm>
          <Text fontSize="lg" fontWeight="semibold">
            Tag Information
          </Text>
          <Flex gap="16px">
            <FormControl isInvalid={!!errors?.term}>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  placeholder="Enter search term"
                  value={value?.term}
                  onChange={(e) =>
                    setValue((s) => ({ ...s, term: e.target.value }))
                  }
                />
              </InputGroup>
              {!!errors?.term && (
                <FormErrorMessage>term is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors?.location}>
              <Select
                backgroundColor="white"
                placeholder="Location"
                value={value?.location}
                onChange={(v) => {
                  const value = v?.currentTarget?.value
                  console.log(value)
                  setValue((v) => ({ ...v, location: value }))
                }}
              >
                {locations?.map((location) => (
                  <option
                    key={`location-${location.id}`}
                    value={location.woeid}
                  >
                    {location?.name}
                  </option>
                ))}
              </Select>
              {!!errors?.location && (
                <FormErrorMessage>Location is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors?.frequency}>
              <Select
                backgroundColor="white"
                placeholder="Frequency"
                value={value?.frequency}
                onChange={(v) => {
                  const value = v?.currentTarget?.value
                  console.log(value)
                  setValue((v) => ({ ...v, frequency: parseInt(value, 10) }))
                }}
              >
                <option key="frequency-5" value={5}>
                  5 minutes
                </option>
                <option key="frequency-10" value={10}>
                  10 minutes
                </option>
                <option key="frequency-15" value={15}>
                  15 minutes
                </option>
                <option key="frequency-30" value={30}>
                  30 minutes
                </option>
                <option key="frequency-60" value={60}>
                  60 minutes
                </option>
              </Select>
              {!!errors?.frequency && (
                <FormErrorMessage>frequency is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="is_active" mb="0">
                Is Active?
              </FormLabel>
              <Switch
                colorScheme="green"
                id="is_active"
                isChecked={isActive}
                onChange={handleSendActive}
              />
            </FormControl>
          </Flex>
          <Flex w="100%" justifyContent="end" gap="16px">
            <Button
              leftIcon={<DeleteForeverIcon style={{ color: "red" }} />}
              variant="ghost"
              onClick={handleRemoveTag}
            >
              Delete Tag
            </Button>
            <Button colorScheme="blue" onClick={handleSendData}>
              Update
            </Button>
          </Flex>
        </S.TagForm>
      ) : (
        <TagInfo />
      )}

      {!!activeTag && (
        <Flex
          borderRadius="8px"
          flexDir="column"
          padding="16px"
          gap="8px"
          border="1px solid #e0e2db "
        >
          <Text fontSize="lg" fontWeight="semibold">
            Tag Collected Data
          </Text>
          <TagSentimentChart />
          <TagTimelineChart />
        </Flex>
      )}
    </S.Container>
  )
}
