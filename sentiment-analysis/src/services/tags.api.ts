import API from "./api"

import { toast } from "react-toastify"
import { TTag, TTagData, TTagInfo } from "context/Application/Application.types"

export const getAllTags = async (
  user_id: number,
): Promise<{
  status: number
  response: TTag[]
}> => {
  const resp = await API.get(`/tag/list?user_id=${user_id}`)
    .then(({ data, status }) => {
      return {
        status,
        response: data as TTag[],
      }
    })
    .catch((err) => {
      toast.error("Error on get search")
      return { status: err.status, response: [] }
    })

  return resp
}

export const getTagData = async (
  id: number,
): Promise<{
  status: number
  response: TTagData
}> => {
  const resp = await API.get(`/tag/${id}/data`)
    .then(({ data, status }) => {
      return {
        status,
        response: data as TTagData,
      }
    })
    .catch((err) => {
      toast.error("Error on get search")
      return { status: err.status, response: undefined }
    })

  return resp
}

export const insertTag = async (
  body: TTagInfo,
): Promise<{
  status: number
  response: TTag
}> => {
  const resp = await API.post("/tag", body)
    .then(({ data, status }) => {
      return {
        status,
        response: data as TTag,
      }
    })
    .catch((err) => {
      toast.error("Error on get search")
      return { status: err.status, response: undefined }
    })

  return resp
}

export const updateTag = async (
  body: TTagInfo,
): Promise<{
  status: number
  response: TTag
}> => {
  const resp = await API.put("/tag", body)
    .then(({ data, status }) => {
      return {
        status,
        response: data as TTag,
      }
    })
    .catch((err) => {
      toast.error("Error on get search")
      return { status: err.status, response: undefined }
    })

  return resp
}

export const updateActiveTag = async (
  id: number,
): Promise<{
  status: number
  response: any
}> => {
  const resp = await API.put(`/tag/${id}/update_is_active`)
    .then(({ data, status }) => {
      return {
        status,
        response: data,
      }
    })
    .catch((err) => {
      toast.error("Error on get search")
      return { status: err.status, response: undefined }
    })

  return resp
}

export const deleteTag = async (
  id: number,
): Promise<{
  status: number
  response: any
}> => {
  const resp = await API.delete(`/tag/${id}`)
    .then(({ data, status }) => {
      return {
        status,
        response: data,
      }
    })
    .catch((err) => {
      toast.error("Error on get search")
      return { status: err.status, response: undefined }
    })

  return resp
}
