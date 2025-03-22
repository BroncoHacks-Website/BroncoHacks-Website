import "/src/styles/About.css";
import Script from "../Assets/Profile/icon/script.png";
import BroncoHacks2024Winners from "../Components/BroncoHacks2024Winners";
import MiniHack from "../Components/MiniHack";
import Avanade from "../Components/Avanade";
import sea_logo from "../Assets/Clubs/cpp_sea_logo.jpg";
import swift_logo from "../Assets/Clubs/cpp_swift_logo.jpg";

function About() {
  return (
    <div className="about-page-container">
      <div className="about-container">
        <h1>About Us</h1>
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
                  <img src="https://ugc.production.linktr.ee/12da207a-6379-4d6a-b8ff-1b8fbbca1ad4_CFD8FBB7-FFEE-4DA9-A2FE-3C667A69CAE3.png?io=true&size=avatar-v3_0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gdgcpp/"
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
            </ul>
            <ul>
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
                  href="https://www.instagram.com/calpolyscript/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Script} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cpp.sea/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={sea_logo} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/calpolyswift/?hl=en"
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
              upcoming event is BroncoHacks 2025, another 24 hour hackathon that
              is open to all colleges and is completely free of entry!
            </p>
            {/* additional paragraph, unsure what info to add */}
            <br />
          </div>
        </div>
        <div className="line"></div>
        <BroncoHacks2024Winners />
        <div className="line"></div>
        <MiniHack />
        <div className="line"></div>
        <Avanade />
      </div>
    </div>
  );
}

export default About;
