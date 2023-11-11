import { Flex } from "@chakra-ui/react"
import styled from "styled-components"

export const Container = styled.div<{ isActive: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: ${({ isActive }) => (isActive ? "100%" : "0")};
  background-color: white;
  padding: ${({ isActive }) => (isActive ? "32px 72px" : "0")};
  border-radius: 32px 32px 0 0;
  overflow: hidden;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  transform: translateY(${({ isActive }) => (isActive ? "0" : "100%")});
  transition: all 0.7s ease;
  justify-content: center;
  align-items: center;

  div {
    transition: opacity 0.7s ease;
  }
`

export const ChartWrapper = styled(Flex)`
  width: 40%;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
`
