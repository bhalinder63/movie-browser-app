import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = `https://www.omdbapi.com/?apikey=8215785a`;

const App = () => {
  const [moviedata, setmoviedata] = useState([]);
  const [input, setinput] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Response === "True") {
        setmoviedata(data.Search);
      } else {
        setmoviedata([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setmoviedata([]);
    }
  };

  useEffect(() => {
    searchMovies("inception");
  }, []);

  const handleChange = (e) => {
    setinput(e.target.value);
  };

  const handleSearchClick = () => {
    if (input.trim() !== "") {
      searchMovies(input);
    }
  };

  return (
    <div className="app">
      <h1>Browse Movies</h1>
      <div className="seachbox">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search movies..."
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>

      <MovieCard moviedata={moviedata} />
    </div>
  );
};

export default App;
