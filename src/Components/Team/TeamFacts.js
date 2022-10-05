import "./TeamFacts.scss";

import axios from "axios";
// React
import { useEffect, useState } from "react";
// Routing
import { useLocation, useParams } from "react-router-dom";
// Components
import TeamCompetitions from "./TeamCompetitions";

export default function TeamFacts() {
  const [team, setTeam] = useState({});
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
  }, [params.team, url_teams]);
  console.log(team);
  return (
    <section className="team-facts">
      <article className="team-fc">
        {/* CHECK FOR THUMB AND TAKE FALLBACK IF IMG IS NULL */}
        {team.strStadiumThumb === null ? (
          <div className="imgLeague">
            <h2 className="linkLeague">{team.strTeam}</h2>
            <img
              src={`http://source.unsplash.com/1600x900/?${team.strSport}`}
              alt=""
            />
          </div>
        ) : (
          <div className="imgLeague">
            <h2 className="linkLeague">{team.strTeam}</h2>
            <img src={team.strStadiumThumb} alt="" />
          </div>
        )}
        <div className="country">
          {/* CHECK FOR COUNTRY AND AVOID DIV IF STRCOUNTRY IS NULL */}
          {team.strCountry === "" ? (
            ""
          ) : (
            <div className="countryLeague">
              <h3>{team.strCountry}</h3>
              <p>Country</p>
            </div>
          )}
          {/* CHECK FOR LOCATION AND AVOID DIV IF STRSTADIUMLOCATION IS NULL */}
          {team.strStadiumLocation === "" ? (
            ""
          ) : (
            <div className="countryLeague">
              <h3>{team.strStadiumLocation}</h3>
              <p>Location</p>
            </div>
          )}
          {/* CHECK FOR ESTABLISHED YEAR AND AVOID DIV IF INTFORMEDYEAR IS NULL */}
          {team.intFormedYear === "" ||
          team.intFormedYear === 0 ||
          team.intFormedYear === "0" ? (
            ""
          ) : (
            <div className="countryLeague">
              <h3>{team.intFormedYear}</h3>
              <p>Established</p>
            </div>
          )}
          <div className="countryLeague">
            <h3>{team.strSport}</h3>
            <p>Sport</p>
          </div>
        </div>
      </article>
      <TeamCompetitions team={team} />
    </section>
  );
}
