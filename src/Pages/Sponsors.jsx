import * as React from "react";
import "../styles/Sponsors.css";
import checkeredFlag from "../Assets/Design/checkeredflag.png";
import sponsorsData from "../Assets/Sponsors/sponsors.json";
import sponsorPackage from "../Assets/Sponsors/sponsorship.png";

// Import the image files
// import adobe from "../Assets/Sponsors/adobe.png";
// import att from "../Assets/Sponsors/att.png";
import avanade from "../Assets/Sponsors/avanade.png";
import mlh from "../Assets/Sponsors/mlh.png";
// import grubhub from "../Assets/Sponsors/grubhub.png";
// import google from "../Assets/Sponsors/google.png";
// import npm from "../Assets/Sponsors/npm.png";
// import react from "../Assets/Sponsors/react.png";
// import tesla from "../Assets/Sponsors/tesla.png";
// import openai from "../Assets/Sponsors/openai.png";

function Sponsors() {
  const [hoveredLogo, setHoveredLogo] = React.useState(null);

  const handleLogoHover = (logo) => {
    setHoveredLogo(logo);
  };

  const handleLogoLeave = () => {
    setHoveredLogo(null);
  };

  // const sponsorLogos = [
  //   { id: 1, logo: react, text: "React" },
  //   { id: 2, logo: tesla, text: "Tesla" },
  //   { id: 3, logo: adobe, text: "Adobe" },
  // ];
  // const sponsorLogos2 = [
  //   { id: 4, logo: avanade, text: "Avanade" },
  //   { id: 5, logo: google, text: "Google" },
  //   { id: 6, logo: npm, text: "npm" },
  // ];
  // const sponsorLogos3 = [
  //   { id: 7, logo: att, text: "AT&T" },
  //   { id: 8, logo: grubhub, text: "Grubhub" },
  //   { id: 9, logo: openai, text: "OpenAI" },
  // ];

  const sponsorLogos = [
    { id: 1, logo: avanade, text: "Avanade" },
    { id: 2, logo: mlh, text: "MLH" },
  ];

  const [isOpen, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="sponsors-container">
      <div className="our-sponsors">
        <div className="cloud-banner">
          <img
            src={checkeredFlag}
            className="checkered-flag left"
            alt="Checkered Flag"
          />
          <div className="cloud-text">
            <h1>Become A Sponsor Today</h1>
          </div>
          <img
            src={checkeredFlag}
            className="checkered-flag right"
            alt="Checkered Flag"
          />
        </div>
        <div className="interested-container">
          <h1>Interested in Sponsoring?</h1>
          <h3>
            Email @cppbroncohacks@gmail.com for sponsorship oppurtunities.
          </h3>
          <h3>-----or-----</h3>
          <h3>Sponsor directly to any of these clubs below.</h3>
        </div>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/cppcss/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://ugc.production.linktr.ee/12da207a-6379-4d6a-b8ff-1b8fbbca1ad4_CFD8FBB7-FFEE-4DA9-A2FE-3C667A69CAE3.png?io=true&size=avatar-v3_0" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/gdsccpp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://ugc.production.linktr.ee/4p5hpFASIaaOcaWE6AdQ_tBDmCVo0020fsjeY?io=true&size=avatar-v3_0" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/cppgamedev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://pbs.twimg.com/profile_images/846356145555980292/hZ7Z5n0X_400x400.jpg" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/calpolyfast/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://cdn.campsite.bio/eyJidWNrZXQiOiJjYW1wc2l0ZS1iaW8tc3RvcmFnZSIsImtleSI6IkNhbFBvbHlGQVNULzk2ZmQ2OGFhLWM4ODEtNGZmYi05YjhjLWEwODliZWNiOWQyMC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjIwMH19fQ==" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/cppdsai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://cppdsai.com/assets/img/Without%20Background.png" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/cppshecodes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://media.licdn.com/dms/image/v2/D560BAQGWIzMbNT4ZJA/company-logo_200_200/company-logo_200_200/0/1728451419126/cpp_shecodes_logo?e=2147483647&v=beta&t=5MgLg-ipCr66gvnhl3TsGGEtl9qcyk6zPJ629Da0dAY" />
            </a>
          </li>
          <li>
              <a
                href="https://www.instagram.com/cpp.sea/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/298273847_801180221039525_1382602391056985971_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=111&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=Lo1WCxn9b7wQ7kNvgFd0ZkY&_nc_zt=24&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=00_AYAJCQftm4qL6N15R4b6sSf6Ef2yCuZLPzp1gcjJWY8ykw&oe=67CD5312" />
              </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/calpolyswift/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="https://scontent-lax3-2.cdninstagram.com/v/t51.2885-19/43985336_2167935469918009_5693803784568832_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=103&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=pro0mu5HS6oQ7kNvgE-UGrL&_nc_zt=24&_nc_ht=scontent-lax3-2.cdninstagram.com&oh=00_AYCsZ-9IOLNxq0j0hmBN_oSfLCgZ9ckChFEAd-Nxa0CIPQ&oe=67CD47DA" />
                </a>
              </li>
        </ul>
        <div className="sponsor-container">
          <button className="sponsor-button">Previous Sponsors</button>
        </div>
        <div className="logo-row">
          {sponsorLogos.map((logo) => {
            // Find the sponsor object in sponsorsData with the matching name
            const sponsor = sponsorsData.find(
              (sponsor) => sponsor.name === logo.text
            );
            return (
              <div
                key={logo.id}
                className="logo-wrapper"
                onMouseEnter={() => handleLogoHover(logo)}
                onMouseLeave={handleLogoLeave}
              >
                <img src={logo.logo} alt={logo.text} />
                {hoveredLogo && hoveredLogo.id === logo.id && (
                  <div className="company-info">
                    <span>
                      <h2 className="company-title">{logo.text}</h2>
                      {/* Check if sponsor is found before accessing its properties */}
                      {sponsor && (
                        <>
                          <p className="sponsor-description">
                            {sponsor.description}
                          </p>
                          <p className="contact-info">{sponsor.email}</p>
                          <p className="website-info">
                            <a
                              href={sponsor.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {sponsor.website}
                            </a>
                          </p>
                        </>
                      )}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* <div className="logo-row">
          {sponsorLogos2.map((logo) => {
            const sponsor = sponsorsData.find((sponsor) => sponsor.name === logo.text);
            return (
              <div key={logo.id} className="logo-wrapper" onMouseEnter={() => handleLogoHover(logo)} onMouseLeave={handleLogoLeave}>
                <img src={logo.logo} alt={logo.text} />
                {hoveredLogo && hoveredLogo.id === logo.id && (
                  <div className="company-info">
                    <span>
                      <h2 className="company-title">{logo.text}</h2>
                      {sponsor && (
                        <>
                          <p className="sponsor-description">{sponsor.description}</p>
                          <p className="contact-info">{sponsor.email}</p>
                          <p className="website-info"><a href={sponsor.website} target="_blank" rel="noopener noreferrer">{sponsor.website}</a></p>
                        </>
                      )}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="logo-row">
          {sponsorLogos3.map((logo) => {
            const sponsor = sponsorsData.find((sponsor) => sponsor.name === logo.text);
            return (
              <div key={logo.id} className="logo-wrapper" onMouseEnter={() => handleLogoHover(logo)} onMouseLeave={handleLogoLeave}>
                <img src={logo.logo} alt={logo.text} />
                {hoveredLogo && hoveredLogo.id === logo.id && (
                  <div className="company-info">
                    <span>
                      <h2 className="company-title">{logo.text}</h2>
                      {sponsor && (
                        <>
                          <p className="sponsor-description">{sponsor.description}</p>
                          <p className="contact-info">{sponsor.email}</p>
                          <p className="website-info"><a href={sponsor.website} target="_blank" rel="noopener noreferrer">{sponsor.website}</a></p>
                        </>
                      )}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="sponsor-container">
        <button className="sponsor-button" onClick={handleClick}>
          Sponsor Package
        </button>
        <img src={sponsorPackage}></img>
      </div>
    </div>
  );
}

export default Sponsors;
