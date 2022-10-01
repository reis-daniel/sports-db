import React from "react";
import { Link } from "react-router-dom";
import logo from "../Logo/Logo.png";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
          <h1>sports.db</h1>
        </Link>
        <form action="">
          <input type="text" name="search" id="inputSearch" />
        </form>
      </nav>
    </header>
  );
}
