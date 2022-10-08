import create from "zustand";

// Creating a hook for our Sports-Store, which contains the state of all sports.
const useFilterStore = create((set) => ({
  shouldFilter: false,
  setShouldFilter: (filtering) => {
    set((state) => ({
      shouldFilter: filtering ? true : false,
    }));
  },
  filteredCountries: [],
  addFilteredCountry: (country) => {
    set((state) => ({
      filteredCountries: [...state.filteredCountries, country],
    }));
  },
  removeFilteredCountry: (country) => {
    set((state) => ({
      filteredCountries: state.filteredCountries.filter((c) => c !== country),
    }));
  },
  filteredSports: [],
  addFilteredSport: (sport) => {
    set((state) => ({
      filteredSports: [...state.filteredSports, sport],
    }));
  },
  removeFilteredSport: (sport) => {
    set((state) => ({
      filteredSports: state.filteredSports.filter((s) => s !== sport),
    }));
  },
}));

export default useFilterStore;
