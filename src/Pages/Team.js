// REACT
import { React, useEffect, useState } from "react";
// COMPONENTS
import TeamFacts from "../Components/Team/TeamFacts";
import TeamDescription from "../Components/Team/TeamDescription";
import TeamStadium from "../Components/Team/TeamStadium";
import TeamLinks from "../Components/Team/TeamLinks";

export default function Team() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(false);
  }, []);

  if (isLoading) {
    return <div className="TeamsList_onload">Loading...</div>;
  }

  return (
    <>
      <TeamFacts />
      <TeamDescription />
      <TeamStadium />
      <TeamLinks />
    </>
  );
}
