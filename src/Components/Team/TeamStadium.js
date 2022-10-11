// CSS
import "./TeamStadium.scss";
// REACT
import React from "react";
// PACKAGES
// ZUSTAND
import useTeamsStore from "../../Stores/useTeamsStore";

const TeamStadium = () => {
  const { team } = useTeamsStore((state) => ({ team: state.team }));
  return (
    // CHECK FOR STADIUM DESCRIPTION AND SHORTFACTS AND AVOID SECTION IF THERE'S NOTHING TO SHOW
    <>
      {(team.strStadiumDescription === "" ||
        team.strStadiumDescription === "null" ||
        team.strStadiumDescription === null ||
        team.strStadiumDescription === 0 ||
        team.strStadiumDescription === "0") &&
      (team.strStadium === "" ||
        team.strStadium === "null" ||
        team.strStadium === null ||
        team.strStadium === 0 ||
        team.strStadium === "0") &&
      (team.intStadiumCapacity === "" ||
        team.intStadiumCapacity === "null" ||
        team.intStadiumCapacity === null ||
        team.intStadiumCapacity === 0 ||
        team.intStadiumCapacity === "0") ? (
        ""
      ) : (
        <>
          <section className="team-stadium">
            {/* CHECK FOR STADIUM INFORMATIONS AND AVOID H3 IF THERES NOTHING TO SHOW */}
            {team.strStadiumDescription === "" ||
            team.strStadiumDescription === "null" ||
            team.strStadiumDescription === null ||
            team.strStadiumDescription === 0 ||
            team.strStadiumDescription === "0" ? (
              ""
            ) : (
              <h3>Stadium</h3>
            )}
            <article className="team-stadium-details">
              {/* CHECK FOR STADIUM DESCRIPTION AND AVOID ARTICLE IF STRSTADIUMDESCRIPTION IS NULL */}
              {team.strStadiumDescription === "" ||
              team.strStadiumDescription === "null" ||
              team.strStadiumDescription === null ||
              team.strStadiumDescription === 0 ||
              team.strStadiumDescription === "0" ? (
                ""
              ) : (
                <p>{team.strStadiumDescription}</p>
              )}
              {/* CHECK FOR STADIUM FACTS AND AVOID ARTICLE IF ARTICLE IS EMPTY */}
              {(team.strStadium === "" ||
                team.strStadium === "null" ||
                team.strStadium === null ||
                team.strStadium === 0 ||
                team.strStadium === "0") &&
              (team.intStadiumCapacity === "" ||
                team.intStadiumCapacity === "null" ||
                team.intStadiumCapacity === null ||
                team.intStadiumCapacity === 0 ||
                team.intStadiumCapacity === "0") ? (
                ""
              ) : (
                <div className="team-stadium-details-shortfacts">
                  {team.strStadium === "" ||
                  team.strStadium === "null" ||
                  team.strStadium === null ||
                  team.strStadium === 0 ||
                  team.strStadium === "0" ? (
                    ""
                  ) : (
                    <>
                      <h3>{team.strStadium}</h3>
                      <p>Home</p>
                    </>
                  )}
                  {team.intStadiumCapacity === "" ||
                  team.intStadiumCapacity === "null" ||
                  team.intStadiumCapacity === null ||
                  team.intStadiumCapacity === 0 ||
                  team.intStadiumCapacity === "0" ? (
                    ""
                  ) : (
                    <>
                      <h3>{team.intStadiumCapacity}</h3>
                      <p>Capacity</p>
                    </>
                  )}
                </div>
              )}
            </article>
          </section>
        </>
      )}
    </>
  );
};

export default TeamStadium;
