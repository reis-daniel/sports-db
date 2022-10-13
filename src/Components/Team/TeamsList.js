// CSS
import "./TeamsList.scss";
// REACT
import { useEffect, useState } from "react";
// PACKAGES
import { Link, useParams } from "react-router-dom";
// STORES
import useLeaguesStore from "../../Stores/useLeaguesStore";
import useTeamsStore from "../../Stores/useTeamsStore";

//Fetch to show the teams
export default function TeamsList() {
  const { sportOfLeague, setSportOfLeague } = useLeaguesStore((state) => ({
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

  const url_teams = `https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=${params.liga}`;

  useEffect(() => {
    const getTeamsData = async () => {
      setSportOfLeague(params.liga);
      await fetchTeams(url_teams);
      setLoading(false);
    };
    getTeamsData();
  }, [url_teams]);

  if (isLoading) {
    return <div className="TeamsList_onload">Loading...</div>;
  }

  return (
    <section>
      <article className="TeamsList_firstArticle">
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
