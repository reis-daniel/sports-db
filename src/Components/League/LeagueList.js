// React
import { useEffect, useState } from "react";
// Routing
import { Link, useNavigate } from "react-router-dom";
// Assets
import HeaderImage from "../../assets/Images/BG_Home.png";

export default function LeagueList({ leagues }) {
  return (
    <div>
      <img className="headerImg" src={HeaderImage} alt="Sports Player" />
      <p className="headerCaption">
        Find your <span className="spanLeague">League</span>
      </p>
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
