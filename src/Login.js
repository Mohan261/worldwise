import React from "react";
import "./Login.css";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const lognav = useNavigate();
  const handleLogin = () => {
    lognav("/app/cities");
  };
  return (
    <div className="login">
      <NavBar />

      <form className="form" onSubmit={handleLogin}>
        <label>Email Address</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <button className="btn log-btn" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
