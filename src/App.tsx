import { SearchForm } from "./Components/SearchForm/SearchForm"
import { searchByString } from "./crud/crudMovies"
import { MainScreen } from "./Screens/MainScreen"


function App() {

  
  


  return (
    <div className="bg-gradient-to-r from-blue-800 to-indigo-900 h-[100vh]">
      <MainScreen/>
    </div>
  )
}

export default App
