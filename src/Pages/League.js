// REACT
import { useEffect } from "react";
// COMPONENTS
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
