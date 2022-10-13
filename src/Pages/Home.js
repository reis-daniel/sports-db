// REACT
import { useEffect } from "react";
// COMPONENTS
import LeagueList from "../Components/League/LeagueList";
import Filter from "../Components/Util/Filter";
import Heroe from "../Components/Heroe";

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
