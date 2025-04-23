import React from "react";

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.poster} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p><b>Опис:</b> {movie.description}</p>
    <p><b>Жанр:</b> {movie.genre}</p>
    <p><b>Сеанс:</b> {movie.session}</p>
  </div>
);

export default MovieCard;
