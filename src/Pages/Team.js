// REACT
import { React, useEffect, useState } from "react";
// REACT ROUTER DOM
import { useParams } from "react-router-dom";
// COMPONENTS
import TeamFacts from "../Components/Team/TeamFacts";
import TeamDescription from "../Components/Team/TeamDescription";
import TeamStadium from "../Components/Team/TeamStadium";
import TeamLinks from "../Components/Team/TeamLinks";
// ZUSTAND
import useTeamsStore from "../Stores/useTeamsStore";

export default function Team() {
  const params = useParams();
  const { fetchTeams, team, setTeam } = useTeamsStore((state) => ({
    fetchTeams: state.fetchTeams,
    team: state.team,
    setTeam: state.setTeam,
  }));

  const [isLoading, setLoading] = useState(true);

  const getTeamData = async () => {
    await fetchTeams(params.liga);
    setTeam(params.team);
  };

  useEffect(() => {
    if (Object.keys(team).length === 0) {
      getTeamData();
    }
    window.scrollTo(0, 0);
    setLoading(false);
  }, []);

  if (isLoading) {
    return <div className="TeamsList_onload">Loading...</div>;
  }

  return (
    <>
      <TeamFacts />
      <TeamDescription />
      <TeamStadium />
      <TeamLinks />
    </>
  );
}
