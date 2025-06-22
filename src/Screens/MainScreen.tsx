import { useState } from "react";
import { SearchForm } from "../Components/SearchForm/SearchForm";
import { searchByString } from "../crud/crudMovies";
import { IMovie } from "../types/IMovie";
import { Loader } from "../Components/Loader/Loader";
import { MovieList } from "../Components/MovieList/MovieList";
import { Footer } from "../Components/Footer/Footer";

export const MainScreen = () => {
    const [loading, setLoading] = useState(false)
    const [firstSearch, setFirstSearch] = useState(false)
    const [movies, setMovies] = useState<IMovie[]>([])
    const resolvedora = async (search: string) => {
      setLoading(true)
      setFirstSearch(true)

    const response = await searchByString(search)
    
    setMovies(response)
     setLoading(false)  

  }


 

  return (
    <>
    <SearchForm handleSearch={resolvedora}/>
    {loading ?  (<Loader></Loader>) : (<MovieList  firstSearch={firstSearch} moviesArray={movies}/>)}
    <Footer/>
    </>
  );
};