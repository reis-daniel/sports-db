// Components
import LeagueList from "../Components/League/LeagueList";

export default function Home({ leagues }) {
  return (
    <div>
      <LeagueList leagues={leagues} />
    </div>
  );
}
