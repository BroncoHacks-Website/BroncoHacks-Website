import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import SponsorsPage from "./Components/SponsorsPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer"; // if you have one

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        {}
        <NavBar />

        {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
        </Routes>

        {}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;