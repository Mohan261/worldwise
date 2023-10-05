import React from "react";
import "./Cities.css";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import { useData } from "./PostProvider";
const CityItem = ({ data }) => {
  const { dispatch, handleDelete } = useData();
  const navSelect = useNavigate();

  const handleSelect = () => {
    navSelect(`${data.id}?lat=${data.lat}&lng=${data.lng}`);
    dispatch({ type: "lat", payload: data.lat });
    dispatch({ type: "lng", payload: data.lng });
  };
  return (
    <div className="item-sec">
      <button className="city-item" onClick={handleSelect}>
        <div className="right">
          <h4 className="title-1">{data.countryCode}</h4>
          <h4 className="title-2">{data.country}</h4>
        </div>
        <div className="left">
          <p>(October 31,2027)</p>
        </div>
      </button>
      <div className="close">
        <IconButton
          color="primary"
          aria-label="cancel"
          onClick={() => handleDelete(data.id)}
        >
          <CancelIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CityItem;
