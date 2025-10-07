import logo from "/src/Assets/Profile/icon/BroncoHacks_Logo.png";
import "../styles/Schedule.css";
import Accordion from "../Components/Accordion";
import { accordionData } from "../Assets/Accordion/accordionData";

function Schedule() {
  return (
    <div className="schedule-page">
      <div className="schedule-title-container">
        <h1 className="schedule-title">Schedule</h1>
      </div>

      <div className="schedule-container">
        <div className="basic-info">
          <img src={logo} alt="Logo" width={125} height={125} loading="lazy" decoding="async" />
          <div className="title">
            <h1>BroncoHacks 2025</h1>
            <div className="location-details">
              <p>Date: April 18-19th 2025</p>
              <p>Building: Building 163</p>
              <p>Room: See Various Locations Below</p>
            </div>
          </div>
        </div>

        {accordionData.map((accordData, index) => (
          <Accordion data={accordData} key={index}></Accordion>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
