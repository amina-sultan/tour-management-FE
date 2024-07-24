import React, { useState, useEffect, useRef } from 'react';
import axiosInstance from '../axiosInstance';
import { useParams, useNavigate } from 'react-router-dom';
import './EditReview.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState({
    Feedback: '',
    UserId: '',
    ImageUrl: ''
  });

  const feedbackRef = useRef(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axiosInstance.get(`/Reviews/${id}`);
        setReview(response.data);
        adjustTextareaHeight(feedbackRef.current);
      } catch (error) {
        console.error('Error fetching review:', error);
      }
    };

    fetchReview();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value
    }));
    if (name === 'Feedback') {
      adjustTextareaHeight(e.target);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/Reviews/${id}`, review);
      toast.success('Review Updated successfullly!', {
        position: "top-right",
        autoClose: 3000,
      });
      navigate('/ReviewList');
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  const adjustTextareaHeight = (textarea) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  return (
    <div className="edit-review-container">
      <h2 className="edit-review-heading">Edit Review</h2>
      <form className="edit-review-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="Feedback"
            value={review.Feedback}
            onChange={handleInputChange}
            ref={feedbackRef}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="ImageUrl"
            value={review.ImageUrl}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="update-review-button">Update Review</button>
      </form>
    </div>
  );
};

export default EditReview;
