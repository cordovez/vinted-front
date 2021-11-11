import Logo from "../img/vinted.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to={"/"}>
          <div className="logo">
            <img src={Logo} alt="vinted-logo" />
          </div>
        </Link>
        <div className="search">
          <input
            className="search"
            type="search"
            placeholder="Recherche des articles "
          />
        </div>
        <nav className="topnav">
          <button className="white-button visible">
            S'inscrire | Se connecter
          </button>
          <button className="teal-button visible">Vends Maintenant</button>
          <button className="purple-button hidden">Vends Maintenant</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
