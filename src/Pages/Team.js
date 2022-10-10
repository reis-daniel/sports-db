// CSS
import "./Team.scss";
// REACT
import { React, useEffect } from "react";
// COMPONENTS
import TeamFacts from "../Components/Team/TeamFacts";
import TeamDescription from "../Components/Team/TeamDescription";
import TeamStadium from "../Components/Team/TeamStadium";
import TeamLinks from "../Components/Team/TeamLinks";

export default function Team() {
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
