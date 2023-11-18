import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react"
import { IAuthContext, TUser, TUserSignUp } from "./Auth.types"
import { authenticate, signUser } from "services/auth.api"
import { useNavigate } from "react-router-dom"
import { ERoutes } from "utils/enum/Routes"

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)
export const useAuth = (): IAuthContext => useContext(AuthContext)

const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  const [user, setUser] = useState<TUser>()
  const navigate = useNavigate()

  const handleSignUp = useCallback(async (userData: TUserSignUp) => {
    const { response, status } = await signUser(userData)
    if (status === 200) setUser(response)
  }, [])

  const handleAuthenticate = useCallback(
    async (email: string, password: string) => {
      const { response, status } = await authenticate(email, password)
      if (status === 200) {
        setUser(response)
        localStorage.setItem("x-access", JSON.stringify(response))
        navigate(ERoutes.HOME)
      }
    },
    [setUser],
  )

  useEffect(() => {
    if (window) {
      const userData = JSON.parse(localStorage.getItem("x-access"))
      setUser(userData)
    }
  }, [setUser])

  return (
    <AuthContext.Provider value={{ user, handleSignUp, handleAuthenticate }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
