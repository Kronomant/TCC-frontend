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
  TTag,
  TTagResponse,
  TTagInfo,
  TTagData,
  TTagDataResponse,
} from "./Application.types"
import { getAllLocation } from "services/location.api"
import { compareTerms, searchTerm } from "services/search.api"
import { useAuth } from "context/Auth/Auth.context"
import {
  deleteTag,
  getAllTags,
  getTagData,
  insertTag,
  updateActiveTag,
  updateTag,
} from "services/tags.api"

export const ApplicationContext = createContext<IApplicationContext>(
  {} as IApplicationContext,
)
export const useApplication = (): IApplicationContext =>
  useContext(ApplicationContext)

const ApplicationProvider: React.FC<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren) => {
  const { user } = useAuth()
  const [locations, setLocations] = useState<TLocation[]>([])
  const [search, setSearch] = useState<TRealTimeSearchResponse>()
  const [compareSearch, setCompareSearch] = useState<TCompareSearchResponse>()
  const [tags, setTags] = useState<TTagResponse>()
  const [tagData, setTagData] = useState<TTagDataResponse>()
  const [activeTag, setActiveTag] = useState<TTag>()

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

  const handleActiveTag = useCallback(async (id: number) => {
    const { status } = await updateActiveTag(id)
    if (status === 200) {
      handleGetAllTags()
    }
  }, [])

  const handleDeleteTag = useCallback(async (id: number) => {
    const { status } = await deleteTag(id)
    if (status === 204) {
      handleGetAllTags()
    }
  }, [])

  const handleGetAllTags = useCallback(async () => {
    setTags((v) => ({ ...v, status: EStatusOption.PENDING }))

    const { response, status } = await getAllTags(user.id)
    if (status === 200) {
      setTags(() => ({ status: EStatusOption.DONE, data: response }))
    } else {
      setTags((v) => ({ ...v, status: EStatusOption.ERROR }))
    }
  }, [setTags, user])

  const handleUpdateTag = useCallback(
    async (data: TTagInfo) => {
      const { status } = await updateTag(data)
      if (status === 201) {
        handleGetAllTags()
      }
    },
    [handleGetAllTags, updateTag],
  )

  const handleGetTagData = useCallback(async (id: number) => {
    setTagData((v) => ({ ...v, status: EStatusOption.PENDING }))
    const { response, status } = await getTagData(id)
    if (status === 200) {
      setTagData(() => ({ status: EStatusOption.DONE, data: response }))
    } else {
      setTagData((v) => ({ ...v, status: EStatusOption.ERROR }))
    }
  }, [])

  const handleAddTag = useCallback(
    async (data: TTagInfo) => {
      const { status } = await insertTag(data)
      if (status === 201) {
        handleGetAllTags()
      }
    },
    [insertTag],
  )

  console.log("Tags", tags)

  const handleCompareTerms = useCallback(
    async (data: TCompareSearch) => {
      setCompareSearch((v) => ({ ...v, status: EStatusOption.PENDING }))

      const { response, status } = await compareTerms(data)

      if (status === EStatusOption.DONE) {
        setCompareSearch(() => ({ status: EStatusOption.DONE, data: response }))
      } else {
        setCompareSearch((v) => ({ ...v, status: EStatusOption.ERROR }))
      }
    },
    [compareTerms],
  )

  useEffect(() => {
    handleGetLocations()
  }, [handleGetLocations])

  useEffect(() => {
    if (user?.id) {
      handleGetAllTags()
    }
  }, [handleGetAllTags, user])

  useEffect(() => {
    if (activeTag?.id) handleGetTagData(activeTag.id)
  }, [activeTag?.id, handleGetTagData])

  console.log(tags)

  return (
    <ApplicationContext.Provider
      value={{
        tagData,
        locations,
        activeTag,
        handleAddTag,
        handleRealTimeSearch,
        handleCompareTerms,
        setActiveTag,
        handleGetAllTags,
        handleUpdateTag,
        handleActiveTag,
        handleDeleteTag,
        search,
        compareTerms: compareSearch,
        tags,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  )
}

export default ApplicationProvider
