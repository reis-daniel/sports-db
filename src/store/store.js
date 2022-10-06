import create from "zustand";
import axios from "axios";

// Creating a hook for our Leagues-Store, which contains the state of all leagues.
export const useLeaguesStore = create((set) => ({
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

// Creating a hook for our Leagues-Store, which contains the state of all leagues.
export const useTeamsStore = create((set) => ({
  teams: [],
  filteredTeams: [],
  fetchTeams: async (url) => {
    await axios.get(url).then((response) => {
      set({ teams: response.data.teams });
    });
  },
  filterTeamByCountry: (country) => {
    set((state) => ({
      filteredTeams: state.teams.filter((team) => team.strCountry === country),
    }));
  },
}));

// Creating a hook for our Countries-Store, which contains the state of all countries.
export const useCountriesStore = create((set) => ({
  countries: [],
  fetchCountries: (url) => {
    axios.get(url).then((response) => {
      set({ leagues: response.data.countries });
    });
  },
}));
// Creating a hook for our Sports-Store, which contains the state of all sports.
export const useSportsStore = create((set) => ({
  sports: [],
  fetchSports: async (url) => {
    await axios.get(url).then((response) => {
      set({ leagues: response.data.sports });
    });
  },
}));
