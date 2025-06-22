import { FC } from "react"
import { IMovie } from "../../types/IMovie"
import { MovieCard } from "../MovieCard/MovieCard"

interface Props {
  moviesArray: IMovie[]
  firstSearch: boolean
}

export const MovieList: FC<Props> = ({moviesArray, firstSearch}) => {
  return (
    <div>
      
      {((moviesArray.length > 0) == false && firstSearch)   ? <h1>No se encontraron peliculas </h1> : moviesArray.map((movie) => <MovieCard movie={movie}/>)}

    </div>
  )
}
