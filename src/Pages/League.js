import "./League.scss";
import { useState, useEffect } from "react";
import TeamsList from "../Components/Team/TeamsList";
import Heroe from "../Components/Heroe";

export default function League() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Heroe />
      <TeamsList />
    </div>
  );
}
