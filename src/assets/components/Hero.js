import MainImage from "../img/workstation.jpg";
import Tear from "../img/tear.svg";
import Cookies from "js-cookie";
import ModalSignup from "./ModalSignup";

import { useNavigate } from "react-router";
const Hero = () => {
  const navigate = useNavigate();

  const userToken = Cookies.get("userToken");

  return (
    <div className="hero-background">
      <img src={MainImage} alt="" />
      <div className="discover">
        <h1>Prêts à faire du tri dans vos placards ?</h1>
        <div className="sell">
          <button
            className="teal-button"
            onClick={() => {
              if (userToken) {
                navigate("/publish");
              } else {
                <ModalSignup />;
              }
            }}
          >
            Vends Maintenant
          </button>
        </div>
      </div>
      <div className="tear">
        <img src={Tear} alt="" />
      </div>
    </div>
  );
};

export default Hero;
