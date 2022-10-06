import React from "react";
import { Link } from "react-router-dom";
import "./TeamCompetitions.scss";

export default function TeamCompetitions({ team }) {
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
              <Link to={`../${comp}`} className="underline">
                {comp}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
