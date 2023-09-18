import { TUser } from "context/Auth"
import API from "./api"

import { toast } from "react-toastify"

export const authenticate = async (
  email: string,
  password: string,
): Promise<{
  status: number
  response: TUser
}> => {
  const resp = await API.post("/auth", { email, password })
    .then(({ data, status }) => {
      console.log(data)
      toast.success("Usuário autenticado!")
      return {
        status,
        response: {
          firstName: data?.username,
          lastName: data?.username,
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
