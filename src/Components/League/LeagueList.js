// Routing
import { Link } from "react-router-dom";

import "./LeagueList.scss";

export default function LeagueList({ leagues }) {
  return (
    <section className="leagues-list">
      <article className="leagues-list-items">
        {leagues.map((league) => (
          <div key={league.idLeague}>
            <Link
              to={`/${league.strLeague}`}
              key={league.idLeague}
              className="linkLeague underline"
            >
              {league.strLeague}
              <span className="league">{league.strSport}</span>
            </Link>
          </div>
        ))}
      </article>
    </section>
    // <div>
    //   <div className="homeLeagues">
    //     {leagues.map((league) => (
    //       <div className="leagueRow" key={league.idLeague}>
    //         <div>
    //           <Link
    //             to={`/${league.strLeague}`}
    //             key={league.idLeague}
    //             className="linkLeague underline"
    //           >
    //             <p className="hoverLeague">
    //               {league.strLeague}
    //               <span className="league">{league.strSport}</span>
    //             </p>
    //           </Link>
    //           </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
