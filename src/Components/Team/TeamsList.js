// React
import { useEffect, useState } from "react";
// Routing
import { Link, useParams } from "react-router-dom";
// Assets
import "./TeamsList.scss";

// Zustand
import { useLeaguesStore, useTeamsStore } from "../../store/store";

export default function TeamsList() {
  const { sportOfLeague, setSportOfLeague } = useLeaguesStore((state) => ({
    sportOfLeague: state.sportOfLeague,
    setSportOfLeague: state.setSportOfLeague,
  }));
  const { teams, fetchTeams } = useTeamsStore((state) => ({
    teams: state.teams,
    fetchTeams: state.fetchTeams,
  }));
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
    <div>
      <article className="TeamsList_firstArticle">
        <img
          className="TeamsList_img"
          src={`http://source.unsplash.com/1600x900/?${sportOfLeague}`}
          alt=""
        />

        <h1 className="TeamsList_headline">{params.liga}</h1>
        <p className="TeamsList_Sportart">{sportOfLeague}</p>
      </article>

      <div className="homeLeagues">
        {teams.map((team) => (
          <div className="leagueRow" key={team.idTeam}>
            <Link
              to={`/${params.liga}/${team.strTeam}`}
              key={team.idTeam}
              className="linkLeague"
            >
              {team.strTeam}
              <span className="league">{team.strStadiumLocation}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
