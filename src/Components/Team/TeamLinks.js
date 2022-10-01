import React from "react";
import "./TeamLinks.scss";

import axios from "axios";
// React
import { useEffect, useState } from "react";
// Routing
import { useLocation, useParams } from "react-router-dom";

const TeamLinks = () => {
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
  console.log(team);
  return (
    <section className="team-links">
      <article className="team-links-details">
        <ul>
          <li>
            <a href={team.strWebsite}>Website</a>
          </li>
          <li>
            <a href={team.strFacebook}>Facebook</a>
          </li>
          <li>
            <a href={team.strTwitter}>Twitter</a>
          </li>
          <li>
            <a href={team.strInstagram}>Instagram</a>
          </li>
          <li>
            <a href={team.strYoutube}>Youtube</a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default TeamLinks;
