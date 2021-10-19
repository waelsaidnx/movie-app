import './App.css';
import CreateCards from './component/MovieCard/CreateCards';
import { useState } from 'react';
import Movies from './Data';
import MovieDetail from './component/MovieList/MovieDetail';
import FilterBar from './component/Filter/FilterBar';
import { Route, Switch } from 'react-router-dom';

function App() {

  const [searchRate, setSearchRate] = useState(0);
  const [search, setSearch] = useState("")
  


  return (
    <div className="App">
     <FilterBar
        setSearch={setSearch}  
        setSearchRate={setSearchRate}
        searchRate = {searchRate} /> 
        <Switch>
      <Route path='/' exact render={()=><CreateCards
        movies={Movies.filter(el => el.MovieTitle.toLowerCase().includes(search.toLowerCase().trim()) &&
        el.Rating >= searchRate)} key={Movies.id} /> } /> 
      <Route path='/:id' component={MovieDetail} />
      </Switch>
    </div>
       
  );
}

export default App;
