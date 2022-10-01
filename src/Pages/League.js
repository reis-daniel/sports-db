import "./League.scss";
import { useState, useEffect } from "react";
import TeamsList from "../Components/Team/TeamsList";

export default function League() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TeamsList />
    </div>
  );
}
