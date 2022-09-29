import React from "react";

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
  competitions.push();

  return (
    <div>
      <p>Competitions:</p>
      <div>
        {competitions.map((comp, index) => {
          return <h3 key={index}>{comp}</h3>;
        })}
      </div>
    </div>
  );
}
