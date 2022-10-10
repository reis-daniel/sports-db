// CSS
import "./TeamDescription.scss";
// REACT
import { React, useEffect, useState } from "react";
// PACKAGES
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const TeamDescription = () => {
  const [team, setTeam] = useState({});
  const location = useLocation();
  const params = useParams();
  const league = location.pathname.split("/")[1].replaceAll("%20", " ");

  const url_teams = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${league}`;

  useEffect(() => {
    axios.get(url_teams).then((response) => {
      // LIST OF ALL TEAMS
      let filteredTeam = response.data.teams.filter(
        (team) => team.strTeam === params.team
      )[0];
      setTeam(filteredTeam);
    });
  }, [params.team, url_teams]);
  return (
    <>
      {/* CHECK FOR DESCRIPTION AND AVOID DIV IF STRDESCRIPTIONEN IS NULL */}
      {team.strDescriptionEN === null ? (
        <section className="team-description centered">
          <img
            src={team.strTeamBadge}
            alt={`${team.strTeam}s Team Badge`}
            title={`Team Badge by ${team.strTeam}`}
            className="centered"
          />
        </section>
      ) : (
        <>
          <section className="team-description">
            <h3>Description</h3>
            <article className="team-description-details">
              <p>{team.strDescriptionEN}</p>
              <img
                src={team.strTeamBadge}
                alt={`${team.strTeam}s Team Badge`}
                title={`Team Badge by ${team.strTeam}`}
              />
            </article>
          </section>
        </>
      )}
    </>
  );
};

export default TeamDescription;
