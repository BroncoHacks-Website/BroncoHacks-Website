import { useState } from "react";
import PropTypes from "prop-types";
import data from "../Assets/Profile/BroncoHacks2024Winners.js";
import "../styles/PastEvents.css";
import Slideshow from "/src/Components/Slideshow.jsx";

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

const Card = ({ place, title, description, team, members, imagePath }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2
          className={`place ${
            place === 1 ? "first" : place === 2 ? "second" : "third"
          }`}
        >
          {place === 1 ? "1st" : place === 2 ? "2nd" : "3rd"}
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
  place: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(PropTypes.string).isRequired,
  imagePath: PropTypes.string.isRequired,
};

const BroncoHacks2024Winners = () => {
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

  const [category, setCategory] = useState("Web Development");

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
      <h1 className="main-title" id="broncohacks2024-title">BroncoHacks & Previous Winners</h1>
      <p>
        BroncoHacks 2024 took place from February 2nd 2024 - February 3rd 2024.
        There were over 130 participants across two categories: Web Development
        & Cybersecurity. Web Development participants spent 24 hours hacking
        together a project with the theme of{" "}
        <b>
          creating a web application where the intended audience would be CPP
          Students
        </b>{" "}
        On the other hand, cybersecurity teams were tasked with prototyping an
        idea for solving <b>any current cybersecurity issue with AI.</b>
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

export default BroncoHacks2024Winners;
