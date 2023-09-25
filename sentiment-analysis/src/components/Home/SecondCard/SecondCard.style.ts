import {  Flex } from '@chakra-ui/react'
import styled from 'styled-components'


export const Container = styled(Flex)<{background: string}>`
width: 500px;
height: 150px;
gap: 16px;
background-size: contain;
background: linear-gradient(
          rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.2)
        ), url(${({ background}) => background});
`