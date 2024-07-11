import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const [booking, setBooking] = useState({
    TotalCost: '',
    TourDate: '',
    PaymentMethod: 'Cash',
    Status: '',
    BookingDate: new Date().toISOString(),
  });

  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('serviceId');
  const userId = 1;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCost = async () => {
      try {
        const response = await axios.post(`http://localhost:5260/api/Bookings/calculatecost?ServiceId=${serviceId}`);
        console.log('API Response:', response.data);
        setBooking(prevBooking => ({ ...prevBooking, TotalCost: response.data }));
      } catch (error) {
        console.error('There was an error fetching the total cost!', error);
      }
    };
    fetchCost();
  }, [serviceId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({
      ...booking,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingPayload = {
      serviceId: serviceId,
      totalCost: booking.TotalCost,
      bookingDate: booking.BookingDate,
      tourDate: booking.TourDate,
      userId: userId,
      paymentMethod: booking.PaymentMethod,
      status: booking.Status,
    };

    try {
      const response = await axios.post('http://localhost:5260/api/bookings', bookingPayload);
      console.log('Booking Creation Response:', response.data);
      navigate('/');
    } catch (error) {
      console.error('There was an error creating the booking!', error);
    }
  };

  return (
    <div className="booking-form-container">
      <h1>Create Booking</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Total Cost:</label>
          <input
            type="text"
            name="TotalCost"
            value={booking.TotalCost}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Tour Date:</label>
          <input
            type="date"
            name="TourDate"
            value={booking.TourDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Method:</label>
          <input
            type="text"
            name="PaymentMethod"
            value={booking.PaymentMethod}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <input
            type="text"
            name="Status"
            value={booking.Status}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Book Service</button>
      </form>
    </div>
  );
};

export default BookingForm;
