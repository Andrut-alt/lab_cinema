import React from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Бронювання місць для фільму ID: {id}</h2>
      {/* Тут буде компонент CinemaHall */}
    </div>
  );
};

export default Booking;
