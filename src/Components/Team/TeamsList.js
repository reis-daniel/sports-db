// React
import axios from "axios";
import { useEffect, useState } from "react";
// Routing
import { Link, useParams, useNavigate } from "react-router-dom";
// Assets
import HeaderImage from "../../assets/Images/BG_Home.png";

export default function TeamsList() {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  const url_teams = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${params.liga}`;

  useEffect(() => {
    axios.get(url_teams).then((response) => {
      setTeams(response.data.teams);
    });
  }, [url_teams]);
  
  // console.log("http://source.unsplash.com/1600x900/?" + teams[0].strSport);
  return (
    <div>
      <h1>{params.liga}</h1>

      {/* Codesnippet aus der Wetter-App zur weiteren Bearbeitung */}
      {/* document.body.style.backgroundImage=`url('http://source.unsplash.com/1600x900/?${name}')` */}

      {/* DIESES IMG-TAG FUNKTIONIERT EIGENTLICH. DA DIE DATEN ABER SO LANGSAM GELADEN WERDEN, ERHÄLT DIE ABFRAGE NICHT RECHTZEITIG DAS BENÖTIGTE KEYWORD. VIELLEICHT KANN MAN DIE REIHENFOLGE IRGENDWIE ERZWINGEN? */}
      {/* ----- */}
      {/* <img
        src={`http://source.unsplash.com/1600x900/?${teams[0].strSport}`}
        alt=""
      /> */}
      {/* ----- */}

      {/* DIESER BAUSTEIN HAT AUF DIESER SEITE NICHTS ZU SUCHEN, ODER? */}
      {/* ----- */}
      {/* <p className="headerCaption">
        Find your <span className="spanLeague">League</span>
      </p> */}
      {/* ----- */}

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
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        GO BACK
      </button>
    </div>
  );
}
