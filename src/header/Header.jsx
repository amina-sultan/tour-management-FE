import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li
            className={dropdown ? "option active" : "option"}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <span><Link to="/home">Home</Link></span>
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
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in">
          <Link to="/login" className="signup-btn">LOG-IN</Link>
        </li>
        <li>
          <Link to="/signup" className="signup-btn">SIGN-UP</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
