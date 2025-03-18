//rafce - Shortcut to create a functional component
import React from 'react';
import { useState, useEffect } from 'react';
import Search from './components/search';
import MovieBanner from './components/MovieBanner';

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjEzZGQxMThiMTUwZjM5YTliNjBiM2VhYTRjMmM3MSIsIm5iZiI6MTc0MjI2MzQwOS4yMTUwMDAyLCJzdWIiOiI2N2Q4ZDQ3MTU2MmU4MzJjOTczNjRjY2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EAy5VGEW6uJ8blHs8vsBjI6Bw1NMTfOXJSw-da3OWco";
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchMovies = async () => {
    try {
      const endpoint = "https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc";
      
      const response = await fetch(endpoint, API_OPTIONS);
      alert(response);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later.");
    }
  }

useEffect(() => {
  fetchMovies();
}, [])

  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <h1>Find all your favourite movies</h1>
          < MovieBanner />
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <h1>{searchTerm}</h1>
        <section className="all-movies">
          <h2>AllMovies</h2>
        </section>
      </div>
    </main>

  )
}

export default App