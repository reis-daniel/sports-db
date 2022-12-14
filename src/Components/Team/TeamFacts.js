// CSS
import "./TeamFacts.scss";
// ZUSTAND
import useTeamsStore from "../../Stores/useTeamsStore";
// COMPONENTS
import TeamCompetitions from "./TeamCompetitions";

export default function TeamFacts() {
  const { team } = useTeamsStore((state) => ({ team: state.team }));

  return (
    <>
      <section className="team-facts">
        {/* CHECK FOR THUMB AND TAKE FALLBACK IF IMG IS NULL */}
        {team.strStadiumThumb === null ? (
          <img
            src={`https://source.unsplash.com/1600x900/?${team.strSport}`}
            alt={`${team.strSport} from unsplash.com`}
          />
        ) : (
          <img src={team.strStadiumThumb} alt={`${team.strTeam}s Stadium`} />
        )}
        <article className="team-facts-details">
          <h2>{team.strTeam}</h2>
          <div className="team-facts-details-wrapper">
            {/* CHECK FOR COUNTRY AND AVOID DIV IF STRCOUNTRY IS NULL */}
            {team.strCountry === "" ||
            team.strCountry === "null" ||
            team.strCountry === null ||
            team.strCountry === "0" ||
            team.strCountry === 0 ? (
              ""
            ) : (
              <div className="team-facts-details-wrapper-item">
                <h3>{team.strCountry}</h3>
                <p>Country</p>
              </div>
            )}
            {/* CHECK FOR LOCATION AND AVOID DIV IF STRSTADIUMLOCATION IS NULL */}
            {team.strStadiumLocation === "" ||
            team.strStadiumLocation === "null" ||
            team.strStadiumLocation === null ||
            team.strStadiumLocation === "0" ||
            team.strStadiumLocation === 0 ? (
              ""
            ) : (
              <div className="team-facts-details-wrapper-item">
                <h3>{team.strStadiumLocation}</h3>
                <p>Location</p>
              </div>
            )}
            {/* CHECK FOR ESTABLISHED YEAR AND AVOID DIV IF INTFORMEDYEAR IS NULL */}
            {team.intFormedYear === "" ||
            team.intFormedYear === "null" ||
            team.intFormedYear === null ||
            team.intFormedYear === 0 ||
            team.intFormedYear === "0" ? (
              ""
            ) : (
              <div className="team-facts-details-wrapper-item">
                <h3>{team.intFormedYear}</h3>
                <p>Established</p>
              </div>
            )}
            <div className="team-facts-details-wrapper-item">
              <h3>{team.strSport}</h3>
              <p>Sport</p>
            </div>
          </div>
        </article>
      </section>
      <TeamCompetitions />
    </>
  );
}
