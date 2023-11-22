export type TLocation = {
  id: string
  name: string
  geoLocation: string
  woeid: string
}

export enum EOpinion {
  POSITIVE = "POSITIVE",
  NEGATIVE = "NEGATIVE",
  NEUTRAL = "NEUTRAL,",
}

export enum EStatusOption {
  PENDING = "PENDING",
  ERROR = "ERROR",
  DONE = "DONE",
}

export type TTag = {
  id: number
  term: string
  frequency: number
  is_active: boolean
  location: {
    name: string
    woeid: string
  }
  tweets_collected: number
}

export type TIntervalData = {
  intervals: string[]
  percent: number[]
}

export type TTimelineData = {
  positive: TIntervalData
  negative: TIntervalData
}

export type TOverallData = {
  positive_percentage: number
  negative_percentage: number
  neutral_percentage: number
}

export type TTagData = {
  id: number
  overall: TOverallData
  timeline: TTimelineData
}

export type TTagDataResponse = {
  status: EStatusOption
  data: TTagData
}

export type TTagResponse = {
  status: EStatusOption
  data: TTag[]
}

export type TTagInfo = {
  id?: number
  user_id: number
  term: string
  location: string
  frequency: number
}

export type TSentimentChartData = {
  positive_percentage: number
  negative_percentage: number
  neutral_percentage: number
  created_at: string
}

export type TTimelineChartData = {
  days: string[]
  percent: number[]
}

export type RealTimeSearch = {
  id: number
  sentiment_chart: TSentimentChartData
  positive_timeline_chart: TTimelineChartData
  negative_timeline_chart: TTimelineChartData
}

export type TCompareTerms = {
  firstTerm: Record<string, RealTimeSearch>
  secondTerm: Record<string, RealTimeSearch>
}

export type TCompareSearchResponse = {
  status: EStatusOption
  data: TCompareTerms
}

export type TRealTimeSearchResponse = {
  status: EStatusOption
  data: RealTimeSearch
}

export type TSearch = {
  term: string
  location: string
  user_id: number
}

export type TCompareSearch = {
  terms: string[]
  location: string
  user_id: number
}

export interface IApplicationContext {
  locations: TLocation[]
  search: TRealTimeSearchResponse
  compareTerms: TCompareSearchResponse
  tags: TTagResponse
  activeTag: TTag
  tagData: TTagDataResponse
  handleRealTimeSearch: (data: TSearch) => Promise<void>
  handleCompareTerms: (data: TCompareSearch) => Promise<void>
  handleAddTag: (data: TTagInfo) => Promise<void>
  setActiveTag: React.Dispatch<React.SetStateAction<TTag>>
  handleGetAllTags: () => Promise<void>
  handleUpdateTag: (data: TTagInfo) => Promise<void>
  handleActiveTag: (id: number) => Promise<void>
  handleDeleteTag: (id: number) => Promise<void>
}
