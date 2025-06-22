import { FC } from "react"
import { IMovie } from "../../types/IMovie"

interface Props {
  movie: IMovie
}

export const MovieCard: FC<Props> = ({ movie }) => {
  return (
    <div className="group [perspective:1000px] w-[240px] h-[400px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Frente de la carta */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden shadow-2xl border-2">
          <div className="w-[100%] text-center bg-slate-700/70 text-white h-[15%] absolute flex items-center">
          <p className="text-sm font-black m-auto">{movie.Title}</p>
          </div>
          <img src={movie.Poster} alt={movie.Title} className="w-full h-full object-fill"  onError={
            (e) => { 
              e.currentTarget.onerror = null 
              e.currentTarget.src = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            }

          }/>
        </div>

        {/* Dorso de la carta */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gray-900 text-white rounded-xl p-4 flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold mb-2 text-center">{movie.Title}</h2>
          <p className="text-sm capitalize">{movie.Type}</p>
          <p className="text-sm">{movie.Year}</p>
        </div>

      </div>
    </div>
  )
}
