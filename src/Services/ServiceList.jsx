import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import './ServiceList.css';

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios.get('http://localhost:5260/api/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the services!', error);
      });
  }, []);

  const handleRowClick = (id) => {
    navigate(`/services/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/editservice/${id}`);
  };

  const handleDelete = (id) => {
    try {
    axios.delete(`http://localhost:5260/api/services/${id}`);
    toast.success('Review deleted successfullly!', {
      position: "top-right",
      autoClose: 3000,
      });
      setServices((prevServices) => prevServices.filter(service => service.Id !== id));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const handleBookNow = (id) => {
    navigate(`/BookingForm?serviceId=${id}`);
  };

  const handleCreateService = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (!token || !user) {
      setShowModal(true);
    } else {
      navigate('/services');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="service-list">
      <div className="header-container">
        <h1>Services List</h1>
        <button className="create-service-button" onClick={handleCreateService}>Create Service</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Destination</th>
              <th>Number of People</th>
              <th>Number of Days</th>
              <th>Personal Guide</th>
              <th>Number of Rooms</th>
              <th>Tour Type</th>
              <th>Description</th>
              <th>Book Now</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service.Id} onClick={() => handleRowClick(service.Id)}>
                <td>{service.Destination?.DestinationName}</td>
                <td>{service.NumberOfPeople}</td>
                <td>{service.NumberOfDays}</td>
                <td>{service.IsRequiredPersonalGuide ? 'Yes' : 'No'}</td>
                <td>{service.NoOfRoom}</td>
                <td>{service.TourType}</td>
                <td>{service.Description}</td>
                <td><button className="book-now-button" onClick={(e) => { e.stopPropagation(); handleBookNow(service.Id); }}>Book Now</button></td>
                <td>
                  <FontAwesomeIcon icon={faEdit} className="edit-icon action-icon" onClick={(e) => { e.stopPropagation(); handleEdit(service.Id); }} />
                  <FontAwesomeIcon icon={faTrash} className="delete-icon action-icon" onClick={(e) => { e.stopPropagation(); handleDelete(service.Id); }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        <h2>Please login or sign up before proceeding</h2>
        <div className="modal-buttons">
          <button onClick={() => navigate('/login', { state: { from: location } })}>Login</button>
          <button onClick={() => navigate('/signup', { state: { from: location } })}>Sign Up</button>
        </div>
        <button className="close-button" onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ServiceList;
