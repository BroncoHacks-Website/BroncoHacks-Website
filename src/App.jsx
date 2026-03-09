import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home.jsx";
import Team from "./Pages/Team.jsx";
import SponsorsPage from "./Components/SponsorsPage.jsx";
function App() {
  return (
    // <BrowserRouter basename="/BroncoHacks-Website/"></BrowserRouter>
    <BrowserRouter className = "content" style = {{flex: 1}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />}></Route>
        <Route path="/sponsors" element={<SponsorsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;