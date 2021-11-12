import "./CSS/modal.css";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Signup = ({ setUser, modal, setModal }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      console.log(response);
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      if (error.response.status === 409) {
        setErrorMessage("user already exists, please use login instead");
      }
    }
  };

  return (
    <div className={`${modal === "false" ? "hidden" : "modal"}`}>
      {/* // <div className="modal"> */}
      <div className="signup-box">
        <button
          type="text"
          onClick={() => {
            setModal("false");
          }}
        >
          X
        </button>
        <h1>S'inscrire</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="Nom d'utilisateur"
            onChange={(event) => setUserName(event.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(event) => setPassword(event.target.value)}
          />

          <input type="checkbox" />

          <p>S'inscrire à notre newsletter</p>

          <button type="submit" value={"S'inscrire"} className="subscribe">
            Submit
          </button>
          <p className="error">{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
