// Routing
import { Link } from "react-router-dom";

import "./LeagueList.scss";

// Zustand
import useLeaguesStore from "../../Stores/useLeaguesStore";
import useFilterStore from "../../Stores/useFilterStore";

export default function LeagueList() {
  const { leagues, leaguesOfCountries } = useLeaguesStore((state) => ({
    leagues: state.leagues,
    leaguesOfCountries: state.leaguesOfCountries,
  }));
  const { filteredSports } = useFilterStore((state) => ({
    filteredSports: state.filteredSports,
  }));
  console.log(leaguesOfCountries);
  return (
    <section className="leagues-list">
      <article className="leagues-list-items">
        {leagues
          .filter((item) => {
            if (filteredSports.length > 0)
              return filteredSports.includes(item.strSport);
            else return item;
          })
          .map((league) => (
            <div className="leagueRow" key={league.idLeague}>
              <Link
                to={`/${league.strLeague}`}
                key={league.idLeague}
                className="underline"
              >
                <p>
                  {league.strLeague}
                  <span>{league.strSport}</span>
                </p>
              </Link>
            </div>
          ))}
      </article>
    </section>
  );
}
