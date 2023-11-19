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
  TCompareSearch,
  TCompareSearchResponse,
} from "./Application.types"
import { getAllLocation } from "services/location.api"
import { compareTerms, searchTerm } from "services/search.api"

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
  const [compareSearch, setCompareSearch] = useState<TCompareSearchResponse>()

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

  const handleCompareTerms = useCallback(async (data: TCompareSearch) => {
    setCompareSearch((v) => ({ ...v, status: EStatusOption.PENDING }))

    const { response, status } = await compareTerms(data)

    if (status === EStatusOption.DONE) {
      setCompareSearch(() => ({ status: EStatusOption.DONE, data: response }))
    } else {
      setCompareSearch((v) => ({ ...v, status: EStatusOption.ERROR }))
    }
  }, [])

  console.log(compareSearch)

  useEffect(() => {
    handleGetLocations()
  }, [handleGetLocations])

  return (
    <ApplicationContext.Provider
      value={{
        locations,
        handleRealTimeSearch,
        handleCompareTerms,
        search,
        compareTerms: compareSearch,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  )
}

export default ApplicationProvider
