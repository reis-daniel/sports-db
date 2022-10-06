import create from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

// Creating a hook for our Countries-Store, which contains the state of all countries.
const useCountriesStore = create((set) => ({
  countries: [],
  fetchCountries: (url) => {
    axios.get(url).then((response) => {
      set({ countries: response.data.countries });
    });
  },
}));

export default useCountriesStore;
