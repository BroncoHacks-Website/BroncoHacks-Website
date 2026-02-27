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
      <span>Home</span>
    </a>
        <a href="#" className="nav-button">Team</a>
        <a href="#" className="nav-button">Sponsors</a>
        <a href="#" className="nav-button">Hall of Fame</a>
        <a href="#" className="nav-button">FAQ</a>
      </div>
    </div>
  );
}

export default NavBar;