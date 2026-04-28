import "../styles/Footer.css";
import BroncoHacks_Logo from "../Assets/Icons/revised_bh_logo.svg";
import BroncoHacks_Bg from "../Assets/Profile/Icons/footer_mountains_lessmargin.png";
import Discord from "../Assets/Profile/Icons/icon_discord.png";
import Instagram from "../Assets/Profile/Icons/icon_insta.png";
import LinkedIn from "../Assets/Profile/Icons/icon_linkedin.png";

function Footer() {
    return (
      <footer className = "footer-container">
          <img id = "footer_bg" src = {BroncoHacks_Bg} alt="mountains"/>

        <div className = "footer-bottom-section">

          <div className="footer-main-content">
            {/*Logo and Title (Left side of footer)*/}
            <div className = "footer-left">
            <img className="broncohackslogo" src={BroncoHacks_Logo} alt = "BroncoHacks Logo"/>
             <div id="title-container">
              <h1 className="title">BRONCO</h1>
              <h1 class="title">HACKS</h1>
            </div>
            </div>
          

          {/* RIGHT: Socials*/}
          <div className="footer-right">
            <h4 id="socials-header">Connect with Us!</h4>
            <a href="mailto: cppbroncohacks@gmail.com" id="email_link">cppbroncohacks@gmail.com</a>
            <ul className ="socials-list">
            <li><a href="https://www.instagram.com/cppbroncohacks/" target="_blank" rel="noopener noreferrer"><img src={Instagram} className="socials_img"/></a></li>
            <li><a href="https://www.linkedin.com/company/broncohacks/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} className="socials_img"/></a></li>
            <li><a href="https://discord.gg/zVNQRgG" target="_blank" rel="noopener noreferrer"><img src={Discord} className="socials_img"/></a></li>
            </ul>
          </div>

          </div>

          {/*BOTTOM: Copyright */}
          <div className = "footer-bottom">
            <p id="rights_reserved_text">&copy;BroncoHacks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer