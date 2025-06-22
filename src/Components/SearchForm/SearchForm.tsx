import { FC, useState } from "react"

interface Props {
    handleSearch: (search: string) => void
}




export const SearchForm: FC<Props> = ({handleSearch}) => {

    const [searchText, setSearchText] = useState('')

  return (
    <div className="h-[10vh] bg-slate-800 flex items-center px-8 justify-between">
        <h1 className="text-white text-2xl font-black">OMDBCinema</h1>

        <form className="flex items-center rounded-sm overflow-hidden" onSubmit={(e) => {
            e.preventDefault()
            handleSearch(searchText)
            }}>
            <input type="text" placeholder="Busca una pelicula" className="w-[80%] p-1 bg-white" onChange={
                (e) => {
                    setSearchText(e.target.value)
                }
            }/>
            <button className="bg-red-500 w-[20%] p-1 cursor-pointer" type="submit"><img src="./icons/search.svg" alt="" className="m-auto"/></button>
        </form>
    </div>
  )
}
