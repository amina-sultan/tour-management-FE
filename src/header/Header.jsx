import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/" onClick={closeMobileMenu}>
            <Logo className="logo" />
          </Link>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li
            className={dropdown ? "option active" : "option"}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <span><Link to="/">Home</Link></span>
            {dropdown && (
              <ul className="dropdown">
                <li className="dropdown-option" onClick={closeMobileMenu}>
                  <Link to="/about">About Us</Link>
                </li>
                <li className="dropdown-option" onClick={closeMobileMenu}>
                  <Link to="/how">How It Works</Link>
                </li>
                <li className="dropdown-option" onClick={closeMobileMenu}>
                  <Link to="/work">Work With Us</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="#">SERVICES</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="#">BLOG</Link>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li className="sign-in" onClick={closeMobileMenu}>
          <Link to="#">LOG-IN</Link>
        </li>
        <li onClick={closeMobileMenu}>
          <Link to="" className="signup-btn">
            SIGN-UP
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
