// CSS
import "./Scss/style.scss";
// PAGES
import Home from "./Pages/Home";
import League from "./Pages/League";
import Team from "./Pages/Team";
// COMPONENTS
import Navbar from "./Components/Navbar";
import ScrollUpArrow from "./Components/Util/ScrollUpArrow";
// REACT
import { useEffect } from "react";
// PACKAGES
import { Route, Routes } from "react-router-dom";
// STORES
import useLeaguesStore from "./Stores/useLeaguesStore";
import useCountriesStore from "./Stores/useCountriesStore";
import useSportsStore from "./Stores/useSportsStore";

import { LoaderFunction } from "react-router-dom";

function App() {
  const { fetchLeagues } = useLeaguesStore((state) => ({
    fetchLeagues: state.fetchLeagues,
  }));
  const { fetchCountries } = useCountriesStore((state) => ({
    fetchCountries: state.fetchCountries,
  }));
  const { fetchSports } = useSportsStore((state) => ({
    fetchSports: state.fetchSports,
  }));

  const url_countries =
    "https://www.thesportsdb.com/api/v1/json/2/all_countries.php";
  const url_sports = "https://www.thesportsdb.com/api/v1/json/2/all_sports.php";
  const url_leagues =
    "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php";

  useEffect(() => {
    fetchLeagues(url_leagues);
    fetchCountries(url_countries);
    fetchSports(url_sports);
  }, []);

  return (
    <>
      <header>
        <Navbar />
        <ScrollUpArrow />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:liga" element={<League />} />
          <Route path="/:liga/:team" element={<Team />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
