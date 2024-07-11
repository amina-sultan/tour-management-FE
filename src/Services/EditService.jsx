import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditService.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditService = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5260/api/services/${id}`)
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
    setService({ ...service, [name]: value });
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5260/api/services/${id}`, service)
      .then(response => {
        toast.success('Review Edited successfullly!', {
          position: "top-right",
          autoClose: 3000,
        });
        navigate('/serviceslist');
      })
      .catch(error => {
        setError(error);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
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
            <label>Description:</label>
            <textarea
              name="Description"
              value={service.Description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Destination ID:</label>
            <input
              type="number"
              name="DestinationId"
              value={service.DestinationId}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>User ID:</label>
            <input
              type="number"
              name="UserId"
              value={service.UserId}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      )}
    </div>
  );
};

export default EditService;
