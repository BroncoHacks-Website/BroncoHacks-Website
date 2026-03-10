import React from "react";
import "../styles/HallOfFame.css";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import ArrowLeft from "../assets/Vector (1).svg";
import ArrowRight from "../assets/Vector (2).svg";
import WinnerPhoto from "../assets/image.png"; // your uploaded winner image

const WinnerCard = ({ placement, title, description, large, names }) => {
  return (
    <div className={`winner-card ${large ? "large" : ""}`}>
      <div className="placement">{placement}</div>

      <div className="card-image-frame">
        <img src={WinnerPhoto} alt={title} />
      </div>

      <h3 className="project-title">{title}</h3>

      <p className="project-description">{description}</p>

      {names && <div className="team-name">{names}</div>}
    </div>
  );
};

const HallOfFame = () => {
  return (
    <>
      <NavBar />

      <div className="hall-of-fame">
        <div className="hall-wrapper">

          {/* ================= HEADER ================= */}
          <h1 className="section-heading">
            BRONCOHACKS 2025 WINNERS
          </h1>

          <p className="section-description">
            BroncoHacks 2025 took place from April 18 2025 - April 19 2025.
            There were over 200 participants across six categories:
            Best Web Development, Best Cybersecurity, Best Data Science/AI,
            Best Game Development, Best UI/UX, Best Team Name, and Overall Placements.
            Participants spent 24 hours hacking together on a project with the theme of
            <strong> “Create a project for a problem in a community.”</strong>
          </p>

          {/* ================= OVERALL WINNERS ================= */}
          <div className="winners-row-wrap">

            <button className="nav-arrow left">
              <img src={ArrowLeft} alt="left" />
            </button>

            <div className="winners-row">
              <WinnerCard
                placement="5TH"
                title="Carbon Closet"
                description="AI-powered teaching assistant..."
              />

              <WinnerCard
                placement="1ST"
                title="MediFind"
                description="Medication management, price comparison, and safety app."
                names="Irvine Computer Engineers — Manson Pham, Joshua Estrada, Jason Mar, Michael Castillo"
                large
              />

              <WinnerCard
                placement="2ND"
                title="QuishThis"
                description="Protect yourself from malicious QR codes."
              />
            </div>

            <button className="nav-arrow right">
              <img src={ArrowRight} alt="right" />
            </button>

          </div>

          {/* ================= BEST IN CATEGORY ================= */}
          <h2 className="section-subheading">
            BEST IN [CATEGORY]
          </h2>

          <div className="winners-row-wrap">

            <button className="nav-arrow left">
              <img src={ArrowLeft} alt="left" />
            </button>

            <div className="winners-row">
              <WinnerCard
                placement="WEB DEV"
                title="Carbon Closet"
                description="AI-powered teaching assistant..."
              />

              <WinnerCard
                placement="DS/AI"
                title="MediFind"
                description="Medication management, price comparison, and safety app."
                names="Irvine Computer Engineers — Manson Pham, Joshua Estrada, Jason Mar, Michael Castillo"
                large
              />

              <WinnerCard
                placement="GAME DEV"
                title="QuishThis"
                description="Protect yourself from malicious QR codes."
              />
            </div>

            <button className="nav-arrow right">
              <img src={ArrowRight} alt="right" />
            </button>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default HallOfFame;