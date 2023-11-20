import { Flex } from "@chakra-ui/react"
import styled from "styled-components"

export const Container = styled(Flex)<{color: string}>`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  padding: 16px 8px;
  border-left: 1px solid ${({color}) => color};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`