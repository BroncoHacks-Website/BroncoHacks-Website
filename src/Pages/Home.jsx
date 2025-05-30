import Slideshow from "/src/Components/Slideshow.jsx";
// import { slidesData } from "../Assets/Profile/slidesData";
import DescriptionBox from "../Components/DescriptionBox";
import Countdown from "../Components/Countdown";
import "/src/styles/Home.css";
import { useState } from "react";

import Food1 from "../Assets/BroncoHacks2024Photos/Food1.jpg";
import Judge1 from "../Assets/BroncoHacks2024Photos/Judge1.jpg";
import Judge2 from "../Assets/BroncoHacks2024Photos/Judge2.jpg";
import Overview1 from "../Assets/BroncoHacks2024Photos/Overview1.jpg";
import Overview2 from "../Assets/BroncoHacks2024Photos/Overview2.jpg";
import Overview3 from "../Assets/BroncoHacks2024Photos/Overview3.jpg";
import Overview4 from "../Assets/BroncoHacks2024Photos/Overview4.jpg";
import Overview5 from "../Assets/BroncoHacks2024Photos/Overview5.jpg";
import Overview6 from "../Assets/BroncoHacks2024Photos/Overview6.jpg";
import Winners1 from "../Assets/BroncoHacks2024Photos/Winners1.jpg";
import Banner from "../Assets/BroncoHacks_Banner_ScreenWidth_2.png";
import ClickableBanner from "../Assets/ClickableBanner.png";

function Home() {
  const [mouseHover, setMouseHover] = useState(false);

  const slidesData = [
    { url: Food1 },
    { url: Judge1 },
    { url: Judge2 },
    { url: Overview1 },
    { url: Overview2 },
    { url: Overview3 },
    { url: Overview4 },
    { url: Overview5 },
    { url: Overview6 },
    { url: Winners1 },
  ];

  return (
    <>
      <div className="home-featured-container">
        <div className="banner-container">
          {mouseHover ? (
            <img src={ClickableBanner} className="broncohacks_banner"></img>
          ) : (
            <img src={Banner} className="broncohacks_banner"></img>
          )}

          {/* <img src={Banner1} className="broncohacks_banner"></img> */}
          {/* <a href="https://broncohacksportal.org/" class="sign-up-link" target="_blank" onMouseEnter={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)} style={{ cursor: mouseHover ? `url(${bruh}), auto` : "pointer" }}> */}
          <a
            href="https://www.broncohacksportal.org/"
            className="sign-up-link"
            target="_blank"
            onMouseEnter={() => setMouseHover(true)}
            onMouseLeave={() => setMouseHover(false)}
          ></a>
        </div>
        {/* <img src={Banner2} className="broncohacks_banner"></img> */}

        <a
          className="register-button"
          href="https://www.broncohacksportal.org/"
          target="_blank"
        >
          Register Now!
        </a>

        <Countdown
          deadline="April, 18, 2025"
          title="BroncoHacks 2025 is starting in"
        />

        <div className="home-featured-row">
          <div className="description-box">
            <DescriptionBox />
          </div>
          <div className="containerStyles">
            <Slideshow slides={slidesData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
