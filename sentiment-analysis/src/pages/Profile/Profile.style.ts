import { Flex } from "@chakra-ui/react"
import styled from "styled-components"

export const Cover = styled(Flex)`
  width: 100%;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  height: 500px;
  padding-bottom: 32px;
  background-image: url("/src/assets/secondCard.jpg");
  border-radius: 0px 0px 32px 32px;
`

export const Overlay = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 50%;
  top: 50%;
  left: 0;
  border-radius: 0px 0px 32px 32px;
  background: linear-gradient(to top, #222, transparent);
  opacity: 0.5;
  z-index: 1;
`
