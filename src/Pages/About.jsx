import "/src/styles/About.css";
import Script from "../Assets/Profile/icon/script.png";
import BroncoHacks2025Winners from "../Components/BroncoHacks2025Winners";
import MiniHack from "../Components/MiniHack";
import Avanade from "../Components/Avanade";

import css_logo from "../Assets/Clubs/cpp_css_logo.png";
import gdg_logo from "../Assets/Clubs/cpp_gdg_logo.png";
import gamedev_logo from "../Assets/Clubs/cpp_game_dev_logo.png";
import fast_logo from "../Assets/Clubs/cpp_fast_logo.png";
import dsai_logo from "../Assets/Clubs/cpp_ds_ai_logo.png";
import shecodes_logo from "../Assets/Clubs/cpp_shecodes_logo.png";
import script_logo from "../Assets/Clubs/cpp_script_logo.png";
import sea_logo from "../Assets/Clubs/cpp_sea_logo.png";
import swift_logo from "../Assets/Clubs/cpp_swift_logo.png";
import wit_logo from "../Assets/Clubs/cpp_wit_logo.png";


function About() {
  return (
    <div className="about-page-container">

      <div className="about-title-container">
        <h1 className="about-title">About Us</h1>
      </div>

      <div className="about-container">
        <div className="about-container-items">
          <div className="about-container-clubs">
            <h2>In Association With</h2>
            <ul>  
              <li>
                <a
                  href="https://www.instagram.com/cppcss/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={css_logo} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gdgcpp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gdg_logo} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cppgamedev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gamedev_logo} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/calpolyfast/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fast_logo} />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/cppdsai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={dsai_logo} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cppshecodes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={shecodes_logo} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/calpolywit/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={wit_logo} />
                </a>
              </li>
              {/* <li>
                <a
                  href="https://www.instagram.com/calpolyscript/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={script_logo} />
                </a>
              </li> */}
              <li> 
                <a
                  href="https://www.instagram.com/cpp.sea/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={sea_logo} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/calpolyswift/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={swift_logo} />
                </a>
              </li>
            </ul>
          </div>
          <div className="about-container-right">
            <h2>Cal Poly Pomona's Student-Led Hackathon Committee</h2>
            <p>
              BroncoHacks is a student-led organization with the intended goal
              of bringing hackathon culuture to CPP and the surrounding area.
              Since its establishment in 2023, BroncoHacks has held "MiniHack",
              a 6 hour hackathon intended for beginners every fall, as well as
              BroncoHacks a 24 hour in person hackathon every Spring. Our
              upcoming event is BroncoHacks 2026, another 24 hour hackathon that
              is open to all colleges and is completely free of entry!
            </p>
            {/* additional paragraph, unsure what info to add */}
            <br />
          </div>
        </div>
        <div className="line"></div>
        <BroncoHacks2025Winners />
        <div className="line"></div>
        <MiniHack />
        <div className="line"></div>
        <Avanade />
      </div>
    </div>
  );
}

export default About;
