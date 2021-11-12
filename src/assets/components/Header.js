import Logo from "../img/vinted.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();

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
        {token ? (
          <button
            onClick={() => {
              setUser(null);
              navigate("/");
            }}
            className="disconnect"
          >
            Déconnexion
          </button>
        ) : (
          <nav className={() => (token ? "topnav " : "topnav ")}>
            <Link to="/signup">
              <button className="white-button">S'inscrire</button>
            </Link>
            <Link to="/login">
              <button className="white-button">Se connecter</button>
            </Link>
          </nav>
        )}

        <div className="sell">
          <button className="teal-button visible">Vends Maintenant</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
