//? Zustand Package (State Manager) + Axios for Fetching
import create from "zustand";
import axios from "axios";

const url_leaguesOfCountry =
  "https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=";

// Creating a hook for our Leagues-Store, which contains the state of all leagues.
const useLeaguesStore = create((set) => ({
  leagues: [],
  fetchLeagues: async (url) => {
    await axios.get(url).then((response) => {
      set({
        leagues: response.data.leagues
          .filter((element) => !element.strLeague.startsWith("_"))
          .sort((a, b) => a.strLeague.localeCompare(b.strLeague)),
      });
    });
  },

  sportOfLeague: [],
  setSportOfLeague: (leagueName) => {
    set((state) => ({
      sportOfLeague:
        state.leagues.filter((l) => l.strLeague === leagueName).length > 0
          ? state.leagues.filter((l) => l.strLeague === leagueName)[0].strSport
          : "No Sport",
    }));
  },

  filteredLeagues: [],
  filterLeaguesBySport: (sport) => {
    set((state) => ({
      filteredLeagues: state.leagues.filter(
        (league) => league.strSport === sport
      ),
    }));
  },

  leaguesOfCountries: [],
  fetchLeaguesOfCountry: (country) => {
    axios.get(url_leaguesOfCountry + country).then((response) => {
      set((state) => ({
        leaguesOfCountries: [
          ...state.leaguesOfCountries,
          response.data.countries.sort((a, b) =>
            a.strLeague.localeCompare(b.strLeague)
          ),
        ],
      }));
    });
  },
}));

export default useLeaguesStore;
