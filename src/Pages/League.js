import "./League.scss";
import { useState, useEffect } from "react";
import TeamsList from "../Components/Team/TeamsList";


export default function League() {
  const [leagues, setLeagues] = useState([]);
  const[sport, setSport] = useState("");



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <div>

      <TeamsList sport={sport} setSport={setSport} />
    </div>
  );
}
