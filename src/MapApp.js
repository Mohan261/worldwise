import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./MapApp.css";
import LoginProfile from "./LoginProfile";
import Map from "./Map";

const MapApp = () => {
  return (
    <div className="map-app-sec">
      <div className="content">
        <div className="logo-1">
          <Link to="/home">
            <img src="../Assets/logo.png" alt="Logo" />
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
      <div className="map-sec">
        <div className="prof-sec">
          <LoginProfile />
        </div>
        <Map />
      </div>
    </div>
  );
};

export default MapApp;
