import { Flex } from "@chakra-ui/react"
import styled from "styled-components"

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  flex: 1;
  overflow: hidden;
  /* background-size: cover;
  background-image: url("/src/assets/search.png"); */
  background-color: #002b5b;
  filter: saturate(80%);
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  padding: 4px 24px;
  justify-content: center;
  gap: 24px;
  overflow-y: scroll;
  padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box; /* So the width will be 100% + 17px */
`

export const SearchWrapper = styled(Flex)`
  width: 900px;
  gap: 16px;
`

export const SearchSection = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
`

export const ResponseSection = styled(Flex)`
  width: 100%;
  flex-direction: column;
  height: 100%;
  background-color: white;
  padding: 32px 72px;
  border-radius: 32px 32px 0 0;
`
