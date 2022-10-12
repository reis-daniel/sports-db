// Styling
import "./Filterdropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
// Zustand
import useFilterStore from "../../Stores/useFilterStore";
import useCountriesStore from "../../Stores/useCountriesStore";
import useSportsStore from "../../Stores/useSportsStore";

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

  return (
    <div className="filterdropdown-container">
      {/* COUNTRIES */}
      <div className="dropdown-container">
        <div className="filtered-items">
          {filteredCountries.length > 0
            ? filteredCountries.map((item, index) => {
                return (
                  <div key={item + index} className="item">
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      size="m"
                      onClick={() => {
                        removeFilteredLeagues(item);
                        removeFilteredCountries(item);
                      }}
                    />

                    <p key={index}>{item}</p>
                  </div>
                );
              })
            : null}
        </div>
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
                          id={country.name_en.replace(" ", "").toLowerCase()}
                          defaultChecked={
                            filteredCountries.includes(country.name_en)
                              ? true
                              : false
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              //! Option is selected
                              console.log("Checked!: " + e.target.value);
                              fetchFilteredLeagues(e.target.value);
                              addFilteredCountry(e.target.value);
                            } else {
                              //! Option is unselected
                              console.log("Unchecked!: " + e.target.value);
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

      {/* SPORTS */}
      <div className="dropdown-container">
        <div className="filtered-items">
          {filteredSports.length > 0
            ? filteredSports.map((item, index) => {
                return (
                  <div key={item + index} className="item">
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      size="m"
                      onClick={() => {
                        removeFilteredSport(item);
                      }}
                    />
                    <p key={index}>{item}</p>
                  </div>
                );
              })
            : null}
        </div>
        <div className="filter-options">
          <div
            className={`options-title ${showSportsOptions ? "open" : "hide"}`}
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
              className={`options-list ${showSportsOptions ? "open" : "hide"}`}
            >
              <li className="item">
                <button
                  className="clearBtn"
                  id="clearSport"
                  onClick={() => {
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
    </div>
  );
}
