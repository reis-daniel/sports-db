import "./League.scss";
import { useEffect } from "react";
import TeamsList from "../Components/Team/TeamsList";

export default function League() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TeamsList />
    </>
  );
}
