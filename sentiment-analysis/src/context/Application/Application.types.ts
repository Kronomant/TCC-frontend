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

export interface IApplicationContext {
  locations: TLocation[]
}
