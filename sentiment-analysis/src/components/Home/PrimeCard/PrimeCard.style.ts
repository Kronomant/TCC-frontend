import { Flex, Text as Txt } from "@chakra-ui/react"
import styled from "styled-components"

export const Cover = styled(Flex)<{ background: string }>`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center center;
  background-image: url(${({ background }) => background});
`

export const Text = styled(Txt)`
  font-family: "Montserrat", sans-serif;
`

export const Container = styled(Flex)`
  align-items: start;
  justify-content: space-between;
  padding: 24px;
  width: 350px;
  height: 600px;
  background-color: white;
  gap: 16px;
  z-index: 9;
  flex-direction: column;
  box-shadow: -29px 31px 0px 0px rgba(0, 0, 0, 0.16);
`
