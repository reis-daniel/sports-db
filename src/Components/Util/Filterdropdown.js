import React, { useEffect, useRef } from "react";
// Styling
import "./Filterdropdown.scss";
// Zustand
import useCountriesStore from "../../Stores/useCountriesStore";
import useSportsStore from "../../Stores/useSportsStore";

import { useState } from "react";

export default function Filterdropdown() {
  const [showCountriesOptions, setShowCountriesOptions] = useState(false);
  const [showSportsOptions, setShowSportsOptions] = useState(false);

  // Zustande
  const { countries } = useCountriesStore((state) => ({
    countries: state.countries,
  }));
  const { sports } = useSportsStore((state) => ({
    sports: state.sports,
  }));

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
                        id="checkCountry"
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
                        id="checkSport"
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
