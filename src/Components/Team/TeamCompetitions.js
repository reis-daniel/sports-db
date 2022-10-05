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
  console.log(competitions.length);

  return (
    <article className="team-competitions">
      <p>Competitions:</p>
      <ul>
        {competitions.map((comp, index) => {
          return (
            <li>
              <Link to={`../${comp}`} key={index} className="underline">
                {comp}
              </Link>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
