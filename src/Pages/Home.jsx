import NavBar from "../Components/NavBar";
import Landing from "../Components/Landing";
import { useState } from "react";
import Footer from "../Components/Footer.jsx";
import "../styles/Home.css";
import Schedule from "../Assets/schedule/schedule_2026.jpg";

function Home() {
  return (
    <>
      <NavBar />
      <Landing />
      <div>

        <div className="info-section">
          <div className="section-one">
            <div className="what-is-broncohacks">
              <div className="cloud-decor"></div>
              <h2>What is BroncoHacks?</h2>
              <p>BroncoHacks is a 24-hour event where students come together in teams of 1 to 4 members to develop projects that align with our event themes. Whether you're just starting or already an experienced coder, we welcome you to join our community of passionate hackers!
              </p>
            </div>
            <img className="billy-computer-img" src="/Billy.png" alt="Billy using a laptop"></img>
             <img className="sparkle-decor" src="/sparkle.png" alt="decor"></img>
          </div>
          <div className="section-two">
            <iframe style={{ border: "2px solid #1F4993", borderRadius: "3px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.3145818285593!2d-117.82258092443325!3d34.061449217244395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32eae2ef62b11%3A0xffa7175307e0705c!2sCal%20Poly%20Pomona%20College%20of%20Business%20Administration!5e0!3m2!1sen!2sus!4v1774402900074!5m2!1sen!2sus" width="35%" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
            <div className="student-led">
              
              <h2>Cal Poly Pomona's Student-Led Hackathon Committee</h2>
              <p>BroncoHacks is a student-led organization with the intended goal of bringing 
                hackathon culture to CPP and the surrounding area. Since its establishment
                in 2023, Broncohacks has held "MiniHack", a 6 hour hackathon intended for beginners
                every fall, as well as BroncoHacks, a 24-hour in-person hackathon every spring.
                Our upcoming event, BroncoHacks 2026, is open to all colleges and is completely free of entry!
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div className="schedule-container">
            <h1 id="schedule-title">Schedule</h1>
            <img src={Schedule}></img>
          </div>

          {/* <div className="archive-container">
            <h2>Archive</h2>
            <p>Learn more about previous events (Minihack, Avande AI)
               led by the BroncoHacks committee.</p>
            <a href="" className="learn-more"><span>Learn more {'>'}</span></a>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;