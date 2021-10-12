import './App.css';
import CreateCards from './component/MovieCard/CreateCards';
import { useState } from 'react';
import Movies from './Data';
import FilterBar from './component/Filter/FilterBar';


function App() {
  
  const [movies, setMovies] = useState(Movies);
  const [searchRate, setSearchRate] = useState(0);
  const [search, setSearch] = useState("")
  
  const addNewMovie = (x) => {
    setMovies([...movies, x])
  }


  return (
    <div className="App">

     <FilterBar
        setSearch={setSearch}  
        setSearchRate={setSearchRate}
        searchRate = {searchRate} /> 
     <CreateCards className="create" 
     movies={Movies.filter(el => el.MovieTitle.toLowerCase().includes(search.toLowerCase().trim()) &&
     el.Rating >= searchRate)} /> 
    </div>
  );
}

export default App;
