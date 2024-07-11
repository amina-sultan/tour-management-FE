import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Review from './Review';
import './ReviewList.css';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5260/api/Reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const handleDeleteReview = async (reviewId) => {
    try {
      await axios.delete(`http://localhost:5260/api/Reviews/${reviewId}`);
      toast.success('Review deleted successfullly!', {
      position: "top-right",
      autoClose: 3000,
    });
      setReviews((prevReviews) => prevReviews.filter(review => review.Id !== reviewId));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <div className="review-list-wrapper">
      <div className="review-list-header">
        <h1 className="review-list-heading">Review List</h1>
        <Link to="/AddReview" className="add-review-button">Add Review</Link>
      </div>
      <div className="review-list-container">
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <Review key={index} review={review} onDelete={handleDeleteReview} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
