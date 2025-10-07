import { useState } from "react";
import "../styles/Sponsors.css";
import checkeredFlag from "../Assets/Design/checkeredflag.png";

import avanade from "../Assets/Sponsors/avanade.png";
import mlh from "../Assets/Sponsors/mlh.png";
import grubhub from "../Assets/Sponsors/grubhub.png";
import google from "../Assets/Sponsors/google.png";
import npm from "../Assets/Sponsors/npm.png";
import react from "../Assets/Sponsors/react.png";
import tesla from "../Assets/Sponsors/tesla.png";
import openai from "../Assets/Sponsors/openai.png";
import sponsorPackage from "../Assets/Sponsors/BroncoHacks2025_SponsorshipPackages.pdf";
import sponsorProspectus from "../Assets/Sponsors/BroncoHacks 2025 Sponsorship Prospectus Website Ver.pdf"
import netscout from "../Assets/Sponsors/netscout.png";
import arc from "../Assets/Sponsors/arc.webp";
import redbull from "../Assets/Sponsors/redbull.jpg"

import css_logo from "../Assets/Clubs/cpp_css_logo.png";
import gdg_logo from "../Assets/Clubs/cpp_gdg_logo.png";
import gamedev_logo from "../Assets/Clubs/cpp_game_dev_logo.png";
import fast_logo from "../Assets/Clubs/cpp_fast_logo.png";
import dsai_logo from "../Assets/Clubs/cpp_ds_ai_logo.png";
import shecodes_logo from "../Assets/Clubs/cpp_shecodes_logo.png";
// import script_logo from "../Assets/Clubs/cpp_script_logo.png";
import sea_logo from "../Assets/Clubs/cpp_sea_logo.png";
import swift_logo from "../Assets/Clubs/cpp_swift_logo.png";
import wit_logo from "../Assets/Clubs/cpp_wit_logo.png";


function Sponsors() {

  const [hoveredSponsor, setHoveredSponsor] = useState(null);

  const sponsors = [
    { name: "Netscout", "contact": "+1-978-614-4000", "website": "https://www.netscout.com/", img: netscout, description: "A leader in network performance and cybersecurity solutions." },
    { name: "Avanade", "contact": "TA-PR@avanade.com", "website": "https://www.avanade.com/en", img: avanade, description: "Providing digital and cloud services, business solutions, and design-led experiences." },
    { name: "Arc", "website": "https://arc.net/", img: arc, description: "Global employment platform that connects developers with companies." },
    { name: "Redbull", "contact": "customerservice@redbullshopus.com", "website": "https://www.redbullshopus.com/", img: redbull, description: "Red Bull gives you wings! A leader in the energy drink industry." },
    { name: "MLH", "contact": "hi@mlh.io", "website": "https://mlh.io/", img: mlh, description: "Major League Hacking (MLH) powers 300+ student hackathons yearly, fostering innovation, community, and coding skills worldwide" }
  ];

  const previusSponsors = [
    { name: "Avanade", "contact": "TA-PR@avanade.com", "website": "https://www.avanade.com/en", img: avanade, description: "Providing digital and cloud services, business solutions, and design-led experiences." },
    { name: "MLH", "contact": "hi@mlh.io", "website": "https://mlh.io/", img: mlh, description: "Major League Hacking (MLH) powers 300+ student hackathons yearly, fostering innovation, community, and coding skills worldwide" }
  ]


  return (
    
    <div className="sponsors-page-container ">
      <head><meta name="viewport" content="width=device-width, initial-scale=1"/></head>

      {/* cloud banner */}
      <div className="cloud-banner">
        
        <div className="cloud-text-container">
          <img src={checkeredFlag} className="checkered-flag left" alt="Checkered Flag" />
          <h1>Our Sponsors</h1>
          <img src={checkeredFlag} className="checkered-flag right" alt="Checkered Flag" />
        </div>

      </div>

      <div className="sponsors-container">
        {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="sponsor-image-wrapper"
              onMouseEnter={() => setHoveredSponsor(index)}
              onMouseLeave={() => setHoveredSponsor(null)}
            >
              <a href={sponsor.website} target="_blank">
                <img src={sponsor.img} className="sponsor-image" alt={sponsor.name} />
              </a> 
              {hoveredSponsor === index && (
                <div className="sponsor-description">
                  <h2 className="company-title">{sponsor.name}</h2>
                  {sponsor.description}
                  <p className="contact-info">{sponsor.contact}</p>
                </div>
              )}
            </div>
          ))}

      </div>

      <div className="previous-sponsors-title">
        Previous Sponsors        
      </div>

      <div className="previous-sponsors-container">
        {previusSponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className="sponsor-image-wrapper"
                onMouseEnter={() => setHoveredSponsor(index)}
                onMouseLeave={() => setHoveredSponsor(null)}
              >
                <a href={sponsor.website} target="_blank">
                  <img src={sponsor.img} className="sponsor-image" alt={sponsor.name} />
                </a> 
                {hoveredSponsor === index && (
                    <div className="sponsor-description">
                      <h2 className="company-title">{sponsor.name}</h2>
                      {sponsor.description}
                      <p className="contact-info">{sponsor.contact}</p>
                    </div>
                )}
              </div>
            ))}
      </div>

      <div className="previous-sponsors-title">
        Sponsorship Prospectus       
      </div>

      <iframe src={sponsorProspectus} className="sponsor-packages" />

      <div className="sponsor-us-container">
        <h1>Interested in Sponsoring?</h1>
        <h3>Email <a href="mailto:cppbroncohacks@gmail.com" target="_blank" className="broncohacks-email-link">cppbroncohacks@gmail.com</a> for sponsorship opportunities</h3>
        <h3>or</h3>
        <h3>Reach out to any of these clubs below!</h3>
      </div>

      <div className="clubs-container">
        <a href="https://www.instagram.com/cppdsai/?hl=en" target="_blank"><img src={dsai_logo} className="club-logo"></img></a>
        <a href="https://www.instagram.com/cppgamedev/?hl=en" target="_blank"><img src={gamedev_logo} className="club-logo"></img></a>
        <a href="https://www.instagram.com/cppshecodes/?hl=en" target="_blank"><img src={shecodes_logo} className="club-logo"></img></a>
        <a href="https://www.instagram.com/gdgcpp/?hl=en" target="_blank"><img src={gdg_logo} className="club-logo"></img></a>
        <a href="https://www.instagram.com/cppcss/?hl=en" target="_blank"><img src={css_logo} className="club-logo"></img></a>
        <a href="https://www.instagram.com/calpolyfast/?hl=en" target="_blank"><img src={fast_logo} className="club-logo"></img></a>
        <a href="https://www.instagram.com/calpolyswift/?hl=en" target="_blank"><img src={swift_logo} className="club-logo"></img></a>
        <a href="https://www.instagram.com/cpp.sea/?hl=en" target="_blank"><img src={sea_logo} className="club-logo"></img></a>
        <a href="https://www.instagram.com/calpolywit/?hl=en" target="_blank"><img src={wit_logo} className="club-logo"></img></a>
        {/* <a href="https://www.instagram.com/cppscript/?hl=en" target="_blank"><img src={script_logo} className="club-logo"></img></a> */}
      </div>
    </div>
  )

}

export default Sponsors;
