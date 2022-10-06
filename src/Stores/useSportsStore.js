import create from "zustand";
import axios from "axios";

// Creating a hook for our Sports-Store, which contains the state of all sports.
const useSportsStore = create((set) => ({
  sports: [],
  fetchSports: async (url) => {
    await axios.get(url).then((response) => {
      set({ leagues: response.data.sports });
    });
  },
}));

export default useSportsStore;
