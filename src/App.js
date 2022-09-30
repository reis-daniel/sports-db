import "./Scss/style.scss";
import axios from "axios";
// Pages
import Home from "./Pages/Home";
import League from "./Pages/League";
import Team from "./Pages/Team";
import { Route, Routes } from "react-router-dom";

// COMPONENTS
import Navbar from "./Components/Navbar";
import ScrollUpArrow from "./Components/Util/ScrollUpArrow";
// React
import { useEffect, useState } from "react";

function App() {
  const [leagues, setLeagues] = useState([]);

  const url_leagues =
    "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php";

  useEffect(() => {
    axios.get(url_leagues).then((response) => {
      setLeagues(response.data.leagues);
    });
  }, []);

  return (
    <>
      <header>
        <Navbar />
        <ScrollUpArrow />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home leagues={leagues} />} />
          <Route path="/:liga" element={<League />} />
          <Route path="/:liga/:team" element={<Team />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
