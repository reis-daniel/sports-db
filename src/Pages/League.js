// REACT
import { useEffect } from "react";
// REACT ROUTER DOM
import { useParams } from "react-router-dom";
// COMPONENTS
import TeamsList from "../Components/Team/TeamsList";
// ZUSTAND
import useTeamsStore from "../Stores/useTeamsStore";

export default function League() {
  const { fetchTeams } = useTeamsStore((state) => ({
    fetchTeams: state.fetchTeams,
  }));
  const params = useParams();
  useEffect(() => {
    fetchTeams(params.liga);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TeamsList />
    </>
  );
}
