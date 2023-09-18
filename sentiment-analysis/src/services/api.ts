import axios from "axios"

export const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    AccessControlAllowOrigin: true,
  },
})

export default API
