import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./Pages/Home.jsx";
import HallOfFame from "./Pages/HallOfFame.jsx";
// import Team from "./Pages/Team.jsx";
// import SponsorsPage from "./Components/SponsorsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* 
        If deploying to GitHub Pages later, use:
        <BrowserRouter basename="/BroncoHacks-Website">
      */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hallOfFame" element={<HallOfFame />} />
        {/* <Route path="/team" element={<Team />} /> */}
        {/* <Route path="/sponsors" element={<SponsorsPage />} /> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;