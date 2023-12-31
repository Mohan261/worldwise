import React from "react";
import "./Product.css";
import NavBar from "./NavBar";
const Product = () => {
  return (
    <div className="product">
      <NavBar />
      <div className="cont">
        <div className="side">
          <img src="./Assets/img-1.jpg" alt="img" />
        </div>
        <div className="side">
          <h1 className="header">About WorldWide.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
