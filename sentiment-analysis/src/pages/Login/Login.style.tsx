import styled from "styled-components"

import { Box } from "@mui/material"

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
