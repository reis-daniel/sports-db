import "./Scss/style.scss";
// Pages
import Home from "./Pages/Home";
import League from "./Pages/League";

//PACKAGES
import { Route, Routes } from "react-router-dom";

// COMPONENTS
import Navbar from "./Components/Navbar";
import ScrollUpArrow from "./Components/ScrollUpArrow";

function App() {
  return (
    <>
      <ScrollUpArrow />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<League />} />
      </Routes>
    </>
  );
}

export default App;
