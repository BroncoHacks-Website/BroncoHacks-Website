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
            BroncoHacks 2026 will take place at the Cal Poly Pomona
             College of Business Administration, 3801 S University Dr, Pomona, CA 91768 at 9:00am.
             More details will be released in March.
            Students from all schools are welcome!
          </h4>
        </div>
      </div>
    </>
  );
}

export default DescriptionBox;
