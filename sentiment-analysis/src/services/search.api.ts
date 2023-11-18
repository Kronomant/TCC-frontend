import API from "./api"

import { toast } from "react-toastify"
import {
  EStatusOption,
  RealTimeSearch,
  TSearch,
} from "context/Application/Application.types"

export const searchTerm = async (
  body: TSearch,
): Promise<{
  status: EStatusOption
  response: RealTimeSearch
}> => {
  const resp = await API.post("/search", body)
    .then(({ data }) => {
      return {
        status: EStatusOption.DONE,
        response: data as RealTimeSearch,
      }
    })
    .catch(() => {
      toast.error("Error on get search")
      return { status: EStatusOption.ERROR, response: undefined }
    })

  return resp
}
