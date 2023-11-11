import { Link } from "react-router-dom"
import { ERoutes } from "utils/enum/Routes"

import * as S from "./Header.style"

interface IHeader {
  isVariant?: boolean
}

export const Header = ({ isVariant }: IHeader) => (
  <S.Container isVariant={isVariant}>
    <Link to={ERoutes.HOME}>Home</Link>/<Link to={ERoutes.HOME}>About</Link>
    <S.Logo fontSize="3xl" fontWeight="semibold">
      OSÍRIS
    </S.Logo>
    <Link to={ERoutes.HOME}>Feature</Link>/<Link to={ERoutes.HOME}>Search</Link>
  </S.Container>
)
