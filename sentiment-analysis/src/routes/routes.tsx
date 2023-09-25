import { Home } from "pages/Home"
import Login from "pages/Login/Login"
import { ERoutes } from "utils/enum/Routes"

export const Routes = [
  {
    path: ERoutes.HOME,
    element: <Home />,
  },
  {
    path: ERoutes.LOGIN,
    element: <Login />,
  },

]
