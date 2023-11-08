import { Flex, Text as Txt } from "@chakra-ui/react"
import styled from "styled-components"

export const Container = styled(Flex)<{ background: string }>`
  position: relative;
  width: 450px;
  height: 270px;
  padding: 32px 48px;
  flex-direction: column;
  gap: 4px;
  justify-content: end;
  background-size: cover;
  background-image: url(${({ background }) => background});
`

export const Overlay = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 50%;
  top: 50%;
  left: 0;
  background: linear-gradient(to top, #000, transparent);
  opacity: 0.5;
  z-index: 1;
`

export const Text = styled(Txt)`
  //font-family: "Poiret One", sans-serif;
  font-family: "Montserrat", sans-serif;
  z-index: 2;
`
