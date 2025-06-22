import { FC } from "react"
import { IMovie } from "../../types/IMovie"

interface Props {
  movie: IMovie
}

export const MovieCard: FC <Props> = ({movie}) => {
  return (
    <div>
      <div>
        <img src={movie.Poster} alt="" />
      </div>
      <div>
        <h2>
          {movie.Title}
        </h2>
        <p>
          {movie.Type}
        </p>
        <p>
          {movie.Year}
        </p>
      </div>
    </div>
  )
}
