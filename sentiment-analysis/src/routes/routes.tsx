import Login from "pages/Login/Login"
import { Home } from "pages/Home"
import { Search } from "pages/Search"
import { ERoutes } from "utils/enum/Routes"
import ApplicationProvider from "context/Application/Application.context"

export const Routes = [
  {
    path: ERoutes.HOME,
    element: <Home />,
  },
  {
    path: ERoutes.LOGIN,
    element: <Login />,
  },
  {
    path: ERoutes.SEARCH,
    element: (
      <ApplicationProvider>
        <Search />
      </ApplicationProvider>
    ),
  },
]
