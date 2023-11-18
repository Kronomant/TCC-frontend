import { TUser, TUserSignUp } from "context/Auth"
import API from "./api"

import { toast } from "react-toastify"

export const authenticate = async (
  email: string,
  password: string,
): Promise<{
  status: number
  response: TUser
}> => {
  const resp = await API.post("/user/auth", { email, password })
    .then(({ data, status }) => {
      toast.success("Usuário autenticado!")
      return {
        status,
        response: {
          id: data?.id,
          username: data?.username,
          email: data?.email,
        },
      }
    })
    .catch((err) => {
      return { status: err.status, response: null }
    })

  return resp
}

export const signUser = async (
  userData: TUserSignUp,
): Promise<{
  status: number
  response: TUser
}> => {
  const resp = await API.post("/user", userData)
    .then(({ data, status }) => {
      toast.success("Usuário cadastrado!")
      return {
        status,
        response: {
          id: data?.id,
          username: data?.username,
          email: data?.email,
        },
      }
    })
    .catch((err) => {
      return { status: err.status, response: null }
    })

  return resp
}

// export const getData = async (): Promise<{
//   status: number
//   response: TClassification[]
// }> => {
//   const resp = await API.get("api/pessoa/")
//     .then(({ data, status }) => {
//       return { status, response: data?.data }
//     })
//     .catch((err) => {
//       return { status: err.status, response: [] }
//     })

//   return resp
// }
