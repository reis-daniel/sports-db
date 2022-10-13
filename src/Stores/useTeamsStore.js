//? Zustand Package (State Manager) + axios for fetching
import create from "zustand";
import axios from "axios";

const url_teams =
  "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=";

// Creating a hook for our Leagues-Store, which contains the state of all leagues.
const useTeamsStore = create((set) => ({
  teams: [],
  team: {},
  filteredTeams: [],
  teamCompetitions: [],
  fetchTeams: async (leagueName) => {
    await axios.get(`${url_teams}${leagueName}`).then((response) => {
      set({
        teams: response.data.teams.sort((a, b) =>
          a.strLeague.localeCompare(b.strLeague)
        ),
      });
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
