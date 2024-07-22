import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { toast } from 'react-toastify';
import './header.css';
import AuthContext from '../AuthContext';

const Header = () => {

  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleClick = () => setClick(!click);
  const toggleDropdown = () => setDropdown(!dropdown);

  const handleSignOut = () => {
    logout();
    navigate('/');
    toast.success('User Logout successfully!', {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>

        <ul className={click ? 'nav-options active' : 'nav-options'}>
          <li
            className={dropdown ? 'option active' : 'option'}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <span><Link to="/">Home</Link></span>
            {dropdown && (
              <ul className="dropdown">
                <li className="dropdown-option">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="dropdown-option">
                  <Link to="/how">How It Works</Link>
                </li>
                <li className="dropdown-option">
                  <Link to="/work">Work With Us</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="option">
            <Link to="/serviceslist">SERVICES</Link>
          </li>
          <li className="option">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="option">
            <Link to="/bloglist">BLOG</Link>
          </li>
          <li className="option">
            <Link to="/ReviewList">REVIEW</Link>
          </li>
          <li className="option">
            <Link to="/mybookings">Bookings</Link>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        {!isLoggedIn ? (
          <>
            <li className="sign-in">
              <Link to="/login" className="signup-btn">LOG-IN</Link>
            </li>
            <li>
              <Link to="/signup" className="signup-btn">SIGN-UP</Link>
            </li>
          </>
        ) : (
          <li>
            <button onClick={handleSignOut} className="signup-btn">SIGN-OUT</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
