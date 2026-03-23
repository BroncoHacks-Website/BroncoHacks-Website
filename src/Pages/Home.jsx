import NavBar from "../Components/NavBar";
import Landing from "../Components/Landing";
import Footer from "../Components/Footer.jsx";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <NavBar />
      <Landing />

      <div className="info-section">
        <div className="section-one">
          <div className="what-is-broncohacks">
            <div className="cloud-decor"></div>
            <h2>What is BroncoHacks?</h2>
            <p>
              BroncoHacks 2026 is a 24 Hour, in-person hackathon that's coming to
              Cal Poly Pomona in April! More details will be released in March.
              Students from all schools are welcome!
            </p>
          </div>

          <img
            className="billy-computer-img"
            src="/Billy.png"
            alt="Billy using a laptop"
          />

          <img
            className="sparkle-decor"
            src="/sparkle.png"
            alt="decor"
          />
        </div>

        <div className="section-two">
          <img
            className="horse-pic"
            src="/Horse.png"
            alt="Horse in the rain"
          />

          <div className="student-led">
            <h2>Cal Poly Pomona's Student-Led Hackathon Committee</h2>
            <p>
              BroncoHacks is a student-led organization with the intended goal of
              bringing hackathon culture to CPP and the surrounding area. Since
              its establishment in 2023, BroncoHacks has held "MiniHack", a 6
              hour hackathon intended for beginners every fall, as well as
              BroncoHacks, a 24-hour in-person hackathon every spring. Our
              upcoming event is BroncoHacks 2026, another 24 hour hackathon that
              is open to all colleges and is completely free of entry!
            </p>
          </div>
        </div>

        <div className="archive-container">
          <h2>Archive</h2>
          <p>
            Learn more about previous events (MiniHack, Avande AI) led by the
            BroncoHacks committee.
          </p>
          <a href="" className="learn-more">
            <span>Learn more {">"}</span>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;