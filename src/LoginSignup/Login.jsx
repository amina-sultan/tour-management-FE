import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Auth.css';
import AuthContext from '../AuthContext';
import axiosInstance from '../axiosInstance';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const responseText = await response.text();
        throw new Error(responseText || 'Login failed');
      }

      toast.success('User Login successfully!', {
        position: "top-right",
        autoClose: 3000,
      });

      const responseData = await response.json();

      if (responseData.Token && responseData.User) {
        login(responseData.Token);
        localStorage.setItem('user', JSON.stringify(responseData.User));
        const from = location.state?.from?.pathname || '/';
        navigate(from);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
        <div className="signup-message">
          <p>Do not have an account? <span onClick={() => navigate('/signup')} className="signup-link">Sign Up</span></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
