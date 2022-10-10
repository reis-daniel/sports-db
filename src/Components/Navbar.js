import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/Logo.png";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo" title="Link to homepage">
        <img src={logo} alt="SportsDB logo" />
        <h1>sports.db</h1>
      </Link>
      <form action="">
        <input type="text" name="search" id="inputSearch" />
      </form>
    </nav>
  );
}
