// CSS
import "./TeamLinks.scss";
// REACT
import { React } from "react";
// ZUSTAND
import useTeamsStore from "../../Stores/useTeamsStore";

const TeamLinks = () => {
  const { team } = useTeamsStore((state) => ({ team: state.team }));

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
