import React, { useState } from "react";
import { movies as moviesData } from "../data/movies";
import MovieList from "../components/MovieList";

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Кінотеатр</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Пошук фільму..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Home;
