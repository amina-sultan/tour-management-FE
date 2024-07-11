import React, { useState } from 'react';
import axios from 'axios';
import './AddReview.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = () => {
  const [feedback, setFeedback] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to add a review.');
      navigate('/login');
      return;
    }

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      alert('User information not found. Please log in again.');
      navigate('/login');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5260/api/Reviews', {
        feedback: feedback,
        userId: user.Id,
        imageUrl: image,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });

      toast.success('Review added successfully!', {
        position: "top-right",
        autoClose: 3000,
      });
      navigate('/ReviewList');
      console.log(response.data);
    } catch (error) {
      console.error('Error creating review:', error.response?.data || error.message);
    }
  };

  return (
    <div className="add-review-container">
      <h2 className="add-review-heading">Add Review</h2>
      <form className="add-review-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit" className="submit-review-button">Submit Review</button>
      </form>
      <Footer />
    </div>
  );
};

export default AddReview;
