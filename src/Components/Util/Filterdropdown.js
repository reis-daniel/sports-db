import React, { useEffect, useRef } from "react";
// Styling
import "./Filterdropdown.scss";
// Zustand
import useCountriesStore from "../../Stores/useCountriesStore";
import useSportsStore from "../../Stores/useSportsStore";
import useFilterStore from "../../Stores/useFilterStore";

import { useState } from "react";
import useLeaguesStore from "../../Stores/useLeaguesStore";

export default function Filterdropdown() {
  const [showCountriesOptions, setShowCountriesOptions] = useState(false);
  const [showSportsOptions, setShowSportsOptions] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  // Zustande
  const { leaguesOfCountry, fetchLeaguesOfCountry } = useLeaguesStore(
    (state) => ({
      leaguesOfCountry: state.leaguesOfCountry,
      fetchLeaguesOfCountry: state.fetchLeaguesOfCountry,
    })
  );
  const { countries } = useCountriesStore((state) => ({
    countries: state.countries,
  }));
  const { sports } = useSportsStore((state) => ({
    sports: state.sports,
  }));
  const {
    shouldFilter,
    setShouldFilter,
    filteredCountries,
    addFilteredCountry,
    removeFilteredCountry,
    filteredSports,
    addFilteredSport,
    removeFilteredSport,
  } = useFilterStore((state) => ({
    shouldFilter: state.shouldFilter,
    setShouldFilter: state.setShouldFilter,
    filteredCountries: state.filteredCountries,
    addFilteredCountry: state.addFilteredCountry,
    removeFilteredCountry: state.removeFilteredCountry,
    filteredSports: state.filteredSports,
    addFilteredSport: state.addFilteredSport,
    removeFilteredSport: state.removeFilteredSport,
  }));

  // Handler
  const addFilteredItemHandler = async (store, item) => {
    if (store === "countries") {
      console.log(item);
      await fetchLeaguesOfCountry(item);
      addFilteredCountry(item);
    } else {
      addFilteredSport(item);
    }
    setShouldFilter(true);
  };
  const removeFilteredItemHandler = (store, item) => {
    if (store === "countries") {
      removeFilteredCountry(item);
    } else {
      removeFilteredSport(item);
    }
    if (filteredCountries.length < 0 && filteredSports.length < 0)
      setShouldFilter(false);
  };

  return (
    <div className="filterdropdown-container">
      <div className="dropdown countries">
        <div
          className={`dropdown-title ${showCountriesOptions ? "open" : "hide"}`}
          onClick={() => {
            setShowCountriesOptions(!showCountriesOptions);
          }}
        >
          <p>All Countries</p>
        </div>
        {showCountriesOptions ? (
          <ul
            className={`dropdown-optionlist ${
              showCountriesOptions ? "open" : "hide"
            }`}
          >
            {showCountriesOptions
              ? countries.map((country) => {
                  return (
                    <div className="dropdown-option" key={country.name_en}>
                      <input
                        className="option-check"
                        type="checkbox"
                        name="checkCountry"
                        value={country.name_en}
                        id="checkCountry"
                        onChange={(e) => {
                          if (e.target.checked) {
                            addFilteredItemHandler("countries", e.target.value);
                          } else {
                            removeFilteredItemHandler(
                              "countries",
                              e.target.value
                            );
                          }
                        }}
                      />
                      <li className="option-title">{country.name_en}</li>
                    </div>
                  );
                })
              : ""}
          </ul>
        ) : null}
      </div>

      <div className={`dropdown sports ${showSportsOptions ? "open" : "hide"}`}>
        <div
          className={`dropdown-title`}
          onClick={() => {
            setShowSportsOptions(!showSportsOptions);
          }}
        >
          <p>All Sports</p>
        </div>
        {showSportsOptions ? (
          <ul
            className={`dropdown-optionlist ${
              showSportsOptions ? "open" : "hide"
            }`}
          >
            {showSportsOptions
              ? sports.map((sport) => {
                  return (
                    <div className="dropdown-option" key={sport.idSport}>
                      <input
                        className="option-check"
                        type="checkbox"
                        name="checkSport"
                        value={sport.strSport}
                        id="checkSport"
                        onChange={(e) => {
                          if (e.target.checked) {
                            addFilteredItemHandler("sports", e.target.value);
                          } else {
                            removeFilteredItemHandler("sports", e.target.value);
                          }
                        }}
                      />
                      <li className="option-title">{sport.strSport}</li>
                    </div>
                  );
                })
              : ""}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
