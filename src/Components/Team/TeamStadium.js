import React from "react";
import "./TeamStadium.scss";

import axios from "axios";
// React
import { useEffect, useState } from "react";
// Routing
import { useLocation, useParams } from "react-router-dom";

const TeamStadium = () => {
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
  return (
    <section className="team-stadium">
      {/* CHECK FOR STADIUM INFORMATIONS AND AVOID H3 IF THERES NOTHING TO SHOW */}
      {(team.strStadiumDescription === "" ||
        team.strStadiumDescription === "null" ||
        team.strStadiumDescription === null ||
        team.strStadiumDescription === 0 ||
        team.strStadiumDescription === "0") &&
      (team.strStadium === "" ||
        team.strStadium === "null" ||
        team.strStadium === null ||
        team.strStadium === 0 ||
        team.strStadium === "0") &&
      (team.intStadiumCapacity === "" ||
        team.intStadiumCapacity === "null" ||
        team.intStadiumCapacity === null ||
        team.intStadiumCapacity === 0 ||
        team.intStadiumCapacity === "0") ? (
        ""
      ) : (
        <h3>Stadium</h3>
      )}
      {/* CHECK FOR STADIUM DESCRIPTION AND AVOID ARTICLE IF STRSTADIUMDESCRIPTION IS NULL */}
      {team.strStadiumDescription === "" ||
      team.strStadiumDescription === "null" ||
      team.strStadiumDescription === null ||
      team.strStadiumDescription === 0 ||
      team.strStadiumDescription === "0" ? (
        ""
      ) : (
        <article className="team-stadium-description">
          <p>{team.strStadiumDescription}</p>
        </article>
      )}
      {/* CHECK FOR STADIUM FACTS AND AVOID ARTICLE IF ARTICLE IS EMPTY */}
      {(team.strStadium === "" ||
        team.strStadium === "null" ||
        team.strStadium === null ||
        team.strStadium === 0 ||
        team.strStadium === "0") &&
      (team.intStadiumCapacity === "" ||
        team.intStadiumCapacity === "null" ||
        team.intStadiumCapacity === null ||
        team.intStadiumCapacity === 0 ||
        team.intStadiumCapacity === "0") ? (
        ""
      ) : (
        <article className="stadiumHome">
          {team.strStadium === "" ||
          team.strStadium === "null" ||
          team.strStadium === null ||
          team.strStadium === 0 ||
          team.strStadium === "0" ? (
            ""
          ) : (
            <>
              <h3>{team.strStadium}</h3>
              <p>Home</p>
            </>
          )}
          {team.intStadiumCapacity === "" ||
          team.intStadiumCapacity === "null" ||
          team.intStadiumCapacity === null ||
          team.intStadiumCapacity === 0 ||
          team.intStadiumCapacity === "0" ? (
            ""
          ) : (
            <>
              <h3>{team.intStadiumCapacity}</h3>
              <p>Capacity</p>
            </>
          )}
        </article>
      )}
    </section>
  );
};

export default TeamStadium;
