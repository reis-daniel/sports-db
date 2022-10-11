// CSS
import "./TeamDescription.scss";
// REACT
import { React } from "react";
// ZUSTAND
import useTeamsStore from "../../Stores/useTeamsStore";

const TeamDescription = () => {
  const { team } = useTeamsStore((state) => ({ team: state.team }));
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
