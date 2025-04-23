import React, { useState, useEffect } from "react";

const CinemaHall = ({ movieId, onSaveSeats }) => {
  const rows = 5;
  const seatsPerRow = 8;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  // Завантажити зайняті місця з localStorage
  useEffect(() => {
    const booking = localStorage.getItem(`booking-${movieId}`);
    if (booking) {
      const parsed = JSON.parse(booking);
      setBookedSeats(parsed.seats || []);
    }
  }, [movieId]);

  const toggleSeat = (row, seat) => {
    const seatId = `${row}-${seat}`;

    if (bookedSeats.includes(seatId)) return; // не можна вибрати зайняте

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  useEffect(() => {
    onSaveSeats && onSaveSeats(selectedSeats);
    localStorage.setItem(`booking-seats-${movieId}`, JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  return (
    <div className="cinema-hall">
      <h3>Оберіть місця:</h3>
      <div className="hall-grid">
        {[...Array(rows)].map((_, row) => (
          <div key={row} className="hall-row">
            {[...Array(seatsPerRow)].map((_, seat) => {
              const seatId = `${row}-${seat}`;
              const isSelected = selectedSeats.includes(seatId);
              const isBooked = bookedSeats.includes(seatId);
              return (
                <div
                  key={seatId}
                  className={`seat ${isSelected ? "selected" : ""} ${isBooked ? "booked" : ""}`}
                  onClick={() => toggleSeat(row, seat)}
                  title={isBooked ? "Зайняте" : "Доступне"}
                >
                  {seat + 1}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <p>Вибрані місця: {selectedSeats.join(", ") || "немає"}</p>
    </div>
  );
};

export default CinemaHall;
