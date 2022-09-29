import axios from "axios";
// React
import { useEffect, useState } from "react";
// Routing
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
// Components
import TeamCompetitions from "./TeamCompetitions";

export default function TeamFacts() {
  const [team, setTeam] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const league = location.pathname.split("/")[1].replaceAll("%20", " ");

  const url_teams = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${league}`;

  useEffect(() => {
    axios.get(url_teams).then((response) => {
      // Liste aller Teams
      let filteredTeam = response.data.teams.filter(
        (team) => team.strTeam === params.team
      )[0];
      setTeam(filteredTeam);
    });
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        GO BACK
      </button>
      <h2 className="linkLeague">{team.strTeam}</h2>
      <img src={team.strStadiumThumb} alt="" />
      <div>
        <h3>{team.strCountry}</h3>
        <p>Country</p>
      </div>
      <div>
        <h3>{team.strStadiumLocation}</h3>
        <p>Location</p>
      </div>
      <div>
        <h3>{team.intFormedYear}</h3>
        <p>Established</p>
      </div>
      <div>
        <h3>{team.strSport}</h3>
        <p>Sport</p>
      </div>
      <TeamCompetitions team={team} />
    </div>
  );
}
