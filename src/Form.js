import React from "react";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Form.scss";
import { useData } from "./PostProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
const Form = () => {
  const { cityname, visitDate, note, dispatch, data } = useData();
  const [queryParam] = useSearchParams();
  const navApp = useNavigate();
  
  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      lat: queryParam.get("lat"),
      lng: queryParam.get("lng"),
      note: note,
      city: cityname,
      date: visitDate,
      country: "Country",
      countryCode: "CD",
    };
    const newData = [...data, newItem];
    dispatch({ type: "add", payload: newData });
    navApp("/app/cities");
  };
  const navBack = useNavigate();
  const handleBack = () => {
    navBack("/app/cities");
  };
  return (
    <div className="form-sec">
      <div className="inpt-grp">
        <label>City name</label>
        <input
          type="text"
          value={cityname}
          onChange={(e) =>
            dispatch({ type: "cityname", payload: e.target.value })
          }
        />
      </div>
      <div className="inpt-grp">
        <label>when did you got to?</label>
        <input
          type="text"
          value={visitDate}
          onChange={(e) =>
            dispatch({ type: "visitdate", payload: e.target.value })
          }
        />
      </div>
      <div className="inpt-grp">
        <label>Notes about your trip to</label>
        <input
          type="text"
          value={note}
          onChange={(e) => dispatch({ type: "note", payload: e.target.value })}
        />
      </div>
      <div className="btn-sec">
        <Button variant="contained" color="success" onClick={handleAdd}>
          ADD
        </Button>
        <Button
          variant="outlined"
          startIcon={<KeyboardBackspaceIcon />}
          onClick={handleBack}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default Form;
