import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MyBooking.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.Id
    const token = localStorage.getItem('token');
    if (!user || !token) {
      alert('You must be logged in to view your bookings.');
      navigate('/login');
      return;
    }
    fetchBookings(userId);
  }, [navigate]);

  const fetchBookings = (userId) => {
    const token = localStorage.getItem('token');
    axios.get(`http://localhost:5260/api/Bookings/mybookings?userId=${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(response => {
      setBookings(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching bookings:', error.response?.data || error.message);
      setLoading(false);
    });
  };

  return (
    <div className="my-bookings-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {bookings.length === 0 ? (
            <p>You have no bookings.</p>
          ) : (
            <div>
              <h2>Your Bookings</h2>
              <div className="booking-list">
                {bookings.map((booking, index) => (
                  <table key={booking.Id} className="booking-table">
                    <thead>
                      <tr style={{ backgroundColor: `hsl(${index * 45}, 70%, 60%)` }}>
                        <th colSpan="2">Booking {booking.Id}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Total Cost</td>
                        <td>{booking.TotalCost}</td>
                      </tr>
                      <tr>
                        <td>Booking Date</td>
                        <td>{new Date(booking.BookingDate).toLocaleDateString()}</td>
                      </tr>
                      <tr>
                        <td>Tour Date</td>
                        <td>{new Date(booking.TourDate).toLocaleDateString()}</td>
                      </tr>
                      <tr>
                        <td>Payment Method</td>
                        <td>{booking.PaymentMethod}</td>
                      </tr>
                      <tr>
                        <td>Payment Status</td>
                        <td>{booking.Status}</td>
                      </tr>
                      <tr>
                        <td>User Name</td>
                        <td>{booking.UserName}</td>
                      </tr>
                      <tr>
                        <td>Destination Name</td>
                        <td>{booking.DestinationName}</td>
                      </tr>
                    </tbody>
                  </table>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyBooking;
