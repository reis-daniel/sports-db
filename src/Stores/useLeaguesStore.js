import create from "zustand";
import axios from "axios";

// Creating a hook for our Leagues-Store, which contains the state of all leagues.
const useLeaguesStore = create((set) => ({
  leagues: [],
  filteredLeagues: [],
  sportOfLeague: [],
  fetchLeagues: async (url) => {
    await axios.get(url).then((response) => {
      set({ leagues: response.data.leagues });
    });
  },
  setSportOfLeague: (leagueName) => {
    set((state) => ({
      sportOfLeague: state.leagues.filter((l) => l.strLeague === leagueName)[0]
        .strSport,
    }));
  },
  filterLeaguesBySport: (sport) => {
    set((state) => ({
      filteredLeagues: state.leagues.filter(
        (league) => league.strSport === sport
      ),
    }));
  },
}));

export default useLeaguesStore;
