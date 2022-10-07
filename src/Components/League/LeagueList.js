// Routing
import { Link } from "react-router-dom";

import "./LeagueList.scss";

export default function LeagueList({ leagues }) {
  return (
    <div>
      <div className="homeLeagues">
        {leagues.map((league) => (
          <div className="leagueRow" key={league.idLeague}>
            <Link
              to={`/${league.strLeague}`}
              key={league.idLeague}
              className="linkLeague"
            >
              <p className="hoverLeague">
                {league.strLeague}
                <span className="league">{league.strSport}</span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
