import React, { useState } from "react";

const BookingForm = ({ movieId, seats }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email) {
      alert("Будь ласка, заповніть усі поля.");
      return;
    }

    const bookingData = {
      name,
      phone,
      email,
      seats,
      movieId,
      date: new Date().toISOString()
    };

    localStorage.setItem(`booking-${movieId}`, JSON.stringify(bookingData));
    setSubmitted(true);
  };

  if (submitted) {
    return <p>Бронювання успішне! Дякуємо, {name} 🎉</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h3>Дані користувача:</h3>

      <input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Підтвердити бронювання</button>
    </form>
  );
};

export default BookingForm;
