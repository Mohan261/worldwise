import React from "react";
import "./Pricing.css";
import NavBar from "./NavBar";
const Pricing = () => {
  return (
    <div className="pricing">
      <NavBar />
      <div className="cont">
        <div className="side">
          <h1 className="header">Simple pricing. Just $9/month.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <div className="side">
          <img src="./Assets/img-2.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
