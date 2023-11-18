import React from "react"
import ApplicationProvider from "./Application/Application.context"
import AuthProvider from "./Auth/Auth.context"

export const GlobalProviders = ({ children }: React.PropsWithChildren) => (
  <AuthProvider>
    <ApplicationProvider>{children}</ApplicationProvider>
  </AuthProvider>
)
