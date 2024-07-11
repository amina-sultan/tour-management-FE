// ServiceList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './ServiceList.css';

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5260/api/services')
      .then(response => {
        setServices(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the services!', error);
      });
  }, []);

  const handleEdit = (id) => {
    navigate(`/editservice/${id}`);
  };

  const handleDelete = (id) => {
    navigate(`/deleteservice/${id}`);
  };

  const handleBookNow = (id) => {
    navigate(`/BookingForm?serviceId=${id}`);
  };

  const handleCreateService = () => {
    navigate('/services');
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
              <th>Number of People</th>
              <th>Number of Days</th>
              <th>Personal Guide</th>
              <th>Number of Rooms</th>
              <th>Tour Type</th>
              <th>Description</th>
              <th>Destination ID</th>
              <th>Book Now</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service.Id}>
                <td>{service.NumberOfPeople}</td>
                <td>{service.NumberOfDays}</td>
                <td>{service.IsRequiredPersonalGuide ? 'Yes' : 'No'}</td>
                <td>{service.NoOfRoom}</td>
                <td>{service.TourType}</td>
                <td>{service.Description}</td>
                <td>{service.DestinationId}</td>
                <td><button className="book-now-button" onClick={() => handleBookNow(service.Id)}>Book Now</button></td>
                <td>
                  <FontAwesomeIcon icon={faEdit} className="edit-icon action-icon" onClick={() => handleEdit(service.Id)} />
                  <FontAwesomeIcon icon={faTrash} className="delete-icon action-icon" onClick={() => handleDelete(service.Id)} />
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
        <h2>Please login or sign up before booking a service</h2>
        <div className="modal-buttons">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
        <button className="close-button" onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ServiceList;
