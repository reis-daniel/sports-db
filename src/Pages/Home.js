// Components
import LeagueList from "../components/League/LeagueList";

export default function Home({ leagues }) {
  return (
    <div>
      <LeagueList leagues={leagues} />
    </div>
  );
}
