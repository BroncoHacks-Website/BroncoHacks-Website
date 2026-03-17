import React from "react";
import "../styles/SponsorsPage.css";

import balloonImg from "../assets/img_billyballon.png";
import sponsorPlaceholder from "../assets/Sponsor.png";
import clubPlaceholder from "../assets/Sponsor.png"; // replace later
import CSS from "../BroncoHacks2025/2025Assets/Clubs/cpp_css_logo.png";
import DSAI from "../BroncoHacks2025/2025Assets/Clubs/cpp_ds_ai_logo.png";
import GDC from "../BroncoHacks2025/2025Assets/Clubs/cpp_gdc_logo.jpg";
import sheCodes from "../BroncoHacks2025/2025Assets/Clubs/cpp_shecodes_logo.png";
import GDG from "../BroncoHacks2025/2025Assets/Clubs/cpp_gdg_logo.png";
import FAST from "../BroncoHacks2025/2025Assets/Clubs/cpp_fast_logo.png";
import SWIFT from "../BroncoHacks2025/2025Assets/Clubs/cpp_swift_logo.png";
import SEA from "../BroncoHacks2025/2025Assets/Clubs/cpp_sea_logo.jpg";
import CEO from "../BroncoHacks2025/2025Assets/Clubs/ceo_logo.png";
import cloudImg from "../assets/cloud_left.png";
import Vercel from "../BroncoHacks2025/2025Assets/Sponsors/vercel.png";
import Career from "../BroncoHacks2025/2025Assets/Sponsors/cpp_career_center.png";
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
  { id: 1, name: "Vercel", logo: Vercel },
  { id: 2, name: "CPP Career Center", logo: Career },
];

/*
 To change club logos later:
 Replace the logo import or image path here.
*/

const clubs = [
  { id: 1, name: "DSAI", logo: DSAI },
  { id: 2, name: "GDC", logo: GDC },
  { id: 3, name: "sheCodes", logo: sheCodes },
  { id: 4, name: "GDG", logo: GDG },
  { id: 5, name: "CSS", logo: CSS },
  { id: 6, name: "FAST", logo: FAST },
  { id: 7, name: "SWIFT", logo: SWIFT },
  { id: 8, name: "SEA", logo: SEA },
  { id: 9, name: "WIT", logo: clubPlaceholder },
  { id: 10, name: "CEO", logo: CEO },
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