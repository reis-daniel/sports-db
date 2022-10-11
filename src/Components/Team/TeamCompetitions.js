// CSS
import "./TeamCompetitions.scss";
// REACT
import React from "react";
// ZUSTAND
import useTeamsStore from "../../Stores/useTeamsStore";
// PACKAGES
import { Link } from "react-router-dom";

export default function TeamCompetitions() {
  const { team } = useTeamsStore((state) => ({ team: state.team }));
  const competitions = [
    team.strLeague,
    team.strLeague2,
    team.strLeague3,
    team.strLeague4,
    team.strLeague5,
    team.strLeague6,
    team.strLeague7,
  ];

  return (
    <section className="team-competitions">
      <p>Competitions:</p>
      <ul>
        {competitions.map((comp, index) => {
          return (
            <li key={index}>
              <Link
                to={`../${comp}`}
                className="underline"
                title={`open Link to ${comp}`}
              >
                {comp}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
