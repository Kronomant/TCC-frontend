import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import { Routes } from "routes"

import { ToastContainer } from "react-toastify"

const router = createBrowserRouter(Routes)

const App = () => (
  <>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Project</h1>
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
  </>
)

export default App
