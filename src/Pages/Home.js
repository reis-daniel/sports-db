import "./Home.scss";
import Heroe from "../Components/Heroe";

// Components
import LeagueList from "../Components/League/LeagueList";

export default function Home({ leagues }) {
  return (
    <div>
      <Heroe />
      <LeagueList leagues={leagues} />
    </div>
  );
}
