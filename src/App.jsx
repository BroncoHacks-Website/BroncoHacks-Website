import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    // <BrowserRouter basename="/BroncoHacks-Website/"></BrowserRouter>
    <BrowserRouter className = "content" style = {{flex: 1}}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;