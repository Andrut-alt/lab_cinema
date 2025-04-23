import React, { useState } from "react";

const CinemaHall = ({ movieId }) => {
  const rows = 5;
  const seatsPerRow = 8;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, seat) => {
    const seatId = `${row}-${seat}`;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBooking = () => {
    // Тимчасове збереження у localStorage (ЛР10 — буде через BookingService)
    localStorage.setItem(
      `booking-${movieId}`,
      JSON.stringify(selectedSeats)
    );
    alert("Місця заброньовано: " + selectedSeats.join(", "));
  };

  return (
    <div className="cinema-hall">
      <h3>Оберіть місця:</h3>
      <div className="hall-grid">
        {[...Array(rows)].map((_, row) => (
          <div key={row} className="hall-row">
            {[...Array(seatsPerRow)].map((_, seat) => {
              const seatId = `${row}-${seat}`;
              const isSelected = selectedSeats.includes(seatId);
              return (
                <div
                  key={seatId}
                  className={`seat ${isSelected ? "selected" : ""}`}
                  onClick={() => toggleSeat(row, seat)}
                >
                  {seat + 1}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <p>Вибрані місця: {selectedSeats.join(", ") || "немає"}</p>

      <button onClick={handleBooking} disabled={selectedSeats.length === 0}>
        Забронювати
      </button>
    </div>
  );
};

export default CinemaHall;
