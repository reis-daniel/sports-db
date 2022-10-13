import React from "react";
import Filterdropdown from "./Filterdropdown";
import "./Filter.scss";

const Filter = () => {
  return (
    <div className="filterbar">
      <Filterdropdown className="filterdropdown" />
    </div>
  );
};

export default Filter;
