import { Flex, Text } from "@chakra-ui/react"
import styled from "styled-components"

export const Container = styled(Flex)<{ isVariant: boolean }>`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  gap: 16px;
  color: ${({ isVariant }) => (isVariant ? "white" : "black")};
  z-index: 9;

  a {
    &:hover {
      color: #ea5455;
    }
  }
`

export const Logo = styled(Text)`
  font-family: Sora, sans-serif;
`
