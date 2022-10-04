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
  }, [params.team, url_teams]);
  return (
    <section className="team-links">
      <article className="team-links-details">
        <ul>
          <li>
            <a
              href={team.strWebsite}
              target="_blank"
              alt="Link to Website"
              rel="noreferrer"
              className="underline"
            >
              Website
            </a>
          </li>
          <li>
            <a
              href={team.strFacebook}
              target="_blank"
              alt="Link to Facebook"
              rel="noreferrer"
              className="underline"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href={team.strTwitter}
              target="_blank"
              alt="Link to Twitter"
              rel="noreferrer"
              className="underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href={team.strInstagram}
              target="_blank"
              alt="Link to Instagram"
              rel="noreferrer"
              className="underline"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href={team.strYoutube}
              target="_blank"
              alt="Link to YouTube"
              rel="noreferrer"
              className="underline"
            >
              Youtube
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default TeamLinks;
