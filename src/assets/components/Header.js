import "./CSS/reset.css";
import "./CSS/modal.css";
import Logo from "../img/vinted.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import ModalSignup from "./ModalSignup";
import ModalLogin from "./ModalLogin";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState("false");
  const [modal2, setModal2] = useState("false");
  const [disconnect, setDisconnect] = useState("hidden");

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
            <button
              className={{ disconnect }}
              onClick={() => {
                setUser(null);
                navigate("/");
                setDisconnect("hidden");
              }}
            >
              Déconnexion
            </button>
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
            <button className="teal-button visible">Vends Maintenant</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
