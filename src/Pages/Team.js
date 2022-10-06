import "./Team.scss";
import { useEffect } from "react";
import React from "react";
// Components
import TeamFacts from "../Components/Team/TeamFacts";
import TeamCompetitions from "../Components/Team/TeamCompetitions";
import TeamDescription from "../Components/Team/TeamDescription";
import TeamStadium from "../Components/Team/TeamStadium";
import TeamLinks from "../Components/Team/TeamLinks";

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TeamFacts />
      <TeamDescription />
      <TeamStadium />
      <TeamLinks />
    </>
  );
}
