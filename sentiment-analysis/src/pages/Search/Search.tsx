import { useState, useCallback, useEffect } from "react"
import { BackgroundAnimation, Header, Logo } from "components"

import { Button, Input } from "@chakra-ui/react"

import { Select } from "@chakra-ui/react"

import SearchIcon from "@mui/icons-material/Search"

import * as S from "./Search.style"
import { TLocation, TSearch, useApplication } from "context/Application"
import { ResponseSection } from "components"
import { validateSchema } from "lib/common"
import { RealTimeSchema } from "./Search.data"
import { useAuth } from "context/Auth/Auth.context"

export const Search = () => {
  const { locations, handleRealTimeSearch, search } = useApplication()
  const [active, setActive] = useState<boolean>(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [values, setValues] = useState<TSearch>({
    term: "",
    location: "",
    user_id: null,
  })

  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      setValues((v) => ({ ...v, user_id: user.id }))
    }
  }, [user, setValues])

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
      await handleRealTimeSearch(values)
    })
  }, [values, location, setActive, active])

  console.log("Search", search)

  return (
    <S.Container>
      <BackgroundAnimation color="white" />
      <Header isVariant />
      <S.Wrapper>
        <S.SearchSection>
          <Logo />
          <S.SearchWrapper>
            <Input
              backgroundColor="white"
              boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px;"
              placeholder="Term"
              onChange={(v) => {
                const value = v?.currentTarget?.value
                setValues((s) => ({ ...s, term: value }))
              }}
            />
            <Select
              backgroundColor="white"
              boxShadow=" rgba(149, 157, 165, 0.2) 0px 8px 24px;"
              placeholder="Location"
              onChange={handleLocationChange}
            >
              {locations.map((location) => (
                <option key={`location-${location.id}`} value={location.id}>
                  {location?.name}
                </option>
              ))}
            </Select>
            <Button rightIcon={<SearchIcon />} onClick={handleSendData} />
          </S.SearchWrapper>
        </S.SearchSection>

        <ResponseSection
          searchResponse={search}
          query={values.term}
          isActive={active}
        />
      </S.Wrapper>
    </S.Container>
  )
}
