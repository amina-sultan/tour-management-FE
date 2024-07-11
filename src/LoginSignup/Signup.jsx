import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: 'visitor',
    address: '',
    PhonenUmber: '',
    gender: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5260/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Signup successful!');
      navigate('/');
      } else {
      alert('Signup failed: ' + data);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <div className="input-group-row">
          <div className="input-group">
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>
        <div className="input-group-row">
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
        </div>
        <div className="input-group-row">
          <div className="input-group">
            <label>Gender</label>
            <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
        </div>
        <div className="input-group-row">
          <div className="input-group">
            <label>Phone Number</label>
            <input type="text" name="PhonenUmber" value={formData.PhonenUmber} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>User Type</label>
            <select name="userType" value={formData.userType} onChange={handleChange}>
              <option value="visitor">Visitor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
