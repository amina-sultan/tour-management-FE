import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';
import './AddReview.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = () => {
  const [feedback, setFeedback] = useState('');
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
      setShowModal(true);
      return;
    }

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      setShowModal(true);
      return;
    }
    try {
      const response = await axiosInstance.post('/Reviews', {
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

  const closeModal = () => {
    setShowModal(false);
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
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        <h2>Please login or sign up before adding a review</h2>
        <div className="modal-buttons">
          <button onClick={() => navigate('/login', { state: { from: location } })}>Login</button>
          <button onClick={() => navigate('/signup', { state: { from: location } })}>Sign Up</button>
        </div>
        <button className="close-button" onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default AddReview;
