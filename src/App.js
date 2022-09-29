import "./Scss/style.scss";
// Pages
import Home from "./Pages/Home";
import League from "./Pages/League";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<League />} />
      </Routes>
    </div>
  );
}

export default App;
