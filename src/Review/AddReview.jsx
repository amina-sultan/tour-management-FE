import React, { useState } from 'react';
import axios from 'axios';
import './AddReview.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

const AddReview = () => {
  const [feedback, setFeedback] = useState('');
  const [image, setImage] = useState(null);
  const [userId] = useState(4);
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
    try {
      const response = await axios.post('http://localhost:5260/api/Reviews', {
        feedback: feedback,
        userId: userId,
        imageUrl: image
      });
      navigate('/ReviewList');
      console.log(response.data);
    } catch (error) {
      console.error('Error creating review:', error.response.data);
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
