import styled from "styled-components"

import { Box } from "@mui/material"
import { Text } from "@chakra-ui/react"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 200px;
  justify-content: end;
  align-items: center;
`

export const LoginWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 35%;
  padding: 128px;
  justify-content: center;
  align-items: start;
`

export const Logo = styled(Text)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  letter-spacing: -4px;
  font-size: 72px;
`
