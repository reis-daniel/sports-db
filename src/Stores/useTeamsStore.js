//? Zustand Package (State Manager) + axios for fetching
import create from "zustand";
import axios from "axios";

// Creating a hook for our Leagues-Store, which contains the state of all leagues.
const useTeamsStore = create((set) => ({
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

export default useTeamsStore;
