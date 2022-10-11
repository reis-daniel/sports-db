import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/Logo.png";
import "./Navbar.scss";
// ZUSTAND
import useFilterStore from "../Stores/useFilterStore";
import useLeaguesStore from "../Stores/useLeaguesStore";

export default function Navbar() {
  const { searchInput, setSearchInput } = useFilterStore((state) => ({
    searchInput: state.searchInput,
    setSearchInput: state.setSearchInput,
  }));
  const { leagues } = useLeaguesStore((state) => ({
    leagues: state.leagues,
  }));
  return (
    <nav>
      <Link to="/" className="logo" title="Link to homepage">
        <img src={logo} alt="SportsDB logo" />
        <h1>sports.db</h1>
      </Link>
      <div className="search">
        <form
          className="searchForm"
          onSubmit={(e) => {
            console.log("Submitted!");
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="inputSearch"
            id="inputSearch"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
        </form>
        <div className="searchResult">
          {searchInput.length > 0 ? (
            <ul>
              {leagues
                .filter((league) => {
                  return league.strLeague
                    .replace(" ", "")
                    .toLowerCase()
                    .includes(searchInput.replace(" ", "").toLowerCase());
                })
                .map((result) => {
                  return <li>{result.strLeague}</li>;
                })}
            </ul>
          ) : (
            <p>Noch nichts gesucht..</p>
          )}
        </div>
      </div>
    </nav>
  );
}
