import { FC } from "react"
import { IMovie } from "../../types/IMovie"
import { MovieCard } from "../MovieCard/MovieCard"

interface Props {
  moviesArray: IMovie[]
  firstSearch: boolean
}

export const MovieList: FC<Props> = ({moviesArray, firstSearch}) => {
  return (
    <div className="flex flex-wrap m-auto w-4/5 gap-8 mt-9 pb-9 justify-center  h-[80vh] overflow-y-auto">
      
      {((moviesArray.length > 0) == false && firstSearch)   ? <h1>No se encontraron peliculas </h1> : moviesArray.map((movie) => <MovieCard movie={movie}/>)}

    </div>
  )
}
