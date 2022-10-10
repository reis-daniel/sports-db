// CSS
import "./TeamLinks.scss";
// REACT
import { React, useEffect, useState } from "react";
// PACKAGES
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const TeamLinks = () => {
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
  return (
    // CHECK FOR SOCIAL MEDIA LINKS AVOID SECTION IF THERE'S NOTHING TO SHOW
    <>
      {teamLinks[0].url === "" &&
      teamLinks[1].url === "" &&
      teamLinks[2].url === "" &&
      teamLinks[3].url === "" &&
      teamLinks[4].url === "" ? (
        ""
      ) : (
        <>
          <section className="team-links">
            <article className="team-links-details">
              <ul>
                {teamLinks.map((teamLinksElement, index) =>
                  teamLinksElement.url === "" ||
                  teamLinksElement.url === null ? (
                    ""
                  ) : (
                    <li key={index}>
                      <div key={index}>
                        <a
                          href={`https://${teamLinksElement.url}`}
                          target="_blank"
                          title={`Link to ${teamLinksElement.name}`}
                          rel="noreferrer"
                          className="underline"
                        >
                          {teamLinksElement.name}
                        </a>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </article>
          </section>
        </>
      )}
    </>
  );
};

export default TeamLinks;
