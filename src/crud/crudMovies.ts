import axios from "axios"
import { IMovie } from "../types/IMovie"
import {OMDBResponse } from "../types/ICrudResponse"

const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=14f30366"


export const searchByString = async (search: string): Promise<IMovie[]> => {

    const response = await axios.get<OMDBResponse>(`${API_KEY}&s=${search}`)

    if(response.data.Response === "True"){
        return response.data.Search
    }else{
        console.error(response.data.Error)
        return []
    }
}