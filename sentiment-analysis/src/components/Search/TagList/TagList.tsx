import { useState, useEffect, useCallback } from "react"
import {
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  InputGroup,
  FormControl,
  FormErrorMessage,
  Select,
  Skeleton,
} from "@chakra-ui/react"
import { Tag } from "./Tag/Tag"
import * as S from "./TagList.style"

import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import { EStatusOption, TTagInfo, useApplication } from "context/Application"
import { useAuth } from "context/Auth/Auth.context"
import { validateSchema } from "lib/common"
import { TagSchema } from "./TagList.data"

export const TagList = () => {
  const { locations, tags, handleAddTag, activeTag, setActiveTag } =
    useApplication()
  const { user } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [value, setValue] = useState<TTagInfo>()
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleSendData = useCallback(() => {
    validateSchema(TagSchema, value, setErrors, async () => {
      await handleAddTag({ ...value, user_id: user.id })
      onClose()
      setValue(null)
      setErrors({})
    })
  }, [value, location, setValue, setErrors, user, errors])

  return (
    <S.Container>
      <Text gap="16px" display="flex" fontSize="xl" fontWeight="semibold">
        <LocalOfferIcon />
        Tags
      </Text>
      <Button
        leftIcon={<AddCircleOutlineIcon />}
        onClick={onOpen}
        colorScheme="gray"
        variant="solid"
      >
        Add new tag
      </Button>
      <Flex minH="360px" flexDir="column" gap="16px">
        {tags?.status === EStatusOption.PENDING && (
          <Flex flexDir="column" gap="16px">
            <Skeleton height="60px" w="100%" borderRadius="8px" />
            <Skeleton height="60px" w="100%" borderRadius="8px" />
            <Skeleton height="60px" w="100%" borderRadius="8px" />
            <Skeleton height="60px" w="100%" borderRadius="8px" />
          </Flex>
        )}
        {tags?.data?.length === 0 && tags?.status === EStatusOption.DONE && (
          <Text
            w="100%"
            h="100%"
            alignItems="center"
            display="flex"
            justifyContent="center"
          >
            No tags registered
          </Text>
        )}
        {tags?.status === EStatusOption.DONE &&
          tags?.data?.map((tag) => (
            <Tag
              isActive={tag?.id === activeTag?.id}
              tag={tag}
              onClick={() => setActiveTag(tag)}
            />
          ))}
      </Flex>
      <Modal size="5xl" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new Tag</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
                  onChange={(v) => {
                    const value = v?.currentTarget?.value
                    console.log(value)
                    setValue((v) => ({ ...v, location: value }))
                  }}
                >
                  {locations.map((location) => (
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
            </Flex>
          </ModalBody>

          <ModalFooter gap="24px">
            <Button
              variant="ghost"
              onClick={() => {
                onClose()
                setValue(null)
                setErrors({})
              }}
            >
              Cancel
            </Button>
            <Button colorScheme="blue" mr={3} onClick={handleSendData}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </S.Container>
  )
}
