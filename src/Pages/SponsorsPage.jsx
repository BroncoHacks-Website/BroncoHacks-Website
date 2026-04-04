import React from "react";
import "../styles/SponsorsPage.css";

import balloonImg from "../assets/img_billyballon.png";
import cloudImg from "../assets/cloud_left.png";

// Club Imports
import CSS from "../BroncoHacks2025/2025Assets/Clubs/cpp_css_logo.png";
import DSAI from "../BroncoHacks2025/2025Assets/Clubs/cpp_ds_ai_logo.png";
import GDC from "../BroncoHacks2025/2025Assets/Clubs/cpp_gdc_logo.jpg";
import sheCodes from "../BroncoHacks2025/2025Assets/Clubs/cpp_shecodes_logo.png";
import GDG from "../BroncoHacks2025/2025Assets/Clubs/cpp_gdg_logo.png";
import FAST from "../BroncoHacks2025/2025Assets/Clubs/cpp_fast_logo.png";
import SWIFT from "../BroncoHacks2025/2025Assets/Clubs/cpp_swift_logo.png";
import SEA from "../BroncoHacks2025/2025Assets/Clubs/cpp_sea_logo.jpg";
import CEO from "../BroncoHacks2025/2025Assets/Clubs/ceo_logo.png";
import MISSA from "../Assets/clubs/missa.png";
import MTSAC from "../Assets/clubs/cs_seal.webp";

// Sponsor Imports
import Vercel from "../Assets/sponsors/vercel.png";
import Career from "../Assets/sponsors/cpp-career-center2.png";
import PureButtons from "../Assets/sponsors/pure-buttons.png";
import Stridan from "../Assets/sponsors/stridan.png";
import ASI from "../Assets/sponsors/asi.png";

// Component Imports
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
  { id: 1, name: "Vercel", logo: Vercel, url: "https://vercel.com/" },
  { id: 2, name: "CPP Career Center", logo: Career, url: "https://careercenter.cpp.edu/" },
  { id: 3, name: "Pure Buttons", logo: PureButtons, url: "https://www.purebuttons.com/" },
  { id: 4, name: "Stridan", logo: Stridan, url: "https://stridan.co/" },
  { id: 5, name: "ASI", logo: ASI, url: "https://asi.cpp.edu/" },
];

/*
 To change club logos later:
 Replace the logo import or image path here.
*/

const clubs = [
  { id: 1, name: "DSAI", logo: DSAI, url: "https://www.cppdsai.com/" },
  { id: 2, name: "GDC", logo: GDC, url: "https://www.cppgamedev.com/" },
  { id: 3, name: "sheCodes", logo: sheCodes, url: "https://www.cppshecodes.com/" },
  { id: 4, name: "GDG", logo: GDG, url: "https://gdg.community.dev/gdg-on-campus-california-state-polytechnic-university-pomona-united-states/" },
  { id: 5, name: "CSS", logo: CSS, url: "https://cppcss.club/" },
  { id: 6, name: "FAST", logo: FAST, url: "https://www.cppfast.org/" },
  { id: 7, name: "SWIFT", logo: SWIFT, url: "https://www.calpolyswift.org/" },
  { id: 8, name: "SEA", logo: SEA, url: "https://cppsea.com/" },
  { id: 10, name: "CEO", logo: CEO, url: "https://sites.cpp.edu/ceo/index.shtml" },
  { id: 11, name: "MISSA", logo: MISSA, url: "https://www.calpolymissa.org/" },
  { id: 12, name: "MTSAC", logo: MTSAC, url: "https://www.mtsaccs.org/" },
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
            <a key={sponsor.id} className="sponsor-card" href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.logo} alt={sponsor.name} />
            </a>
          ))}
        </div>

        {/* ================= Info Box ================= */}
        <div className="sponsor-info-box">
          <strong>Interested in Sponsoring?</strong>
          <p>
            Email <a href="mailto:cppbroncohacks@gmail.com">cppbroncohacks@gmail.com</a> for sponsorship opportunities
            or reach out to any of these clubs below!
          </p>
        </div>

        {/* ================= Clubs ================= */}
        <div className="clubs-section">
          <h2 className="page-heading">School Clubs</h2>

          <div className="clubs-grid">
            {clubs.map((club) => (
              <a key={club.id} className="club-circle" href={club.url} target="_blank" rel="noopener noreferrer">
                <img src={club.logo} alt={club.name} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </>);
}