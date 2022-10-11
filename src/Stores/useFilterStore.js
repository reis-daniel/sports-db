//? Zustand Package (State Manager) + axios for fetching
import create from "zustand";
import axios from "axios";

//? URL for fetching leagues of country
const url_leagueOfCountry =
  "https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=";

//? ====== Filter Store for various filter operations. ====== ?//
const useFilterStore = create((set) => ({
  //* ====== State Variables ====== *//
  searchInput: "",
  shouldFilter: false,
  showCountriesOptions: false,
  showSportsOptions: false,
  filteredCountries: [],
  filteredLeagues: [],
  filteredSports: [],

  //* ====== Set Methods ====== *//
  setSearchInput: (searchValue) => {
    set({ searchInput: searchValue });
  },
  setShouldFilter: (filtering) => {
    set(() => ({
      shouldFilter: filtering ? true : false,
    }));
  },
  setShowCountriesOptions: () => {
    set((state) => ({
      showCountriesOptions: !state.showCountriesOptions,
    }));
  },
  setShowSportsOptions: () => {
    set((state) => ({
      showSportsOptions: !state.showSportsOptions,
    }));
  },

  //* ====== Fetching Methods ====== *//
  fetchFilteredLeagues: async (country) => {
    await axios.get(`${url_leagueOfCountry}${country}`).then((response) => {
      if (response.data.countries !== null || response.data.countries > 0) {
        set((state) => ({
          filteredLeagues: [
            ...response.data.countries,
            ...state.filteredLeagues,
          ],
        }));
      }
    });
  },

  //* ====== Add Methods ====== *//
  addFilteredCountry: (country) => {
    set((state) => ({
      filteredCountries: [...state.filteredCountries, country],
    }));
  },
  addFilteredSport: (sport) => {
    set((state) => ({
      filteredSports: [...state.filteredSports, sport],
    }));
  },

  //* ====== Remove/Cleare Methods ====== *//
  removeFilteredLeagues: (country) => {
    set((state) => ({
      filteredLeagues: state.filteredLeagues.filter(
        (l) => l.strCountry !== country
      ),
    }));
  },
  removeFilteredCountries: (country) => {
    set((state) => ({
      filteredCountries: state.filteredCountries.filter((s) => s !== country),
    }));
  },
  clearFilteredCountries: () => {
    set(() => ({
      filteredCountries: [],
      filteredLeagues: [],
    }));
  },
  removeFilteredSport: (sport) => {
    set((state) => ({
      filteredSports: state.filteredSports.filter((s) => s !== sport),
    }));
  },
  clearFilteredSports: () => {
    set(() => ({
      filteredSports: [],
    }));
  },
}));

export default useFilterStore;
