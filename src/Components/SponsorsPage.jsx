import React from "react";
import "./SponsorsPage.css";

import balloonImg from "../assets/img_billyballon.png";
import sponsorPlaceholder from "../assets/Sponsor.png";
import cloudImg from "../assets/cloud_left.png";

/* =========================
   DATA (Easy to Update)
========================= */

// Just add more objects here to add sponsors
const sponsors = [
  { id: 1, name: "Sponsor 1", logo: sponsorPlaceholder },
  { id: 2, name: "Sponsor 2", logo: sponsorPlaceholder },
  { id: 3, name: "Sponsor 3", logo: sponsorPlaceholder },
  { id: 4, name: "Sponsor 4", logo: sponsorPlaceholder },
  { id: 5, name: "Sponsor 5", logo: sponsorPlaceholder },
  { id: 6, name: "Sponsor 6", logo: sponsorPlaceholder },
  { id: 7, name: "Sponsor 7", logo: sponsorPlaceholder },
  { id: 8, name: "Sponsor 8", logo: sponsorPlaceholder },
];

// Replace logos later easily
const clubs = [
  { id: 1, name: "Robotics Club", logo: sponsorPlaceholder },
  { id: 2, name: "Coding Club", logo: sponsorPlaceholder },
  { id: 3, name: "Math Club", logo: sponsorPlaceholder },
  { id: 4, name: "Art Club", logo: sponsorPlaceholder },
  { id: 5, name: "Science Club", logo: sponsorPlaceholder },
  { id: 6, name: "Drama Club", logo: sponsorPlaceholder },
  { id: 7, name: "Chess Club", logo: sponsorPlaceholder },
  { id: 8, name: "Business Club", logo: sponsorPlaceholder },
];

export default function SponsorsPage() {
  return (
    <div className="sponsor-page">

      {/* Decorative Images */}
      <img src={cloudImg} alt="" className="cloud-decoration" />
      <img src={balloonImg} alt="" className="balloon-decoration" />

      <h2 className="page-heading">Our Sponsors</h2>

      {/* Sponsors Grid */}
      <div className="sponsors-grid">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-card">
            <img src={sponsor.logo} alt={sponsor.name} />
          </div>
        ))}
      </div>

      {/* Sponsorship Info Box */}
      <div className="sponsor-info-box">
        <p><strong>Interested in Sponsoring?</strong></p>
        <p>
          Email cppbroncohacks@gmail.com for sponsorship opportunities
          or reach out to any of these clubs below!
        </p>
      </div>

      <h2 className="page-heading">School Clubs</h2>

      {/* Clubs */}
      <div className="clubs-grid">
        {clubs.map((club) => (
          <div key={club.id} className="club-circle">
            <img src={club.logo} alt={club.name} />
          </div>
        ))}
      </div>
    </div>
  );
}