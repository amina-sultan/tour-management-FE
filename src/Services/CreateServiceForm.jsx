import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreateServiceForm.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateServiceForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    numberOfPeople: '',
    numberOfDays: '',
    isRequiredPersonalGuide: false,
    noOfRoom: '',
    tourType: '',
    description: '',
    destinationId: '',
  });
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setFormData(prevState => ({
        ...prevState,
        userId: user.Id
      }));
    }

    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get('http://localhost:5260/api/Destination');
      console.log('Fetched destinations:', response.data);
      setDestinations(response.data);
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleDestinationChange = (e) => {
    const selectedDestinationId = e.target.value;
    setFormData({
      ...formData,
      destinationId: selectedDestinationId,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5260/api/services', formData);
      console.log('Service created:', response.data);
      setFormData({
        numberOfPeople: '',
        numberOfDays: '',
        isRequiredPersonalGuide: false,
        noOfRoom: '',
        tourType: '',
        description: '',
        destinationId: '',
      });
      toast.success('Service Created successfully!', {
        position: "top-right",
        autoClose: 3000,
      });
      navigate('/serviceslist');
    } catch (error) {
      console.error('Error creating service:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-service-form">
      <h2 className='service-heading'>Create Services</h2>
        <div>
          <input
            type="text"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            placeholder="Number of People"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="numberOfDays"
            value={formData.numberOfDays}
            onChange={handleChange}
            placeholder="Number of Days"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="noOfRoom"
            value={formData.noOfRoom}
            onChange={handleChange}
            placeholder="Number of Rooms"
          />
        </div>
        <div>
          <input
            type="text"
            name="tourType"
            value={formData.tourType}
            onChange={handleChange}
            placeholder="Tour Type"
            required
          />
        </div>
        <div>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>
        <div>
          <select
            name="destinationId"
            value={formData.destinationId}
            onChange={handleDestinationChange}
            placeholder="Select Destination"
            required
          >
            <option value="" disabled>Select Destination</option>
            {destinations.length > 0 ? (
              destinations.map(destination => (
                <option key={destination.Id} value={destination.Id}>{destination.DestinationName}</option>
              ))
            ) : (
              <option value="" disabled>No destinations available</option>
            )}
          </select>
        </div>
        <div className="checkbox-container">
          <input htmlFor="checkboxGuid"
            type="checkbox"
            name="isRequiredPersonalGuide"
            checked={formData.isRequiredPersonalGuide}
            onChange={handleChange}
          />
          <label>Personal Guide Required</label>
        </div>
        <button type="submit" className='create-service-button'>Create Service</button>
      </form>
    </div>
  );
};

export default CreateServiceForm;
