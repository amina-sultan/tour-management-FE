import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './EditService.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditService = () => {
  const { id } = useParams();
  const [service, setService] = useState({
    Id: 0,
    NumberOfPeople: '',
    NumberOfDays: '',
    IsRequiredPersonalGuide: false,
    NoOfRoom: '',
    TourType: '',
    Description: '',
    DestinationId: 0,
    Destination: {
      Id: 0,
      DestinationName: '',
      Description: '',
      HotelCosrPerDay: 0,
      BaseCost: 0,
      ImageUrl: ''
    },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    axiosInstance.get(`/services/${id}`)
      .then(response => {
        setService(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('Destination.')) {
      const destinationField = name.split('.')[1];
      setService(prevService => ({
        ...prevService,
        Destination: {
          ...prevService.Destination,
          [destinationField]: value
        }
      }));
    } else {
      setService(prevService => ({
        ...prevService,
        [name]: value
      }));
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    axiosInstance.put(`/services/${id}`, service, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        toast.success('Service Edited successfully!', {
          position: "top-right",
          autoClose: 3000,
        });
        navigate('/serviceslist');
      })
      .catch(error => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          setModalMessage(error.response.data.error);
          setModalIsOpen(true);
        } else {
          setError(error);
        }
      });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error && !modalIsOpen) return <p>Error: {error.message}</p>;

  return (
    <div className='main-container'>
      <div className="edit-service">
        <h2>Edit Service</h2>
        {service && (
          <form onSubmit={handleSaveChanges}>
            <div className="form-group">
              <label>Number of People:</label>
              <input
                type="text"
                name="NumberOfPeople"
                value={service.NumberOfPeople}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Number of Days:</label>
              <input
                type="text"
                name="NumberOfDays"
                value={service.NumberOfDays}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Personal Guide:</label>
              <select
                name="IsRequiredPersonalGuide"
                value={service.IsRequiredPersonalGuide}
                onChange={handleChange}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
            <div className="form-group">
              <label>Number of Rooms:</label>
              <input
                type="text"
                name="NoOfRoom"
                value={service.NoOfRoom}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Tour Type:</label>
              <input
                type="text"
                name="TourType"
                value={service.TourType}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Service Description:</label>
              <textarea
                name="Description"
                value={service.Description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Destination Name:</label>
              <input
                type="text"
                name="Destination.DestinationName"
                value={service.Destination.DestinationName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Destination Description:</label>
              <textarea
                name="Destination.Description"
                value={service.Destination.Description}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Hotel Cost Per Day:</label>
              <input
                type="text"
                name="Destination.HotelCosrPerDay"
                value={service.Destination.HotelCosrPerDay}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Base Cost:</label>
              <input
                type="text"
                name="Destination.BaseCost"
                value={service.Destination.BaseCost}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Image URL:</label>
              <input
                type="text"
                name="Destination.ImageUrl"
                value={service.Destination.ImageUrl}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Save Changes</button>
          </form>
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Error Modal"
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        <h2>Error</h2>
        <p>{modalMessage}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default EditService;
