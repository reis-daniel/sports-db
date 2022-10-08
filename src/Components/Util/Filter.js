import React from "react";
import Filterdropdown from "./Filterdropdown";
import "./Filter.scss";
// Zustand
import useFilterStore from "../../Stores/useFilterStore";

const Filter = () => {
  const { filteredCountries, filteredSports } = useFilterStore((state) => ({
    filteredCountries: state.filteredCountries,
    filteredSports: state.filteredSports,
  }));

  return (
    <div className="filterbar">
      <div className="filteritems-countries">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((item, index) => {
            return <p key={index}>{item}</p>;
          })
        ) : (
          <p>Leer!</p>
        )}
      </div>
      <div>
        {filteredSports.length > 0 ? (
          filteredSports.map((item, index) => {
            return <p key={index}>{item}</p>;
          })
        ) : (
          <p>Leer!</p>
        )}
      </div>
      <Filterdropdown />
    </div>
  );
};

export default Filter;
