import { useState, useEffect } from "react";
import ArrowLeft from "../assets/decor/carousel_left.svg";
import ArrowRight from "../assets/decor/carousel_right.svg";

const Carousel = ({ items, onCarouselSwitch }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const getPosition = (index) => {
    if (index === current) return "center";
    if (index === (current - 1 + items.length) % items.length) return "left";
    if (index === (current + 1) % items.length) return "right";
    return "hidden";
  };

  useEffect(() => {
    if (onCarouselSwitch && items.length > 0) {
        onCarouselSwitch(items[current].placement);
    }
  }, [current, items, onCarouselSwitch]);

  return (
    <div className="carousel-wrapper">

      <button className="nav-arrow left" onClick={prev}>
        <img src={ArrowLeft} alt="prev" />
      </button>

      <div className="carousel">
        {items.map((item, index) => {
          const position = getPosition(index);

          const handleClick =
            position === "left" ? prev :
              position === "right" ? next :
                undefined;

          return (
            <div
              key={index}
              className={`carousel-card ${position}`}
              onClick={handleClick}
              style={{ cursor: handleClick ? "pointer" : "default" }}
              role={handleClick ? "button" : undefined}
              tabIndex={handleClick ? 0 : undefined}
            >
              <div className="placement">{item.placement}</div>

              <div className="card-image-frame">
                <img src={item.img} alt="" loading="lazy"/>
              </div>

              <h3 className="project-title">{item.title}</h3>
              <p className="project-description">{item.description}</p>

              {item.names && (
                <div className="team-name">{item.names}</div>
              )}
            </div>
          );
        })}
      </div>

      <button className="nav-arrow right" onClick={next}>
        <img src={ArrowRight} alt="next" />
      </button>

    </div>
  );
};

export default Carousel;