import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react"

import {
  EStatusOption,
  IApplicationContext,
  RealTimeSearch,
  TRealTimeSearchResponse,
  TLocation,
  TSearch,
} from "./Application.types"
import { getAllLocation } from "services/location.api"
import { searchTerm } from "services/search.api"

export const ApplicationContext = createContext<IApplicationContext>(
  {} as IApplicationContext,
)
export const useApplication = (): IApplicationContext =>
  useContext(ApplicationContext)

const ApplicationProvider: React.FC<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  const [locations, setLocations] = useState<TLocation[]>([])
  const [search, setSearch] = useState<TRealTimeSearchResponse>()

  const handleGetLocations = useCallback(async () => {
    const { response, status } = await getAllLocation()
    if (status === 200) setLocations(response)
    else setLocations([])
  }, [setLocations, getAllLocation])

  const handleRealTimeSearch = useCallback(
    async (data: TSearch) => {
      setSearch((v) => ({ ...v, status: EStatusOption.PENDING }))

      const { response, status } = await searchTerm(data)

      if (status === EStatusOption.DONE) {
        setSearch(() => ({ status: EStatusOption.DONE, data: response }))
      } else {
        setSearch((v) => ({ ...v, status: EStatusOption.ERROR }))
      }
    },
    [setSearch, searchTerm],
  )

  useEffect(() => {
    handleGetLocations()
  }, [handleGetLocations])

  return (
    <ApplicationContext.Provider
      value={{ locations, handleRealTimeSearch, search }}
    >
      {children}
    </ApplicationContext.Provider>
  )
}

export default ApplicationProvider
