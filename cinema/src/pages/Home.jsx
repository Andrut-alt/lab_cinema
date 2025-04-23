import React from "react";
import { movies } from "../data/movies";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
// В цьому компоненті ми просто імпортуємо дані з movies.js і передаємо їх в MovieList