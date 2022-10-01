import "./Team.scss";
import { useEffect } from "react";
import React from "react";
// Components
import TeamFacts from "../Components/Team/TeamFacts";

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TeamFacts />
    </div>
  );
}
