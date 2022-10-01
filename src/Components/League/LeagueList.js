// React
import { useEffect, useState } from "react";
// Routing
import { Link, useNavigate } from "react-router-dom";

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
              {league.strLeague}
              <span className="league">{league.strSport}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
