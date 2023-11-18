import Login from "pages/Login/Login"
import { Home } from "pages/Home"
import { Search } from "pages/Search"
import { ERoutes } from "utils/enum/Routes"
import ApplicationProvider from "context/Application/Application.context"
import AuthProvider from "context/Auth/Auth.context"
import { GlobalProviders } from "context"

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
]
