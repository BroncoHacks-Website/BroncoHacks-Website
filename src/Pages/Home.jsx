import balloon from "../Assets/Balloon2.png";
import star1 from "../Assets/star1.png";
import star2 from "../Assets/star2.png";
import star3 from "../Assets/star3.png";
import cloud1 from "../Assets/hcloud.png";
import cloud2 from "../Assets/hcloud2.png";
import cloud3 from "../Assets/fcloud.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="hero">

      {/* Clouds */}
      <img src={cloud1} className="cloud cloud-left" alt="" />
      <img src={cloud2} className="cloud cloud-right" alt="" />
      <img src={cloud3} className="cloud cloud-middle" alt="" />

      {/* Stars */}
      <img src={star1} className="star star1" alt="" />
      <img src={star2} className="star star2" alt="" />
      <img src={star3} className="star star3" alt="" />

      <div className="container">
        <img src={balloon} className="balloon" alt="Balloon" />

        <div className="content">
          <div className="card">
            <h1>BRONCOHACKS</h1>
            <p className="subtitle">Hosted by Cal Poly Pomona</p>
            <p className="date">April 25–26</p>

            {/* COUNTDOWN */}
            <div className="timer">

              <div className="group">
                <div className="digits">
                  <div className="box">1</div>
                  <div className="box">2</div>
                </div>
                <span className="timer-label">Days</span>
              </div>

              <div className="group">
                <div className="digits">
                  <div className="box">3</div>
                  <div className="box">4</div>
                </div>
                <span className="timer-label">Hours</span>
              </div>

              <div className="group">
                <div className="digits">
                  <div className="box">5</div>
                  <div className="box">6</div>
                </div>
                <span className="timer-label">Minutes</span>
              </div>

            </div>
          </div>

          <Link to="/register" className="btn">
            REGISTER NOW !
          </Link>
        </div>
      </div>

    </section>
  );
}

export default Home;