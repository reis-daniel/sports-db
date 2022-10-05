// React
import axios from "axios";
import { useEffect, useState } from "react";
// Routing
import { Link, useParams, useNavigate } from "react-router-dom";
// Assets
import "./TeamsList.scss";

export default function TeamsList() {
  const [teams, setTeams] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const params = useParams();

  const url_teams = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${params.liga}`;

  useEffect(() => {
    axios.get(url_teams).then((response) => {
      setTeams(response.data.teams);
      setLoading(false);
    });
  }, [url_teams]);

  if (isLoading) {
    return <div className="TeamsList_onload">Loading...</div>;
  }

  return (
    <div>
      <article className="TeamsList_firstArticle">
      <img className="TeamsList_img"
        src={`http://source.unsplash.com/1600x900/?${teams[0].strSport}`}
        alt=""
      />
      
      <h1 className="TeamsList_headline">{params.liga}</h1>
      <p className="TeamsList_Sportart">{teams[0].strSport}</p>
     
     
      </article>
     

      <div className="homeLeagues">
        {teams.map((team) => (
          <div className="leagueRow" key={team.idTeam}>
            <Link
              to={`/${params.liga}/${team.strTeam}`}
              key={team.idTeam}
              className="linkLeague"
            >
              {team.strTeam}
              <span className="league">{team.strStadiumLocation}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


