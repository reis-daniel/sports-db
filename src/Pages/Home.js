// React
import { useEffect, useState } from "react";
// Routing
import { Link } from "react-router-dom";
// Assets
import HeaderImage from "../Images/BG_Home.png";

const Leagues = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const url_leagues =
      "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php";
    fetch(url_leagues)
      .then((response) => response.json())
      .then((data) => setLeagues(data.leagues));
  }, []);

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
              to={`/${league.idLeague}`}
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
};

export default Leagues;
