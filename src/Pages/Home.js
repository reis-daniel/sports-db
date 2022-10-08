import "./Home.scss";
import Heroe from "../Components/Heroe";
import { useEffect } from "react";

// Components
import LeagueList from "../Components/League/LeagueList";
import Filter from "../Components/Util/Filter";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Heroe />
      <Filter />
      <LeagueList />
    </>
  );
}
