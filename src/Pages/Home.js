import "./Home.scss";
import Heroe from "../Components/Heroe";
import { useEffect } from "react";

// Components
import LeagueList from "../Components/League/LeagueList";

export default function Home({ leagues, sport, setSport}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Heroe />
      <LeagueList leagues={leagues} sport={sport} setSport={setSport} />
    </div>
  );
}
