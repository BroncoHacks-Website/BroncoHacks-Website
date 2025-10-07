import "../styles/Accordion.css";
import { useState } from "react";
import PropTypes from "prop-types";

function Accordion(props) {
  const accordionData = props.data;
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = () => {
    setIsOpen((v) => !v);
  };

  return (
    <div className="day-section">
      <h3>
        <button className="day-header" onClick={handleClickMenu}>
          {accordionData.title}
        </button>
      </h3>
      <div className={`schedule ${isOpen ? "open" : ""}`}> 
        {accordionData.content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <p className="note">Note: Schedule is subject to change.</p>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.array,
  }).isRequired,
};

export default Accordion;
