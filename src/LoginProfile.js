import React from "react";
import "./LoginProfile.css";
import { useNavigate } from "react-router-dom";
import { useData } from "./PostProvider";
const LoginProfile = () => {
  const {user}=useData();
  const logout = useNavigate();
  const handleLogout = () => {
    logout('/home');
  };
  return (
    <div className="login-prof">
      <div className="prof-img">
        <img src="../Assets/img1.jpg" alt="profile" />
      </div>
      <p>Welcome,{user}</p>
      <button className="logout-btn" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
};

export default LoginProfile;
