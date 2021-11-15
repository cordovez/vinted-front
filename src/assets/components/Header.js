import "./CSS/reset.css";
import "./CSS/modal.css";
import Logo from "../img/vinted.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import ModalSignup from "./ModalSignup";
import ModalLogin from "./ModalLogin";

const Header = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState("false");
  const [modal2, setModal2] = useState("false");
  // const [disconnect, setDisconnect] = useState("visible");

  const [token, setToken] = useState(null);
  const setUser = (token) => {
    if (token) {
      Cookies.set("user-token", token, { expires: 30 });
    } else {
      Cookies.remove("user-token");
    }
    setToken(token);
  };
  return (
    <>
      <div className="header">
        <ModalSignup modal={modal} setModal={setModal} />
        <ModalLogin modal2={modal2} setModal2={setModal2} />
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
            <div className="disconnect">
              <button
                className="disconnect"
                onClick={() => {
                  setUser(null);
                  navigate("/");
                }}
              >
                Déconnexion
              </button>
            </div>
          ) : (
            <nav>
              <Link to="/">
                <button
                  onClick={() => {
                    setModal("true");
                  }}
                  className="white-button"
                >
                  S'inscrire
                </button>
              </Link>
              <Link to="/">
                <button
                  onClick={() => {
                    setModal2("true");
                  }}
                  className="white-button"
                >
                  Se connecter
                </button>
              </Link>
            </nav>
          )}

          <div className="sell">
            <button className="teal-button">Vends Maintenant</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
