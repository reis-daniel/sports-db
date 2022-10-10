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
      <div className="items">
        <div className="countries-items">
          {filteredCountries.length > 0
            ? filteredCountries.map((item, index) => {
                return (
                  <div key={index} className="filteritem">
                    <button
                      value={item}
                      onClick={(e) => {
                        removeFilteredLeagues(e.target.value);
                        removeFilteredCountries(e.target.value);
                      }}
                    >
                      X
                    </button>
                    <p key={index}>{item}</p>
                  </div>
                );
              })
            : null}
        </div>
        <div className="sports-items">
          {filteredSports.length > 0
            ? filteredSports.map((item, index) => {
                return (
                  <div key={index} className="filteritem">
                    <button
                      value={item}
                      onClick={(e) => {
                        removeFilteredSport(e.target.value);
                      }}
                    >
                      X
                    </button>
                    <p key={index}>{item}</p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <Filterdropdown className="filterdropdown" />
    </div>
  );
};

export default Filter;
