import Balloons from "../assets/Balloon3.png";
import Cloud1 from "../assets/hcloud.png";
import Cloud2 from "../assets/fcloud.png";
import '../styles/Landing.css';
import Footer from "../Components/Footer.jsx";
import NavBar from "../Components/NavBar";
import '../styles/faq.css';

// 1. Dynamic Data Array: Easy to edit and expand!
const faqData = [
  {
    id: 1,
    question: "What is a hackathon?",
    answer: "A hackathon is an invention marathon where participants build software or hardware projects from scratch."
  },
  {
    id: 2,
    question: "What is the max/min team size?",
    answer: "Teams typically range from 1 to 4 members. You can work alone or form a group!"
  },
  {
    id: 3,
    question: "Do I need to have experience in programming?",
    answer: "Not at all! Many hackathons are beginner-friendly and offer workshops to help you learn."
  }
];

function FAQ() {
  return (
    <div className="faq-page-wrapper">
      <NavBar />
      
      <div className="faq-main-content">
        <img id="balloons" src={Balloons} alt="balloons" />
        <img id="cloud1" src={Cloud1} alt="cloud" />
        <img id="Cloud2" src={Cloud2} alt="cloud" />

        <h1 id="title">FREQUENTLY ASKED QUESTIONS</h1>
        
        <div className="faq-container">
          {/* Dynamically rendering the FAQ items */}
          {faqData.map((item) => (
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