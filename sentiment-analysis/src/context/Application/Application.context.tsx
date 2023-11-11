import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react"

import { IApplicationContext, TLocation } from "./Application.types"
import { getAllLocation } from "services/location.api"

export const ApplicationContext = createContext<IApplicationContext>(
  {} as IApplicationContext,
)
export const useApplication = (): IApplicationContext =>
  useContext(ApplicationContext)

const ApplicationProvider: React.FC<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  const [locations, setLocations] = useState<TLocation[]>([])

  const handleGetLocations = useCallback(async () => {
    const { response, status } = await getAllLocation()
    if (status === 200) setLocations(response)
    else setLocations([])
  }, [setLocations, getAllLocation])

  useEffect(() => {
    handleGetLocations()
  }, [handleGetLocations])

  return (
    <ApplicationContext.Provider value={{ locations }}>
      {children}
    </ApplicationContext.Provider>
  )
}

export default ApplicationProvider
