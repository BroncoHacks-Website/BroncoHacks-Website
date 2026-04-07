import balloon from "../Assets/decor/Balloon2.png";
import star1 from "../assets/decor/star1.png";
import star2 from "../assets/decor/star2.png";
import star3 from "../assets/decor/star3.png";
import cloud1 from "../assets/decor/hcloud.png";
import cloud2 from "../assets/decor/hcloud2.png";
import cloud3 from "../assets/decor/fcloud.png";
import '../styles/Landing.css'

import React, { useState, useEffect } from 'react'

const Landing = () => {
  const targetDate = '2026-04-25T12:00:00';
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);


  const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    
    return [
      String(days).padStart(2, "0").split(""),
      String(hours).padStart(2, "0").split(""),
      String(minutes).padStart(2, "0").split(""),
    ];
  };

  const timerLabels = ["Days", "Hours", "Minutes"];
  const digitPairs = getReturnValues(countDown);

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

      <div className="container landing">

        <img src={balloon} className="balloon" alt="Balloon" />

        <div className="content">
          <div className="card">
            <h1>BRONCOHACKS</h1>
            <p className="subtitle">Hosted by Cal Poly Pomona</p>
            <p className="date">April 25–26</p>

            <div className="timer">
              {timerLabels.map((label, labelIndex) => (
                <div className="group" key={labelIndex}>
                  <div className="digits">
                    <div className="box">{digitPairs[labelIndex][0]}</div>
                    <div className="box">{digitPairs[labelIndex][1]}</div>
                  </div>
                  <span className="timer-label">{label}</span>
                </div>
              ))}
            </div>

          </div>

         <a href="https://forms.gle/2ZYGJNLVgud5apyX8" target="_blank" rel="noopener noreferrer" className="btn">
  <span>REGISTER NOW !</span>

</a>
        </div>
      </div>
    </section>
  )
}

export default Landing;