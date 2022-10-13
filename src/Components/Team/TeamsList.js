// CSS
import "./TeamsList.scss";
// REACT
import { useEffect, useState } from "react";
// PACKAGES
import { Link, useParams } from "react-router-dom";
// ZUSTAND STORES
import useLeaguesStore from "../../Stores/useLeaguesStore";
import useTeamsStore from "../../Stores/useTeamsStore";

//Fetch to show the teams
export default function TeamsList() {
  const { leagues, fetchLeagues, sportOfLeague, setSportOfLeague } =
    useLeaguesStore((state) => ({
      leagues: state.leagues,
      fetchLeagues: state.fetchLeagues,
      sportOfLeague: state.sportOfLeague,
      setSportOfLeague: state.setSportOfLeague,
    }));
  const { teams, setTeam, fetchTeams } = useTeamsStore((state) => ({
    teams: state.teams,
    fetchTeams: state.fetchTeams,
    setTeam: state.setTeam,
  }));

  // State again to display the image at the same time as the other content, and when it loads a Loading should be displayed
  const [isLoading, setLoading] = useState(true);
  const params = useParams();
  const url_leagues =
    "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php";

  useEffect(() => {
    const getTeamsData = async () => {
      if (leagues.length === 0) await fetchLeagues(url_leagues);
      setSportOfLeague(params.liga);
      await fetchTeams(params.liga);
      setLoading(false);
    };
    getTeamsData();
  }, []);

  if (isLoading) {
    return <div className="TeamsList_onload">Loading...</div>;
  }

  return (
    <section>
      <article className="TeamsList_firstArticle">
        {/* IMAGE NEEDS TO LOAD! */}
        <img
          className="TeamsList_img"
          src={`https://source.unsplash.com/1600x900/?${sportOfLeague}`}
          alt={`${sportOfLeague} from unsplash.com`}
        />
        <article className="articleTeamslist">
          <h2 className="TeamsList_headline">{params.liga}</h2>
          <h3 className="TeamsList_Sportart">{sportOfLeague}</h3>
        </article>
      </article>

      {teams !== null ? (
        <section className="TeamsList">
          {teams.map((team) => (
            <article className="TeamsListRow" key={team.idTeam}>
              <Link
                to={`/${params.liga}/${team.strTeam}`}
                key={team.idTeam}
                className="linkLeague"
                title={`Link to ${team.strTeam}`}
                onClick={() => {
                  setTeam(team.strTeam);
                }}
              >
                <p className="TeamsList_hover">
                  {team.strTeam}
                  <span className="league">{team.strStadiumLocation}</span>
                </p>
              </Link>
            </article>
          ))}
        </section>
      ) : (
        <section className="TeamsList warning">
          <h2 className="warning">
            We couldn't find any matches when searching for teams in this
            league.
          </h2>
          <div className="warning-wrapper">
            <Link to="/" title="Home">
              back to all leagues
            </Link>
          </div>
        </section>
      )}
    </section>
  );
}
