import { useState } from "react";
import PropTypes from "prop-types";
import data from "../Assets/Profile/BroncoHacks2025Winners.js";
import "../styles/PastEvents.css";
import Slideshow from "/src/Components/Slideshow.jsx";


import Overview1 from "../Assets/BroncoHacks2025Photos/overview1.jpg";
import Overview2 from "../Assets/BroncoHacks2025Photos/overview2.jpg";
import Overview3 from "../Assets/BroncoHacks2025Photos/overview3.jpg";
import Overview4 from "../Assets/BroncoHacks2025Photos/overview4.jpg";
import Overview5 from "../Assets/BroncoHacks2025Photos/overview5.jpg";
import Overview6 from "../Assets/BroncoHacks2025Photos/overview6.jpg";
import judges from "../Assets/BroncoHacks2025Photos/judges.jpg";

const Card = ({ category, place, title, description, team, members, imagePath }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2
          className={`place ${
            place === 0 ? "category" : place === 1 ? "first" : place === 2 ? "second" : place === 3 ? "third" : place === 4 ? "fourth" : place === 5 ? "fifth" : "ERROR"
          }`}
        >
          {place === 0 ? category : place === 1 ? "1st" : place === 2 ? "2nd" : place === 3 ? "3rd" : place === 4 ? "4th" : place === 5 ? "5th" : "ERROR"}
        </h2>
        <div className="pic-placeholder">
          <img src={imagePath} alt="Winner Photo" />
        </div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <h4 className="team">{team}</h4>
        <ul className="members">
          {members.map((member, index) => (
            <li key={index} className="member">
              <span>{member}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


Card.propTypes = {
  category: PropTypes.string,
  place: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagePath: PropTypes.string,
};


const BroncoHacks2025Winners = () => {
  const slidesData = [
    { url: judges },
    { url: Overview1 },
    { url: Overview2 },
    { url: Overview3 },
    { url: Overview4 },
    { url: Overview5 },
    { url: Overview6 },
  ];

  const [category, setCategory] = useState("Winners");

  const nextCategory = () => {
    const categories = Object.keys(data);
    const currentIndex = categories.indexOf(category);
    const nextIndex = (currentIndex + 1) % categories.length;
    setCategory(categories[nextIndex]);
  };

  const prevCategory = () => {
    const categories = Object.keys(data);
    const currentIndex = categories.indexOf(category);
    const prevIndex =
      (currentIndex - 1 + categories.length) % categories.length;
    setCategory(categories[prevIndex]);
  };

  return (
    <div className="winner-container">
      <h1 className="main-title" id="broncohacks2025-title">BroncoHacks 2025 Winners</h1>
      <p>
        BroncoHacks 2025 took place from April 18 2025 - April 19 2025.
        There were over 200 participants across six categories: Best Web Development, Best Cybersecurity, Best Data Science/AI, Best Game Development, Best UI/UX, Best Team Name, and Overall Placements.
        Participants spent 24 hours hacking
        together on a project with the theme of{" "}
        <b>
          Create a project for a problem in a community
        </b>{" "}
      </p>
      <h2 className="category-title">{category}</h2>
      <div className="navigation-container-mobile">
        <div className="winner-buttons-mobile">
          <button onClick={prevCategory} className="nav-button">
            &#8592;
          </button>
          <button onClick={nextCategory} className="nav-button">
            &#8594;
          </button>
        </div>
        <div className="card-container">
          {data[category].map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="navigation-container">
        <button onClick={prevCategory} className="nav-button">
          &#8592;
        </button>
        <div className="card-container">
          {data[category].map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <button onClick={nextCategory} className="nav-button">
          &#8594;
        </button>
      </div>
      <div className="slideshow">
        <Slideshow slides={slidesData} />
      </div>
    </div>
  );
};

export default BroncoHacks2025Winners;
