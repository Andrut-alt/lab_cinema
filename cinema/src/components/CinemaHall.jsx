import React, { useState } from "react";
import "./CinemaHall.css"; // окремо стилі, додамо далі

const ROWS = 5;
const SEATS_PER_ROW = 8;

// Імітація зайнятих місць
const reservedSeats = [3, 4, 11, 17];

const CinemaHall = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (index) => {
    if (reservedSeats.includes(index)) return;

    setSelectedSeats((prev) =>
      prev.includes(index)
        ? prev.filter((seat) => seat !== index)
        : [...prev, index]
    );
  };

  const totalSeats = ROWS * SEATS_PER_ROW;
  const seats = Array.from({ length: totalSeats });

  return (
    <div className="cinema-hall">
      <h2>Оберіть місця</h2>
      <div className="seats">
        {seats.map((_, index) => {
          const isSelected = selectedSeats.includes(index);
          const isReserved = reservedSeats.includes(index);
          return (
            <div
              key={index}
              className={`seat ${isSelected ? "selected" : ""} ${isReserved ? "reserved" : ""}`}
              onClick={() => toggleSeat(index)}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
      <div className="selected-info">
        Обрані місця: {selectedSeats.map(i => i + 1).join(", ") || "немає"}
      </div>
    </div>
  );
};

export default CinemaHall;
