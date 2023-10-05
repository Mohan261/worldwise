import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/home">
        <div className="logo">
          <img src="./Assets/logo.png" alt="Logo" />
        </div>
      </Link>

      <div className="links">
        <ul>
          <li>
            <Link to="/pricing">
              <div className="link">PRICING</div>
            </Link>
          </li>
          <li>
            <Link to="/product">
              <div className="link">PRODUCT</div>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <div className="btn">LOGIN</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
