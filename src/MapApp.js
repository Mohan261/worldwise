import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./MapApp.css";
const MapApp = () => {
  return (
    <div className="map-app-sec">
      <div className="content">
        <div className="logo-1">
          <Link to="/home">
            <img src="../assets/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="map-links">
          <Link to="cities">
            <div>Cities</div>
          </Link>
          <Link to="countries">
            <div>Countries</div>
          </Link>
        </div>
        <div className="app-sec">
          <Outlet />
        </div>
      </div>
      <div className="map-sec"></div>
    </div>
  );
};

export default MapApp;
