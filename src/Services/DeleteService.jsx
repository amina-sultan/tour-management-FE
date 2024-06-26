import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteService = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.delete(`http://localhost:5260/api/services/${id}`)
      .then(response => {
        console.log(`Service with id ${id} deleted successfully`);
        setLoading(false);
        navigate('/serviceslist');
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id, navigate]);

  if (loading) return <p>Deleting...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Delete Service</h2>
      <p>Service with ID {id} has been deleted.</p>
    </div>
  );
};

export default DeleteService;
