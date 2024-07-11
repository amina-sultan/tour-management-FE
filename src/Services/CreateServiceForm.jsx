import React, { useState } from 'react';
import axios from 'axios';
import './CreateServiceForm.css';
import ImageSlider from '../ImageSlider/ImageSlider';
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
    userId: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
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
        userId: '',
      });
      toast.success('Service Created successfullly!', {
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
      <ImageSlider />
      <h2 className='service-heading'>Services</h2>
      <form onSubmit={handleSubmit} className="create-service-form">
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
        <div className="checkbox-container">
          <input htmlFor="checkboxGuid"
            type="checkbox"
            name="isRequiredPersonalGuide"
            checked={formData.isRequiredPersonalGuide}
            onChange={handleChange}
          />
          <label>Personal Guide Required</label>
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
          <input
            type="number"
            name="destinationId"
            value={formData.destinationId}
            onChange={handleChange}
            placeholder="Destination ID"
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            placeholder="User ID"
            required
          />
        </div>
        <button type="submit" className='create-service-button'>Create Service</button>
      </form>
    </div>
  );
};

export default CreateServiceForm;
