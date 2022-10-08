// React
import { useEffect, useState } from "react";
// Routing
import { Link, useParams } from "react-router-dom";
// Assets
import "./TeamsList.scss";

// Zustand
import useLeaguesStore from "../../Stores/useLeaguesStore";
import useTeamsStore from "../../Stores/useTeamsStore";

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
    <section>
      <article className="TeamsList_firstArticle">
        <img
          className="TeamsList_img"
          src={`http://source.unsplash.com/1600x900/?${sportOfLeague}`}
          alt=""
        />
    <article className="articleTeamslist">
        <h1 className="TeamsList_headline">{params.liga}</h1>
        <h2 className="TeamsList_Sportart">{sportOfLeague}</h2>
    </article>  
      </article>

      <section className="TeamsList">
        {teams.map((team) => (
          <article className="TeamsListRow" key={team.idTeam}>
            <Link
              to={`/${params.liga}/${team.strTeam}`}
              key={team.idTeam}
              className="linkLeague"
            >
              <p className="TeamsList_hover">{team.strTeam}<span className="league">{team.strStadiumLocation}</span></p>
              
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
}
