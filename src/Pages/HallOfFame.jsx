import { useState } from "react";
import "../styles/HallOfFame.css";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import HoF26 from "../Components/HoF2026.jsx";
import Carousel from "../Components/Carousel.jsx";

// data imports
import Winners_2025 from "../Assets/data/HOF2025.jsx";
import CatWinners_2025 from "../Assets/data/HOF2025_cat.jsx";

/* ================= MAIN PAGE ================= */

const HallOfFame = () => {

  const [category2025, setCategory2025] = useState("WEB DEV");

  return (
    <>
      <NavBar />

      <div className="hall-of-fame">
        <div className="hall-wrapper">

          <HoF26 />

          <h1 className="section-heading">
            BRONCOHACKS 2025 WINNERS
          </h1>

          <p className="section-description-text">
            BroncoHacks 2025 took place from April 18 2025 - April 19 2025.
            There were over 200 participants across six categories:
            Best Web Development, Best Cybersecurity, Best Data Science/AI,
            Best Game Development, Best UI/UX, Best Team Name, and Overall Placements.
            Participants spent 24 hours hacking together on a project with the theme of{" "}
            <span className="section-theme-text">
              “Create a project for a problem in a community.”
            </span>
          </p>

          <Carousel items={Winners_2025} />

          <h2 className="section-subheading">
            BEST IN <span>{category2025}</span>
          </h2>

          <Carousel items={CatWinners_2025} 
            onCarouselSwitch={(catName) => setCategory2025(catName)}
          />

        </div>
      </div>

      <Footer />
    </>
  );
};

export default HallOfFame;