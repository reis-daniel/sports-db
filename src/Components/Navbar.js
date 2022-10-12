import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/Logo.png";
import "./Navbar.scss";
// ZUSTAND
import useFilterStore from "../Stores/useFilterStore";

export default function Navbar() {
  const { setSearchInput } = useFilterStore((state) => ({
    setSearchInput: state.setSearchInput,
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
              if (e.target.value.length > 2) setSearchInput(e.target.value);
              else setSearchInput("");
            }}
          />
        </form>
      </div>
    </nav>
  );
}
