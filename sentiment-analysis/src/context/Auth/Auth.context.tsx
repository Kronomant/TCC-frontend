import { createContext, useContext, useState, useCallback } from "react"
import { IAuthContext, TUser, TUserSignUp } from "./Auth.types"
import { authenticate } from "services/auth.api"

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)
export const useAuth = (): IAuthContext => useContext(AuthContext)

const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  const [user, setUser] = useState<TUser>()

  const handleSignUp = useCallback((userData: TUserSignUp) => {
    console.log("batata")
    console.log(userData)
  }, [])

  const handleAuthenticate = useCallback(
    async (email: string, password: string) => {
      const { response, status } = await authenticate(email, password)

      if (status === 200) setUser(response)

      console.log(response)
    },
    [],
  )

  return (
    <AuthContext.Provider value={{ user, handleSignUp, handleAuthenticate }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
