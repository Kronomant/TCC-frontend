import API from "./api"

import { toast } from "react-toastify"
import { TLocation } from "context/Application/Application.types"

export const getAllLocation = async (): Promise<{
  status: number
  response: TLocation[]
}> => {
  const resp = await API.get("/location/list")
    .then(({ data, status }) => {
      return {
        status,
        response: data.map((item) => ({
          id: item.id,
          geoLocation: item.geo_location,
          woeid: item.woeid,
          name: item.name,
        })),
      }
    })
    .catch((err) => {
      toast.error("Error on get Locations!")
      return { status: err.status, response: [] }
    })

  return resp
}
