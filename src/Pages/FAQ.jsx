import Balloons from "../assets/Balloon3.png";
import Cloud1 from "../assets/hcloud.png";
import Cloud2 from "../assets/fcloud.png";
import '../styles/Landing.css'
import Footer from "../Components/Footer.jsx";
import NavBar from "../Components/NavBar";
import '../styles/faq.css'


function FAQ() {
  return (
    <div className="faq-page-wrapper">
      <NavBar />
      
      {/* Main content wrapper to hold the background color and center the FAQ */}
      <div className="faq-main-content">
        <img id="balloons" src={Balloons} alt="balloons" />
        <img id="cloud1" src={Cloud1} alt="cloud" />
        <img id="Cloud2" src={Cloud2} alt="cloud" />

        <h1 id="title">FREQUENTLY ASKED QUESTIONS</h1>
        
        <div className="faq-container">
          <details>
            <summary>What is a hackathon?</summary>
            <div className="faq-content">
              <p>A hackathon is an invention marathon where participants build software or hardware projects from scratch.</p>
            </div>
          </details>

          <details>
            <summary>What is the max/min team size?</summary>
            <div className="faq-content">
              <p>Teams typically range from 1 to 4 members. You can work alone or form a group!</p>
            </div>
          </details>

          <details>
            <summary>Do i need to have experience in programming?</summary>
            <div className="faq-content">
              <p>Not at all! Many hackathons are beginner-friendly and offer workshops to help you learn.</p>
            </div>
          </details>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FAQ;