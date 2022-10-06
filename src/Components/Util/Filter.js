import React from "react";
import Filterdropdown from "./Filterdropdown";
import "./Filter.scss";

const Filter = () => {
  return (
    <div className="filterbar">
      <div>
        <h2>Filter Items!</h2>
      </div>
      <Filterdropdown />
    </div>
  );
};

export default Filter;
