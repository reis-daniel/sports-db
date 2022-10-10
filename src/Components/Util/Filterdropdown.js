// Styling
import "./Filterdropdown.scss";
// Zustand
import useFilterStore from "../../Stores/useFilterStore";
import useCountriesStore from "../../Stores/useCountriesStore";
import useSportsStore from "../../Stores/useSportsStore";

export default function Dropdown() {
  // Zustand -> Get all Countries and Sports for the dropdowns, state for opening and closing the dropdowns
  const {
    showCountriesOptions,
    setShowCountriesOptions,
    showSportsOptions,
    setShowSportsOptions,
    addFilteredSport,
    removeFilteredSport,
    clearFilteredSports,
    addFilteredCountry,
    removeFilteredCountries,
    clearFilteredCountries,
    fetchFilteredLeagues,
    removeFilteredLeagues,
    filteredLeagues,
  } = useFilterStore((state) => ({
    filteredLeagues: state.filteredLeagues,

    showCountriesOptions: state.showCountriesOptions,
    setShowCountriesOptions: state.setShowCountriesOptions,

    showSportsOptions: state.showSportsOptions,
    setShowSportsOptions: state.setShowSportsOptions,

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
            <li>
              <button
                name="clearCountry"
                id="clearCountry"
                className="clearBtn"
                onClick={() => {
                  clearFilteredCountries();
                }}
              >
                Remove all
              </button>
            </li>
            {showCountriesOptions
              ? countries.map((country) => {
                  return (
                    <li className="dropdown-option" key={country.name_en}>
                      <input
                        className="option-check"
                        type="checkbox"
                        name="checkCountry"
                        value={country.name_en}
                        id={country.name_en.replace(" ", "").toLowerCase()}
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
                        htmlFor={country.name_en.replace(" ", "").toLowerCase()}
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
            <button
              name="clearSports"
              id="clearSports"
              className="clearBtn option-title"
              onClick={() => {
                clearFilteredSports();
              }}
            >
              Remove all
            </button>
            {showSportsOptions
              ? sports.map((sport) => {
                  return (
                    <div className="dropdown-option" key={sport.idSport}>
                      <input
                        className="option-check"
                        type="checkbox"
                        name="checkSport"
                        value={sport.strSport}
                        id={sport.strSport.replace(" ", "").toLowerCase()}
                        onChange={(e) => {
                          if (e.target.checked) {
                            //! Option is selected
                            console.log("Checked!: " + e.target.value);
                            addFilteredSport(e.target.value);
                          } else {
                            //! Option is unselected
                            console.log("Unchecked!: " + e.target.value);
                            removeFilteredSport(e.target.value);
                          }
                        }}
                      />
                      <label
                        className="option-title"
                        htmlFor={sport.strSport.replace(" ", "").toLowerCase()}
                      >
                        {sport.strSport}
                      </label>
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
