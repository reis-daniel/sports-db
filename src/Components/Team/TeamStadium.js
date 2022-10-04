import React from "react";
import "./TeamStadium.scss";

import axios from "axios";
// React
import { useEffect, useState } from "react";
// Routing
import { useLocation, useParams } from "react-router-dom";

const TeamStadium= () => {
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
  }, []);
  return (
    <section className="team-stadium">
      <article className="team-stadium-description">
        <h3>Stadium</h3>
        <p>{team.strStadiumDescription}</p>
        </article>
        <article className="stadiumHome">
            <h3>{team.strStadium}</h3>
            <p>Home</p>
            <h3>{team.intStadiumCapacity}</h3>
            <p>Capacity</p>
        </article>
      
    </section>
  );
};

export default TeamStadium;