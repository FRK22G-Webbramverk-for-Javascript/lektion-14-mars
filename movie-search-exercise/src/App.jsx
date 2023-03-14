import './App.css'
import { useState } from 'react';

import SearchMovies from './components/SearchMovies/SearchMovies';
import DisplayMovies from './components/DisplayMovies/DisplayMovies';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="App">
      <SearchMovies updateMovies={ setMovies } />
      <DisplayMovies movies={ movies } />
    </div>
  )
}

export default App
