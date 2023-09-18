import Login from "pages/Login/Login"
import { ERoutes } from "utils/enum/Routes"

export const Routes = [
  {
    path: ERoutes.LOGIN,
    element: <Login />,
  },
  {
    path: "/page",
    element: <div>Hello world!</div>,
  },
]
