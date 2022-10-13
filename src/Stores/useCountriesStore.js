//? Zustand Package (State Manager) + axios for fetching
import create from "zustand";
import axios from "axios";

// Creating a hook for our Countries-Store, which contains the state of all countries.
const useCountriesStore = create((set) => ({
  countries: [],
  leaguesOfCountries: [],
  fetchCountries: (url) => {
    axios.get(url).then((response) => {
      set({
        countries: response.data.countries.sort((a, b) =>
          a.name_en.localeCompare(b.name_en)
        ),
      });
    });
  },
}));

export default useCountriesStore;
