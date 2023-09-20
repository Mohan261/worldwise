import React from "react";
import "./Cities.css";
import { useNavigate } from "react-router-dom";
const CityItem = ({ data }) => {
  const navSelect = useNavigate();
  const handleSelect = () => {
    navSelect(`${data.id}?lat=${data.lat}&lng=${data.lng}`);
  };
  return (
    <>
      <button className="city-item" onClick={handleSelect}>
        <div className="right">
          <h4 className="title-1">{data.countryCode}</h4>
          <h4 className="title-2">{data.country}</h4>
        </div>
        <div className="left">
          <p>(October 31,2027)</p>
          <div className="close">&times;</div>
        </div>
      </button>
    </>
  );
};

export default CityItem;
