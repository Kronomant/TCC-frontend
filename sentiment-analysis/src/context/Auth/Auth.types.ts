export type TUserSignUp = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type TUser = {
  firstName: string
  lastName: string
  email: string
}

export interface IAuthContext {
  user: TUser
  handleAuthenticate: (email: string, password: string) => void
  handleSignUp: (userData: TUserSignUp) => void
}
