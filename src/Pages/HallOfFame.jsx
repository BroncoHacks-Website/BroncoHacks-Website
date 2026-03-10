import React from "react";
import "../styles/HallOfFame.css";

import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer.jsx";

const HallOfFame = () => {
    return (
        <>
            <NavBar />
            <div className="hall-of-fame">
                <div className="carousel-container">
                    <div className="section-heading">BRONCOHACKS 2025 WINNERS</div>
                    <div className="section-description">
                        <div className="section-description-text">
                            BroncoHacks 2025 took place from April 18 2025 - April 19 2025.
                            There were over 200 participants across six categories: Best Web
                            Development, Best Cybersecurity, Best Data Science/AI, Best Game
                            Development, Best UI/UX, Best Team Name, and Overall Placements.
                            Participants spent 24 hours hacking together on a project with the
                            theme of <span className="section-theme-text">“Create a project for a problem in a community.”</span>
                        </div>
                    </div>
                    
                </div>

                <div className="carousel-container">
                    
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HallOfFame