import { Flex } from '@chakra-ui/react'
import styled from 'styled-components'


export const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url('/public/Search.png') ;
`

export const Overlay = styled.div`
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.1); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  `
export const Wrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  z-index: 3;

`
