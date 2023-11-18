import "./App.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { Routes } from "routes"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

const router = createBrowserRouter(Routes)

const App = () => (
  <ChakraProvider>
    <ToastContainer
      theme="dark"
      position="bottom-right"
      autoClose={3000}
      newestOnTop={false}
      rtl={false}
      pauseOnHover
      pauseOnFocusLoss
    />
    <RouterProvider router={router} />
  </ChakraProvider>
)

export default App
