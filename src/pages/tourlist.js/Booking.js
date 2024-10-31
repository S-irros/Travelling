import React, { useState, useEffect } from 'react';

function Booking() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    fetch('/data/booking.json')
      .then((response) => response.json())
      .then((data) => setBooking(data));
  }, []);

  if (!booking) return <div>Loading...</div>;

  return (
    <div>
      <h2>Booking Details</h2>
      <p><strong>Adults:</strong> {booking.Participants.Adults}</p>
      <p><strong>Children:</strong> {booking.Participants.Children}</p>
      <p><strong>Date:</strong> {booking.Date}</p>
      <p><strong>Time:</strong> {booking.Time}</p>
      <p><strong>Location:</strong> {booking.Location}</p>
      <p><strong>Coupon Code:</strong> {booking.Coupon}</p>
    </div>
  );
}

export default Booking;
