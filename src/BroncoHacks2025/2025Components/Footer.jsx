import "../styles/Footer.css";
import BroncoHacks_Logo from "../Assets/Profile/icon/BroncoHacks_Logo.png";
import Discord from "../Assets/Profile/icon/Discord.png";
import Instagram from "../Assets/Profile/icon/Instagram.png";
import LinkedIn from "../Assets/Profile/icon/linkedin-small.png";

function Footer() {
    return (
      <footer>
        <div className="container">
          <div className="footer-content">
            <img className="broncohackslogo" src={BroncoHacks_Logo}/>
          </div>
          
          <p id="rights_reserved_text">&copy;BroncoHacks. All rights reserved.</p>

          <div className="footer-content">
            <h4 id="socials-header">Connect with Us</h4>
            <a href="mailto: cppbroncohacks@gmail.com" id="email_link">cppbroncohacks@gmail.com</a>
            <ul>
            <li><a href="https://discord.gg/aFD3eCVvhR" target="_blank" rel="noopener noreferrer"><img src={Discord} className="socials_img" /></a></li>
            <li><a href="https://www.instagram.com/cppbroncohacks/" target="_blank" rel="noopener noreferrer"><img src={Instagram} className="socials_img"/></a></li>
            <li><a href="" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} className="socials_img"/></a></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer