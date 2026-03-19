import React from "react";
import "../styles/SponsorsPage.css";

import balloonImg from "../assets/img_billyballon.png";
import sponsorPlaceholder from "../assets/Sponsor.png";
import clubPlaceholder from "../assets/Sponsor.png"; // replace later
import cloudImg from "../assets/cloud_left.png";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

/* =========================
   DATA
   (Easy to update later)
========================= */

/*
 To add a new sponsor:
 Just add a new object to this array.
*/

const sponsors = [
  { id: 1, name: "Google", logo: sponsorPlaceholder },
  { id: 2, name: "Microsoft", logo: sponsorPlaceholder },
  { id: 3, name: "Amazon", logo: sponsorPlaceholder },
  { id: 4, name: "Meta", logo: sponsorPlaceholder },
  { id: 5, name: "Apple", logo: sponsorPlaceholder },
  { id: 6, name: "Nvidia", logo: sponsorPlaceholder },
  { id: 7, name: "Intel", logo: sponsorPlaceholder },
  { id: 8, name: "Tesla", logo: sponsorPlaceholder },
];

/*
 To change club logos later:
 Replace the logo import or image path here.
*/

const clubs = [
  { id: 1, name: "Robotics Club", logo: clubPlaceholder },
  { id: 2, name: "Coding Club", logo: clubPlaceholder },
  { id: 3, name: "Math Club", logo: clubPlaceholder },
  { id: 4, name: "Science Club", logo: clubPlaceholder },
  { id: 5, name: "Art Club", logo: clubPlaceholder },
  { id: 6, name: "Business Club", logo: clubPlaceholder },
  { id: 7, name: "Engineering Club", logo: clubPlaceholder },
  { id: 8, name: "Game Dev Club", logo: clubPlaceholder },
];

export default function SponsorsPage() {
  return (<>
    <NavBar />
    <div className="sponsor-page">

      {/* Decorations */}
      <img src={cloudImg} alt="" className="cloud-decoration" />
      <img src={balloonImg} alt="" className="balloon-decoration" />

      <div className="section-wrapper">

        {/* ================= Sponsors ================= */}
        <h2 className="page-heading">Our Sponsors</h2>

        <div className="sponsors-grid">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="sponsor-card">
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
          ))}
        </div>

        {/* ================= Info Box ================= */}
        <div className="sponsor-info-box">
          <strong>Interested in Sponsoring?</strong>
          <p>
            Email cppbroncohacks@gmail.com for sponsorship opportunities
            or reach out to any of these clubs below!
          </p>
        </div>

        {/* ================= Clubs ================= */}
        <div className="clubs-section">
          <h2 className="page-heading">School Clubs</h2>

          <div className="clubs-grid">
            {clubs.map((club) => (
              <div key={club.id} className="club-circle">
                <img src={club.logo} alt={club.name} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </>);
}