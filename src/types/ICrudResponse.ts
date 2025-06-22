import { IMovie } from "./IMovie";


export interface OMDBResponseSuccess {
  Search: IMovie[]
  totalResults: string
  Response: "True"
}

export interface OMDBResponseError {
  Response: "False"
  Error: string
}

export type OMDBResponse = OMDBResponseSuccess | OMDBResponseError