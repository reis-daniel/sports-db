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
  let teamLinks = [
    {
      url: team.strWebsite,
      name: "Website",
    },
    {
      url: team.strTwitter,
      name: "Twitter",
    },
    {
      url: team.strFacebook,
      name: "Facebook",
    },
    {
      url: team.strYoutube,
      name: "YouTube",
    },
    {
      url: team.strInstagram,
      name: "Instagram",
    },
  ];
  // let teamLinksLength =
  //   Object.keys(teamLinks[0].url).length +
  //   Object.keys(teamLinks[1].url).length +
  //   Object.keys(teamLinks[2].url).length +
  //   Object.keys(teamLinks[3].url).length +
  //   Object.keys(teamLinks[4].url).length;

  return (
    <section className="team-links">
      <article className="team-links-details">
        <ul>
          {teamLinks.map((teamLinksElement, index) =>
            teamLinksElement.url === "" ? (
              ""
            ) : (
              <li key={index}>
                <a
                  href={`https://${teamLinksElement.url}`}
                  target="_blank"
                  alt={`Link to ${teamLinksElement.name}`}
                  rel="noreferrer"
                  className="underline"
                >
                  {teamLinksElement.name}
                </a>
              </li>
            )
          )}
        </ul>
      </article>
    </section>
  );
};

export default TeamLinks;
