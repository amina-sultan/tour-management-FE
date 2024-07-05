import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review, onDelete }) => {
  const handleDelete = () => {
    onDelete(review.Id);
  };

  return (
    <div className="review">
      <div className="review-image">
        <img src={review.ImageUrl || 'default-image.jpg'} alt="Review" />
      </div>
      <div className="review-content">
        <h2>{review.User.FirstName} {review.User.LastName}</h2>
        <p>{review.Feedback}</p>
        <div className="review-actions">
          <Link to={`/editreview/${review.Id}`}>
            <FontAwesomeIcon icon={faEdit} className="edit-icon" />
          </Link>
          <button onClick={handleDelete} className="delete-button">
            <FontAwesomeIcon icon={faTrash} className="delete-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
