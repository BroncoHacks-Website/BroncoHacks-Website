import "../styles/HallOfFame.css";
import MainWinners from "../Assets/data/HOF2026";
import SpecialWinners from "../Assets/data/HOF2026_cat";
import Carousel from "./Carousel";
import { useState } from 'react';

const HoF26 = () => {

    const [special, setSpecial] = useState("HARDWARE");

    return (<>
        <div className="hall-of-fame">
            <div className="hall-wrapper">
                <h1 className="section-heading">
                    BRONCOHACKS 2026 WINNERS
                </h1>

                <p className="section-description-text">
                    BroncoHacks 2026 took place from April 25 - April 26, 2026.
                    There were over 200 participants across 
                    <span className="section-theme-text">
                        &nbsp;3 main tracks: Education, Fitness, and Sustainability
                    </span>
                    &nbsp;&mdash;&nbsp;
                    <span className="section-theme-text">
                        6 special awards: Best Hardware, Best Beginner, Best Use of Vercel, 
                        Best AI/ML, Best UI/UX, Best Cybersecurity
                    </span> 
                    &nbsp;&mdash;&nbsp;as well as&nbsp;
                    <span className="section-theme-text">
                        5 MLH sponsor tracks: Best Use of Google Gemini API, 
                        Best Use of ElevenLabs, Best Use of Solana, Best Use of Auth0 Login, 
                        Best Use of Backboard
                    </span>.
                </p>

                <Carousel items={MainWinners} />

                <h2 className="section-subheading">
                    BEST IN <span>{special}</span>
                </h2>

                <Carousel items={SpecialWinners} onCarouselSwitch={(special) => setSpecial(special)} />
            </div>
        </div>
    </>);
};

export default HoF26;