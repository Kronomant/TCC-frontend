import { Flex } from "@chakra-ui/react"
import { styled } from "styled-components"

export const Container = styled(Flex)`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #002b5b;
  padding: 32px;
  gap: 16px;
  z-index: 9;
`

export const Cover = styled(Flex)`
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #002b5b;
  padding: 0; /* Removido o padding para garantir cobertura total */
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url("/src/assets/fisrtCard.jpg");
  background-position: center; /* Centralizar a imagem de fundo */
  filter: grayscale(50%) brightness(70%) contrast(90%); /* Combine os filtros em uma única linha */
  gap: 0; /* Removido o espaçamento entre os filhos */
  z-index: 1;
`
