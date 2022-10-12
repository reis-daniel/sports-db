// Routing
import { Link } from "react-router-dom";

import "./LeagueList.scss";

// Zustand
import useLeaguesStore from "../../Stores/useLeaguesStore";
import useFilterStore from "../../Stores/useFilterStore";

export default function LeagueList() {
  const { leagues } = useLeaguesStore((state) => ({
    leagues: state.leagues,
  }));
  const { filteredSports, filteredLeagues, searchInput, clearFilterValues } =
    useFilterStore((state) => ({
      filteredSports: state.filteredSports,
      filteredLeagues: state.filteredLeagues,
      searchInput: state.searchInput,
      clearFilterValues: state.clearFilterValues,
    }));

  return (
    <section className="leagues-list">
      <article className="leagues-list-items">
        {filteredLeagues.length > 0
          ? filteredLeagues
              .filter((sport) => {
                if (filteredSports.length > 0)
                  return filteredSports.includes(sport.strSport);
                return sport;
              })
              .map((league) => (
                <div className="leagueRow" key={league.idLeague}>
                  <Link
                    to={`/${league.strLeague}`}
                    key={league.idLeague}
                    className="underline"
                    title={`Open Link to ${league.strLeague}`}
                    alt={`Open Link to ${league.strLeague}`}
                    onClick={() => {
                      clearFilterValues();
                    }}
                  >
                    {league.strLeague}
                    <span>{league.strSport}</span>
                  </Link>
                </div>
              ))
          : leagues
              .filter((search) => {
                if (searchInput.length > 2) {
                  return search.strLeague
                    .replace(" ", "")
                    .toLowerCase()
                    .includes(searchInput.replace(" ", "").toLowerCase());
                }
                return search;
              })
              .filter((sport) => {
                if (filteredSports.length > 0)
                  return filteredSports.includes(sport.strSport);
                return sport;
              })
              .map((league) => (
                <div className="leagueRow" key={league.idLeague}>
                  <Link
                    to={`/${league.strLeague}`}
                    key={league.idLeague}
                    className="underline"
                    title={`Open Link to ${league.strLeague}`}
                    alt={`Open Link to ${league.strLeague}`}
                    onClick={() => {
                      clearFilterValues();
                    }}
                  >
                    {league.strLeague}
                    <span>{league.strSport}</span>
                  </Link>
                </div>
              ))}
      </article>
    </section>
  );
}
