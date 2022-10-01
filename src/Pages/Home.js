import "./Home.scss";
import Heroe from "../Components/Heroe";
import { useEffect } from "react";

// Components
import LeagueList from "../Components/League/LeagueList";

export default function Home({ leagues }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Heroe />
      <LeagueList leagues={leagues} />
    </div>
  );
}
