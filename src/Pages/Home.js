import React from "react";
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import HeaderImG from '../Images/BG_Home.png';

const Leagues = () => {

  const[leagues,setleagues] = useState([]);

  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php";
    fetch(url)
    .then((response) => response.json())
    .then((data) => setleagues(data.leagues));
  }, []);
return (
  <div>
<img className="headerImg" src={HeaderImG} alt="Sports Player"/>
<p className="headerCaption">Find your <span className="spanLeague">League</span></p>
 
  <div className="homeLeagues">
    {leagues.map((l) => (
      <div className="leagueRow">
        <Link to={`/${l.idLeague}`} key={l.idLeague} className="linkLeague">{l.strLeague} <span className="league">{l.strSport}</span></Link> 
        </div>
    ))}
  </div>
  </div>
)
}


export default Leagues;