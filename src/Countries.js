import React from "react";
import "./Countries.css";
import { useData } from "./PostProvider";
const Countries = () => {
  const { data } = useData();
  return (
    <div className="countries">
      {data.map((list) => (
        <CountryItems data={list} key={list.id} />
      ))}
    </div>
  );
};

const CountryItems = ({ data }) => {
  return (
    <div className="country-item">
      <h2 className="title-1">{data.countryCode}</h2>
      <h3 className="title-1">{data.country}</h3>
    </div>
  );
};
export default Countries;
