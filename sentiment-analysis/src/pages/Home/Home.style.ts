import { Flex, Text } from "@chakra-ui/react"
import styled from "styled-components"

export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, #ffffff, #f9f5eb);
`

export const Overlay = styled.div`
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
`
export const Wrapper = styled(Flex)`
  width: 100%;
  position: relative;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  z-index: 3;
`
export const subTitle = styled(Text)`
  font-family: "Montserrat", sans-serif;
  color: #ea5455;
  text-align: center;
  max-width: 600px;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 3px;

  &::before {
    content: "";
    display: block;
    width: 50px;
    height: 1px;
    background: #ea5455;
    left: 105%;
    top: 50%;
    position: absolute;
  }

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 1px;
    background: #ea5455;
    left: -50%;
    top: 50%;
    position: absolute;
  }
`
