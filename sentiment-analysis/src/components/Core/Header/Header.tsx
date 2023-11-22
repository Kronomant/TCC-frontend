import { Link } from "react-router-dom"
import { ERoutes } from "utils/enum/Routes"

import * as S from "./Header.style"
import { useAuth } from "context/Auth/Auth.context"
import { Flex } from "@chakra-ui/react"

interface IHeader {
  isVariant?: boolean
  hideProfile?: boolean
}

export const Header = ({ isVariant, hideProfile = false }: IHeader) => {
  const { user } = useAuth()

  return (
    <S.Container isVariant={isVariant}>
      {!hideProfile && <Flex w="52px" />}

      <Flex w="100%" justifyContent="center" gap="16px" alignItems="center">
        <Link to={ERoutes.HOME}>Home</Link>/<Link to={ERoutes.HOME}>About</Link>
        <S.Logo fontSize="3xl" fontWeight="semibold">
          OSÍRIS
        </S.Logo>
        <Link to={ERoutes.HOME}>Feature</Link>/
        <Link to={user ? ERoutes.SEARCH : ERoutes.LOGIN}>Search</Link>
      </Flex>
      {!hideProfile && <Link to={ERoutes.PROFILE}>Profile</Link>}
    </S.Container>
  )
}
