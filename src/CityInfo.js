import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const CityInfo = ({ data }) => {
  const navBack = useNavigate();
  const handleBack = () => {
    navBack("/app/cities");
  };
  const { id } = useParams();
  console.log(id);
  const newData = data.find((list) => list.id == id);
  return (
    <div className="info-sec">
      <p className="heading">City Name</p>
      <h3 className="title-1">
        {newData.countryCode} {newData.city}
      </h3>
      <p className="heading">Your Notes</p>
      <p className="info">{newData.note}</p>
      <button className="back-btn" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default CityInfo;
