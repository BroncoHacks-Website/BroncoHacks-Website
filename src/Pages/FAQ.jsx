import Balloons from "../assets/Balloon3.png";
import Cloud1 from "../assets/hcloud.png";
import Cloud2 from "../assets/fcloud.png";
import '../styles/Landing.css';
import Footer from "../Components/Footer.jsx";
import NavBar from "../Components/NavBar";
import '../styles/faq.css';
import FAQData from '../Assets/faq_data/FAQdata.jsx';

function FAQ() {
  return (
    <div className="faq-page-wrapper">
      <NavBar />
      
      <div className="faq-main-content">
        <img id="balloons" src={Balloons} alt="balloons" />
        <img id="cloud1" src={Cloud1} alt="cloud" />
        <img id="Cloud2" src={Cloud2} alt="cloud" />
        <img id="Cloud3" src={Cloud2} alt="cloud" />

        <h1 id="title">FREQUENTLY ASKED QUESTIONS</h1>
        
        <div className="faq-container">
          {/* Dynamically rendering the FAQ items */}
          {FAQData.map((item) => (
            <details key={item.id}>
              <summary>{item.question}</summary>
              <div className="faq-content">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FAQ;