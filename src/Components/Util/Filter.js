import React from "react";
import Filterdropdown from "./Filterdropdown";
import "./Filter.scss";
// Zustand
import useFilterStore from "../../Stores/useFilterStore";

const Filter = () => {
  const {
    filteredCountries,
    filteredSports,
    removeFilteredCountries,
    removeFilteredSport,
    removeFilteredLeagues,
  } = useFilterStore((state) => ({
    filteredCountries: state.filteredCountries,
    filteredSports: state.filteredSports,
    removeFilteredCountries: state.removeFilteredCountries,
    removeFilteredSport: state.removeFilteredSport,
    removeFilteredLeagues: state.removeFilteredLeagues,
  }));

  return (
    <div className="filterbar">
      <Filterdropdown className="filterdropdown" />
    </div>
  );
};

export default Filter;
