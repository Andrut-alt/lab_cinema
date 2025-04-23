import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../data/movies";
import CinemaHall from "../components/CinemaHall";
import BookingForm from "../components/BookingForm";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ ПРАВИЛЬНЕ МІСЦЕ
  const movie = movies.find((m) => m.id === parseInt(id));
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(`booking-seats-${id}`);
    if (saved) {
      setSelectedSeats(JSON.parse(saved));
    }
  }, [id]);

  if (!movie) return <p>Фільм не знайдено</p>;

  return (
    <div>
      <button onClick={() => navigate("/")} className="back-button">
        ← Назад до фільмів
      </button>

      <h2>Бронювання для: {movie.title}</h2>
      <p><b>Сеанс:</b> {movie.session}</p>
      <CinemaHall movieId={movie.id} onSaveSeats={setSelectedSeats} />
      {selectedSeats.length > 0 && (
        <BookingForm movieId={movie.id} seats={selectedSeats} />
      )}
    </div>
  );
};

export default Booking;
