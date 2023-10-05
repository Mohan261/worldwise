import React from "react";
import CityItem from "./CityItem";
import "./Cities.css";
import { Outlet } from "react-router-dom";
import { useData } from "./PostProvider";

const Cities = () => {
  const { data } = useData();

  return (
    <div className="cities">
      <Outlet />
      {data.map((list) => (
        <CityItem data={list} key={list.id} />
      ))}
    </div>
  );
};

export default Cities;
