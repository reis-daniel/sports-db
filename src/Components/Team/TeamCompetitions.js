import React from "react";
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
    <article className="team-competitions">
      <p>Competitions:</p>
      <div>
        {competitions.map((comp, index) => {
          return (
          <h3 key={index}>{comp}</h3>
          );
        })}
      </div>
    </article>
  );
}
