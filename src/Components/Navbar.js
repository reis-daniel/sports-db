// CSS
import "./Navbar.scss";
// REACT
import React from "react";
// PACKAGES
import { Link } from "react-router-dom";
import useFilterStore from "../Stores/useFilterStore";
// ASSETS
import logo from "../assets/Logo/Logo.png";

export default function Navbar() {
  const { setSearchInput, clearFilterValues } = useFilterStore((state) => ({
    setSearchInput: state.setSearchInput,
    clearFilterValues: state.clearFilterValues,
  }));

  return (
    <nav>
      <Link
        to="/"
        className="logo"
        title="Home"
        onClick={() => {
          clearFilterValues();
        }}
      >
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
