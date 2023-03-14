import './App.css'
import { useState } from 'react';

import SearchMovies from './components/SearchMovies/SearchMovies';
import DisplayMovies from './components/DisplayMovies/DisplayMovies';

function App() {
  const [movies, setMovies] = useState([]); // Här sparas alla filmer från API-anropet för att kunna skickas ner till DisplayMovies

  return (
    <div className="App">
      <SearchMovies updateMovies={ setMovies } /> { /* Skickar ner setMovies som props för att kunna uppdatera movies */}
      <DisplayMovies movies={ movies } />
    </div>
  )
}

export default App
