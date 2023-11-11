import { Text } from "@chakra-ui/react"
import styled from "styled-components"

export const Logo = styled(Text)<{ hasSubTitle: boolean }>`
  font-weight: 700;
  letter-spacing: -4px;
  font-size: 90px;
  color: ${({ hasSubTitle }) => (hasSubTitle ? "#002b5b" : "white")};
`

export const subTitle = styled(Text)`
  span {
    text-align: center;
    color: #ea5455;
    font-weight: 500;
    //font-family: "Poiret One", sans-serif;
    font-family: "Montserrat", sans-serif;
  }
`
