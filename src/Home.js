import React from "react";
import "./Home.css";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const startNav = useNavigate();
  const handleStart = () => {
    startNav("/login");
  };
  return (
    <div className="home">
      <NavBar />
      <div className="sec">
        <h1 className="header-1">
          You travel the world.
          <br /> WorldWise keeps track of your adventures.
        </h1>
        <p className="para">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>
        <button className="btn" onClick={handleStart}>
          START TRACKING NOW
        </button>
      </div>
    </div>
  );
};

export default Home;
