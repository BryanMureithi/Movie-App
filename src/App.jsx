import { useEffect, useState } from 'react';
import './App.css'
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com?apikey=50636cf8';

function App() {

  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="App">
      <div>
        <h1 className='heading'>Bryan's Movie App</h1>
        <div  className='search'>
          <input 
          type="text" 
          className='searchBar' 
          placeholder='Search Movies'
          onChange={() => {}} />
          <button 
          className='btnSearch'
          onClick={() => {}}
          >
            Search
          </button>
        </div>
      </div>
      {
        movies?.length > 0 ?
        (
          <div>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div>
            <h2>No Movies Found!</h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
 