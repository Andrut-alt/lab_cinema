import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data/movies";
import CinemaHall from "../components/CinemaHall";

const Booking = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <p>Фільм не знайдено</p>;
  }

  return (
    <div>
      <h2>Бронювання для: {movie.title}</h2>
      <p><b>Сеанс:</b> {movie.session}</p>
      <CinemaHall movieId={movie.id} />
    </div>
  );
};

export default Booking;
