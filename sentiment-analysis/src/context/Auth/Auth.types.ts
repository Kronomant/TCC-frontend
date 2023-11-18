export type TUserSignUp = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type TUser = {
  id: number
  username: string
  email: string
}

export interface IAuthContext {
  user: TUser
  handleAuthenticate: (email: string, password: string) => Promise<void>
  handleSignUp: (userData: TUserSignUp) => Promise<void>
}
