import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './BookingForm.css';

const BookingForm = () => {
  const [booking, setBooking] = useState({
    TotalCost: '',
    TourDate: '',
    PaymentMethod: 'Cash',
    Status: 'Pending',
    BookingDate: new Date().toISOString(),
    userName: '',
    contact: '',
    CNIC: ''
  });

  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('serviceId');
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
    setBooking(prevBooking => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingPayload = {
      serviceId: serviceId,
      totalCost: booking.TotalCost,
      bookingDate: booking.BookingDate,
      tourDate: booking.TourDate,
      paymentMethod: booking.PaymentMethod,
      Status: booking.Status,
      userName: booking.userName,
      contact: booking.contact,
      CNIC: booking.CNIC
    };

    try {
      const response = await axios.post('http://localhost:5260/api/bookings', bookingPayload);
      console.log('Booking Creation Response:', response.data);
      toast.success('You have booked your service successfully! Please go to Bookings tab and check last booking to see your bookings', {
        position: "top-right",
        autoClose: 3000,
      });
      navigate('/');
    } catch (error) {
      console.error('There was an error creating the booking!', error);
    }
  };

  return (
    <div className="booking-form-container">
      <h1>Create Booking</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
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
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>User Name:</label>
            <input
              type="text"
              name="userName"
              value={booking.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact:</label>
            <input
              type="text"
              name="contact"
              value={booking.contact}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>CNIC:</label>
            <input
              type="text"
              name="CNIC"
              value={booking.CNIC}
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
        </div>
        <div className="form-group">
          <label>Payment Status:</label>
          <select name="Status" value={booking.Status} onChange={handleChange} required>
            <option value="Pending">Pending</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <button type="submit">Book Service</button>
      </form>
    </div>
  );
};

export default BookingForm;
