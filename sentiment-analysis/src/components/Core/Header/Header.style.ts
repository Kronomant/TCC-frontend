import { Flex, Text } from '@chakra-ui/react'
import styled from 'styled-components'

export const Container = styled(Flex)`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 16px;

  a {
    &:hover {
      color: blue;
    }
  }
`

export const Logo = styled(Text)`
  font-family: Sora, sans-serif;
`