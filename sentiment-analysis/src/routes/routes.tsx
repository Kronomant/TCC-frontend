import Login from "pages/Login/Login"
import { Home } from "pages/Home"
import { Search } from "pages/Search"
import { ERoutes } from "utils/enum/Routes"
import { GlobalProviders } from "context"
import { Profile } from "pages/Profile"

export const Routes = [
  {
    path: ERoutes.HOME,
    element: (
      <GlobalProviders>
        <Home />
      </GlobalProviders>
    ),
  },
  {
    path: ERoutes.LOGIN,
    element: (
      <GlobalProviders>
        <Login />
      </GlobalProviders>
    ),
  },
  {
    path: ERoutes.SEARCH,
    element: (
      <GlobalProviders>
        <Search />
      </GlobalProviders>
    ),
  },
  {
    path: ERoutes.PROFILE,
    element: (
      <GlobalProviders>
        <Profile />
      </GlobalProviders>
    ),
  },
]
