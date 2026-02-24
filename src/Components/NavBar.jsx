import logo from "../assets/logo.png";

function NavBar() {
  return (
    <div id="navbar">
      <div className="logo">
        <img src={logo} alt="BroncoHacks Logo" />
        <div className="logo-text">
          <span>BRONCO</span>
          <span>HACKS</span>
        </div>
      </div>

      <div className="nav-buttons">
        
    <a href="#" className="nav-button nav-home">
  Home
</a>
        <a href="#" className="nav-button nav-button-blue">Team</a>
        <a href="#" className="nav-button nav-button-blue">Sponsors</a>
        <a href="#" className="nav-button nav-button-blue">Hall of Fame</a>
        <a href="#" className="nav-button nav-button-blue">FAQ</a>
      </div>
    </div>
  );
}

export default NavBar;