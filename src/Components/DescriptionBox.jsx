import "../styles/DescriptionBox.css";
import BroncoHacks_Logo from "../Assets/Profile/icon/BroncoHacks_Logo.png";
import BroncoMascot from "../Assets/DescriptionBox/imgs/cppBroncoMascot.png";

function DescriptionBox() {
  return (
    <>
      <div className="db-container">
        <div className="db-title-wrapper">
          <img
            className="db-logo"
            src={BroncoHacks_Logo}
            alt="BroncoHacks Logo"
          />
          <span className="db-title">
            <h1>BroncoHacks</h1>
            <h2>California State Polytechnic University, Pomona</h2>
          </span>
        </div>
        <div className="db-content-wrapper">
          <img className="db-mascot" src={BroncoMascot} alt="Bronco Mascot" />
          <span className="db-filler"></span>
          <h4>
            BroncoHacks 2026 is a 24 hour, in-person hackathon that's coming to
            Cal Poly Pomona from April 18-19! Registration opens up on March
            2nd. Students from all schools are welcome but each team requires at least 1
            person from CPP.
          </h4>
        </div>
      </div>
    </>
  );
}

export default DescriptionBox;
