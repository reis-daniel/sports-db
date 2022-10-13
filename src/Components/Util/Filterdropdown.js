// Styling
import "./Filterdropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
// REACT
import { useRef } from "react";
// ZUSTAND
import useFilterStore from "../../Stores/useFilterStore";
import useCountriesStore from "../../Stores/useCountriesStore";
import useSportsStore from "../../Stores/useSportsStore";
// AIRBNB Outside Click
import OutsideClickHandler from "react-outside-click-handler";

export default function Dropdown() {
  // Zustand -> Get all Countries and Sports for the dropdowns, state for opening and closing the dropdowns
  const {
    filteredCountries,
    filteredSports,
    showCountriesOptions,
    toggleCountries,
    showSportsOptions,
    toggleSports,
    addFilteredSport,
    removeFilteredSport,
    clearFilteredSports,
    addFilteredCountry,
    removeFilteredCountries,
    clearFilteredCountries,
    fetchFilteredLeagues,
    removeFilteredLeagues,
  } = useFilterStore((state) => ({
    filteredCountries: state.filteredCountries,
    filteredSports: state.filteredSports,
    showCountriesOptions: state.showCountriesOptions,
    toggleCountries: state.toggleCountries,
    showSportsOptions: state.showSportsOptions,
    toggleSports: state.toggleSports,
    addFilteredCountry: state.addFilteredCountry,
    removeFilteredCountries: state.removeFilteredCountries,
    clearFilteredCountries: state.clearFilteredCountries,
    fetchFilteredLeagues: state.fetchFilteredLeagues,
    removeFilteredLeagues: state.removeFilteredLeagues,
    addFilteredSport: state.addFilteredSport,
    removeFilteredSport: state.removeFilteredSport,
    clearFilteredSports: state.clearFilteredSports,
  }));

  // Countries
  const { countries } = useCountriesStore((state) => ({
    countries: state.countries,
  }));
  // Sports
  const { sports } = useSportsStore((state) => ({
    sports: state.sports,
  }));

  const countriesOptRef = useRef();
  const sportsOptRef = useRef();

  return (
    <div className="filterdropdown-container">
      <div className="filtered-items-container">
        {filteredCountries.length > 0 ? (
          <div className="filtered-items">
            {filteredCountries.map((item, index) => {
              return (
                <div key={item + index} className="item">
                  <FontAwesomeIcon
                    className="removeFilteredItem"
                    icon={faTrashCan}
                    onClick={() => {
                      removeFilteredLeagues(item);
                      removeFilteredCountries(item);
                    }}
                  />

                  <p key={index}>{item}</p>
                </div>
              );
            })}
          </div>
        ) : null}
        {filteredSports.length > 0 ? (
          <div className="filtered-items">
            {filteredSports.map((item, index) => {
              return (
                <div key={item + index} className="item">
                  <FontAwesomeIcon
                    className="removeFilteredItem"
                    icon={faTrashCan}
                    onClick={() => {
                      removeFilteredSport(item);
                    }}
                  />
                  <p key={index}>{item}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="filtered-options-container">
        {/* COUNTRIES */}
        <OutsideClickHandler
          onOutsideClick={() => {
            showCountriesOptions && toggleCountries();
          }}
        >
          <div ref={countriesOptRef} className="dropdown-container countries">
            <div className="filter-options">
              <div
                className={`options-title ${
                  showCountriesOptions ? "open" : "hide"
                }`}
                onClick={() => {
                  toggleCountries();
                }}
              >
                <p>All Countries</p>
                {showCountriesOptions ? (
                  <FontAwesomeIcon icon={faCaretUp} size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} size="lg" />
                )}
              </div>
              {showCountriesOptions ? (
                <ul
                  className={`options-list ${
                    showCountriesOptions ? "open" : "hide"
                  }`}
                >
                  <li className="item">
                    <button
                      className="clearBtn"
                      id="clearCountry"
                      onClick={() => {
                        toggleCountries();
                        clearFilteredCountries();
                      }}
                    >
                      Click to reset
                    </button>
                  </li>
                  {showCountriesOptions
                    ? countries.map((country) => {
                        return (
                          <li className="item" key={country.name_en}>
                            <input
                              className="option-check"
                              type="checkbox"
                              name="checkCountry"
                              value={country.name_en}
                              id={country.name_en
                                .replace(" ", "")
                                .toLowerCase()}
                              defaultChecked={
                                filteredCountries.includes(country.name_en)
                                  ? true
                                  : false
                              }
                              onChange={(e) => {
                                if (e.target.checked) {
                                  fetchFilteredLeagues(e.target.value);
                                  addFilteredCountry(e.target.value);
                                } else {
                                  removeFilteredLeagues(e.target.value);
                                  removeFilteredCountries(e.target.value);
                                }
                              }}
                            />
                            <label
                              htmlFor={country.name_en
                                .replace(" ", "")
                                .toLowerCase()}
                              className="option-title"
                            >
                              {country.name_en}
                            </label>
                          </li>
                        );
                      })
                    : ""}
                </ul>
              ) : null}
            </div>
          </div>
        </OutsideClickHandler>

        {/* SPORTS */}
        <OutsideClickHandler
          onOutsideClick={() => {
            showSportsOptions && toggleSports();
          }}
        >
          <div ref={sportsOptRef} className="dropdown-container sports">
            <div className="filter-options">
              <div
                className={`options-title ${
                  showSportsOptions ? "open" : "hide"
                }`}
                onClick={() => {
                  toggleSports();
                }}
              >
                <p>All Sports</p>
                {showSportsOptions ? (
                  <FontAwesomeIcon icon={faCaretUp} size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} size="lg" />
                )}
              </div>
              {showSportsOptions ? (
                <ul
                  className={`options-list ${
                    showSportsOptions ? "open" : "hide"
                  }`}
                >
                  <li className="item">
                    <button
                      className="clearBtn"
                      id="clearSport"
                      onClick={() => {
                        toggleSports();
                        clearFilteredSports();
                      }}
                    >
                      Click to reset
                    </button>
                  </li>
                  {showSportsOptions
                    ? sports.map((sport) => {
                        return (
                          <li className="item" key={sport.idSport}>
                            <input
                              className="option-check"
                              type="checkbox"
                              name="checkSport"
                              value={sport.strSport}
                              id={sport.strSport.replace(" ", "").toLowerCase()}
                              defaultChecked={
                                filteredSports.includes(sport.strSport)
                                  ? true
                                  : false
                              }
                              onChange={(e) => {
                                if (e.target.checked)
                                  addFilteredSport(e.target.value);
                                else removeFilteredSport(e.target.value);
                              }}
                            />
                            <label
                              htmlFor={sport.strSport
                                .replace(" ", "")
                                .toLowerCase()}
                              className="option-title"
                            >
                              {sport.strSport}
                            </label>
                          </li>
                        );
                      })
                    : ""}
                </ul>
              ) : null}
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
}
