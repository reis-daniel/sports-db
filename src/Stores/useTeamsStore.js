//? Zustand Package (State Manager) + axios for fetching
import create from "zustand";
import axios from "axios";

// Creating a hook for our Leagues-Store, which contains the state of all leagues.
const useTeamsStore = create((set) => ({
  teams: [],
  team: {},
  filteredTeams: [],
  teamCompetitions: [],
  fetchTeams: async (url) => {
    await axios.get(url).then((response) => {
      set({ teams: response.data.teams });
    });
  },
  setTeam: (teamName) => {
    set((state) => ({
      team: state.teams.filter((t) => t.strTeam === teamName)[0],
    }));
  },
  filterTeamByCountry: (country) => {
    set((state) => ({
      filteredTeams: state.teams.filter((team) => team.strCountry === country),
    }));
  },
}));

export default useTeamsStore;
