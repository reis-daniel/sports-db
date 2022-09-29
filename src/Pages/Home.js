import React from "react";
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Leagues = () => {

  const[leagues,setleagues] = useState([]);

  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php";
    fetch(url)
    .then((response) => response.json())
    .then((data) => setleagues(data.leagues));
  }, []);
return (
  <div className="homeLeagues">
    {leagues.map((l) => (
      <div className="leagueRow">
        <Link to={`/${l.idLeague}`} key={l.idLeague} className="linkLeague">{l.strLeague} <span className="league">{l.strSport}</span></Link> 
        </div>
    ))}
  </div>
)
}


export default Leagues;