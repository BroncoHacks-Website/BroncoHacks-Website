import { useEffect, useState, useRef } from "react";
import "../styles/HallOfFame.css";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import Carousel from "../Components/Carousel.jsx";
import hof from "../Assets/data/HOFdata.jsx";

const HallOfFame = () => {

  const [hofYear, setHofYear] = useState(null);
  const [yearObj, setYearObj] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownMenuRef = useRef(null);
  const dropdownRef = useRef(null);

  const [category, setCategory] = useState("");

  useEffect(() => {
    if (hof && hof.length > 0) {
      const latestYear = Math.max(...hof.map(item => item.year));
      setHofYear(latestYear);
    }

    // closes dropdown when clicked elsewhere
    function handleClick(event) {
      if (
        dropdownMenuRef.current && dropdownRef.current &&
        !dropdownMenuRef.current.contains(event.target) &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  useEffect(() => {
    const obj = hof.find((item) => item.year === hofYear);
    setYearObj(obj);
  }, [hofYear]);

  const selectYear = (year) => {
    setHofYear(year);
    setDropdownOpen(false);
  };

  return (
    <>
      <NavBar />
      <div className="hof-dd-cont">
        <div style={{position: 'relative', width: '200px'}}>
          <div 
            className="hof-dropdown"
            ref={dropdownRef}
            onClick={() =>setDropdownOpen(!dropdownOpen)}
          >
            Select Year: {hofYear}
            <span className="dropdown-arrow">▼</span>
          </div>


          {dropdownOpen && (
            <div className="hof-menu" ref={dropdownMenuRef}>
              {hof.map((el) => el.year).toReversed().map((yr) => {
                return (
                  <div 
                    key={yr}
                    className="hof-option"
                    onClick={() => selectYear(yr)}
                  >
                    {yr}
                  </div>
                )
              })
              }
            </div>
          )}
          </div>
      </div>

      {yearObj ? 
        <div className="hall-of-fame" key={yearObj.year}>
          <div className="hall-wrapper">
            <h1 className="section-heading">
              BRONCOHACKS {yearObj.year} WINNERS
            </h1>

            <p className="section-description-text">
              {yearObj.description}
            </p>

            <Carousel items={yearObj.mainWinners} />

            <h2 className="section-subheading">
              BEST IN <span>{category}</span>
            </h2>

            <Carousel items={yearObj.categoryWinners}
              onCarouselSwitch={(element) => setCategory(element)} />

            {yearObj.mlhWinners
            ?
            <></>
            :
            null
            }

          </div>
        </div>
      : null
      }

      <Footer />
    </>
  );
};

export default HallOfFame;