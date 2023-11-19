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
  handleRealTimeSearch: (data: TSearch) => Promise<void>
  handleCompareTerms: (data: TCompareSearch) => Promise<void>
}
