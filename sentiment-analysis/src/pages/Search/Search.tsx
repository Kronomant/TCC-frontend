import { useState, useCallback } from "react"
import { BackgroundAnimation, Header, Logo } from "components"

import { Button, Input } from "@chakra-ui/react"

import { Select } from "@chakra-ui/react"

import SearchIcon from "@mui/icons-material/Search"

import * as S from "./Search.style"
import { TLocation, useApplication } from "context/Application"
import { ResponseSection } from "components"

export const Search = () => {
  const [query, setQuery] = useState("")
  const [location, setLocation] = useState<TLocation>()
  const { locations } = useApplication()
  const [active, setActive] = useState<boolean>(false)

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedValue = event.target.value
    const location = locations.find(
      (loc: TLocation) => String(loc.id) === selectedValue,
    )
    setLocation(location)
  }

  const handleSendData = useCallback(() => {
    console.log(location, query)
    setActive(!active)
  }, [query, location, setActive, active])

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
              onChange={(v) => setQuery(v.currentTarget.value)}
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

        <ResponseSection query={query} isActive={active} />
      </S.Wrapper>
    </S.Container>
  )
}
