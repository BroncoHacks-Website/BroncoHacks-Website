import React, { useState } from "react";
import "../styles/HallOfFame.css";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import ArrowLeft from "../assets/Vector (2).svg";
import ArrowRight from "../assets/Vector (1).svg";
import WinnerPhoto from "../assets/image.png";

/* ================= CAROUSEL COMPONENT ================= */

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const getPosition = (index) => {
    if (index === current) return "center";
    if (index === (current - 1 + items.length) % items.length) return "left";
    if (index === (current + 1) % items.length) return "right";
    return "hidden";
  };

  return (
    <div className="carousel-wrapper">

      <button className="nav-arrow left" onClick={prev}>
        <img src={ArrowLeft} alt="prev" />
      </button>

      <div className="carousel">
        {items.map((item, index) => {
          const position = getPosition(index);

          return (
            <div
              key={index}
              className={`carousel-card ${position}`}
            >
              <div className="placement">{item.placement}</div>

              <div className="card-image-frame">
                <img src={WinnerPhoto} alt="" />
              </div>

              <h3 className="project-title">{item.title}</h3>
              <p className="project-description">{item.description}</p>

              {item.names && (
                <div className="team-name">{item.names}</div>
              )}
            </div>
          );
        })}
      </div>

      <button className="nav-arrow right" onClick={next}>
        <img src={ArrowRight} alt="next" />
      </button>

    </div>
  );
};

/* ================= MAIN PAGE ================= */

const HallOfFame = () => {

  const overallWinners = [
    { placement: "1ST", title: "MediFind", description: "Medication management, price comparison, and safety app." },
    { placement: "2ND", title: "QuishThis", description: "Protect yourself from malicious QR codes." },
    { placement: "3RD", title: "Carbon Closet", description: "Interactive thrifting with token rewards." },
    { placement: "4TH", title: "Honey Hack", description: "N/A" },
    { placement: "5TH", title: "TA AI", description: "AI-powered teaching assistant." }
  ];

  const categoryWinners = [
    { placement: "WEB DEV", title: "Carbon Closet", description: "AI-powered teaching assistant..." },
    { placement: "DS/AI", title: "MediFind", description: "Medication management, price comparison, and safety app." },
    { placement: "GAME DEV", title: "QuishThis", description: "Protect yourself from malicious QR codes." },
    { placement: "UI/UX", title: "Honey Hack", description: "N/A" },
    { placement: "CYBER", title: "TA AI", description: "AI-powered teaching assistant." }
  ];

  return (
    <>
      <NavBar />

      <div className="hall-of-fame">
        <div className="hall-wrapper">

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

          <Carousel items={overallWinners} />

          <h2 className="section-subheading">
            BEST IN [CATEGORY]
          </h2>

          <Carousel items={categoryWinners} />

        </div>
      </div>

      <Footer />
    </>
  );
};

export default HallOfFame;