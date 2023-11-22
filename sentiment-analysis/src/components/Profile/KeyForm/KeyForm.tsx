import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Switch,
  Text,
} from "@chakra-ui/react"
import { useAuth } from "context/Auth/Auth.context"
import { useState } from "react"

export const KeyForm = () => {
  const { user } = useAuth()
  const [value, setValue] = useState({
    is_active: false,
    consumer_key: "",
    consumer_secret: "",
    access_token: "",
    access_token_secret: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const [showConsumer, setShowConsumer] = useState(false)
  const [showConsumerSecret, setShowConsumerSecret] = useState(false)
  const [showAccessToken, setShowAccessToken] = useState(false)
  const [showAccessTokenSecret, setShowAccessTokenSecret] = useState(false)

  return (
    <Flex
      gap="16px"
      border="1px solid #e0e2db"
      padding="16px"
      borderRadius="8px"
      flexDir="column"
    >
      <Flex w="100%" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="semibold">
          Key
        </Text>
        <FormControl
          justifyContent="end"
          w="50%"
          display="flex"
          alignItems="center"
        >
          <FormLabel fontWeight="light" htmlFor="email-alerts" mb="0">
            use your key for API calls?
          </FormLabel>
          <Switch
            id="email-alerts"
            isChecked={value.is_active}
            onChange={() =>
              setValue((v) => ({ ...v, is_active: !v.is_active }))
            }
          />
        </FormControl>
      </Flex>

      <FormControl isInvalid={!!errors?.consumer_key}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={showConsumer ? "text" : "password"}
            placeholder="Enter Consumer Key"
            value={value?.consumer_key}
            onChange={(e) =>
              setValue((s) => ({ ...s, consumer_key: e.target.value }))
            }
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowConsumer(!showConsumer)}
            >
              {showConsumer ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {!!errors?.consumer_key && (
          <FormErrorMessage>consumer key is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={!!errors?.consumer_secret}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={showConsumerSecret ? "text" : "password"}
            placeholder="Enter Consumer Secret"
            value={value?.consumer_secret}
            onChange={(e) =>
              setValue((s) => ({ ...s, consumer_secret: e.target.value }))
            }
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowConsumerSecret(!showConsumerSecret)}
            >
              {showConsumerSecret ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {!!errors?.consumer_secret && (
          <FormErrorMessage>consumer secret is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={!!errors?.access_token}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={showAccessToken ? "text" : "password"}
            placeholder="Enter Access Token"
            value={value?.access_token}
            onChange={(e) =>
              setValue((s) => ({ ...s, access_token: e.target.value }))
            }
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowAccessToken(!showAccessToken)}
            >
              {showAccessToken ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {!!errors?.access_token && (
          <FormErrorMessage>access token is required.</FormErrorMessage>
        )}
      </FormControl>

      {/* Access Token Secret */}
      <FormControl isInvalid={!!errors?.access_token_secret}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={showAccessTokenSecret ? "text" : "password"}
            placeholder="Enter Access Token Secret"
            value={value?.access_token_secret}
            onChange={(e) =>
              setValue((s) => ({ ...s, access_token_secret: e.target.value }))
            }
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => setShowAccessTokenSecret(!showAccessTokenSecret)}
            >
              {showAccessTokenSecret ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {!!errors?.access_token_secret && (
          <FormErrorMessage>access token secret is required.</FormErrorMessage>
        )}
      </FormControl>

      <Flex alignItems="end" justifyContent="end">
        <Button colorScheme="blue">Save</Button>
      </Flex>
    </Flex>
  )
}
