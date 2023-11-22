import { Flex } from "@chakra-ui/react"
import styled from "styled-components"

export const Container = styled(Flex)<{ isActive: boolean }>`
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  border: ${({ isActive }) => (isActive ? "1px solid #1DA1F2" : "")};
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`
