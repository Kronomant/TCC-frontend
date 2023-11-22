import { useState, useCallback, useEffect } from "react"
import {
  BackgroundAnimation,
  ComparisonSection,
  Header,
  Logo,
} from "components"

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"

import { Select } from "@chakra-ui/react"

import SearchIcon from "@mui/icons-material/Search"

import * as S from "./Search.style"
import {
  TCompareSearch,
  TLocation,
  TSearch,
  useApplication,
} from "context/Application"
import { ResponseSection } from "components"
import { validateSchema } from "lib/common"
import { CompareTermsSchema, RealTimeSchema } from "./Search.data"
import { useAuth } from "context/Auth/Auth.context"
import { TagManager } from "components/Search/TagManager"

const TSEARCH_INITIAL_STATE = {
  term: "",
  location: "",
  user_id: null,
}

const TCOMPARE_INITIAL_STATE = {
  terms: [""],
  location: "",
  user_id: null,
}

export const Search = () => {
  const {
    locations,
    handleRealTimeSearch,
    handleCompareTerms,
    handleGetAllTags,
  } = useApplication()
  const [active, setActive] = useState<boolean>(false)
  const [activeComparison, setActiveComparison] = useState<boolean>(false)
  const [activeTag, setActiveTag] = useState<boolean>(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [values, setValues] = useState<TSearch>(TSEARCH_INITIAL_STATE)
  const [compareValues, setCompareValues] = useState<TCompareSearch>(
    TCOMPARE_INITIAL_STATE,
  )

  const { user } = useAuth()

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedValue = event.target.value
    const location = locations.find(
      (loc: TLocation) => String(loc.id) === selectedValue,
    )
    setValues((v) => ({ ...v, location: location.woeid }))
  }

  const handleSendData = useCallback(() => {
    validateSchema(RealTimeSchema, values, setErrors, async () => {
      setActive(true)
      setActiveComparison(false)
      await handleRealTimeSearch(values)
    })
  }, [values, location, setActive, active])

  const handleSendCompareTerms = useCallback(() => {
    console.log(compareValues)
    validateSchema(CompareTermsSchema, compareValues, setErrors, async () => {
      setActiveComparison(true)
      setActive(false)
      await handleCompareTerms(compareValues)
    })
  }, [compareValues, location, setActive, active, setActiveComparison])

  useEffect(() => {
    if (user) {
      setValues((v) => ({ ...v, user_id: user.id }))
      setCompareValues((v) => ({ ...v, user_id: user.id }))
    }
  }, [user, setValues])

  return (
    <S.Container>
      <BackgroundAnimation color="white" />
      <Header isVariant />
      <S.Wrapper>
        <S.SearchSection>
          <Logo />
          <Tabs
            align="center"
            onChange={(index) => {
              if (index === 2) {
                setActiveTag(true)
              } else {
                setActiveTag(false)
              }
            }}
            variant="solid-rounded"
            colorScheme="red"
          >
            <TabList>
              <Tab color="white">Real Time</Tab>
              <Tab color="white">Compare Terms</Tab>
              <Tab color="white">Tags</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <S.SearchWrapper>
                  <FormControl isInvalid={!!errors?.term}>
                    <Input
                      backgroundColor="white"
                      boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px;"
                      placeholder="Term"
                      onFocus={() =>
                        setErrors((v) => ({ ...v, ["term"]: undefined }))
                      }
                      onChange={(v) => {
                        const value = v?.currentTarget?.value
                        setValues((s) => ({ ...s, term: value }))
                      }}
                    />
                    {!!errors?.term && (
                      <FormErrorMessage>Term is required.</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl isInvalid={!!errors?.location}>
                    <Select
                      backgroundColor="white"
                      boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px;"
                      placeholder="Location"
                      onChange={handleLocationChange}
                      onFocus={() =>
                        setErrors((v) => ({ ...v, ["location"]: undefined }))
                      }
                    >
                      {locations?.map((location) => (
                        <option
                          key={`location-${location.id}`}
                          value={location.id}
                        >
                          {location?.name}
                        </option>
                      ))}
                    </Select>
                    {!!errors?.location && (
                      <FormErrorMessage>Location is required.</FormErrorMessage>
                    )}
                  </FormControl>
                  <Button rightIcon={<SearchIcon />} onClick={handleSendData} />
                </S.SearchWrapper>
              </TabPanel>
              <TabPanel>
                <S.SearchWrapper>
                  <Input
                    backgroundColor="white"
                    boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px;"
                    placeholder="first Term"
                    onChange={(v) => {
                      const value = v?.currentTarget?.value
                      setCompareValues((s) => ({
                        ...s,
                        terms: [value, ...s.terms.slice(1)],
                      }))
                    }}
                  />
                  <Input
                    backgroundColor="white"
                    boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px;"
                    placeholder="Second Term"
                    onChange={(v) => {
                      const value = v?.currentTarget?.value
                      setCompareValues((s) => ({
                        ...s,
                        terms: [s.terms[0], value, ...s.terms.slice(2)],
                      }))
                    }}
                  />
                  <Select
                    backgroundColor="white"
                    boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px;"
                    placeholder="Location"
                    onChange={(v) => {
                      const value = v?.currentTarget?.value
                      console.log(value)
                      setCompareValues((v) => ({ ...v, location: value }))
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
                  <Button
                    rightIcon={<SearchIcon />}
                    onClick={handleSendCompareTerms}
                  />
                </S.SearchWrapper>
              </TabPanel>
              <TabPanel w="900px">
                <Flex w="900px" h="40px" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </S.SearchSection>

        <ResponseSection
          query={values.term}
          isActive={active && !activeTag && !activeComparison}
        />
        <ComparisonSection
          searchQuery={compareValues}
          isActive={activeComparison && !activeTag && !active}
        />
        <TagManager isActive={activeTag} />
      </S.Wrapper>
    </S.Container>
  )
}
