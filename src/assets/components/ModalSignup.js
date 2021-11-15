import "./CSS/modal.css";

import { useState } from "react";
import axios from "axios";

const Signup = ({ setUser, modal, setModal }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        setModal("false");
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      if (error.response.status === 409) {
        setErrorMessage("User already exists. Please use log in button");
      }
    }
  };

  return (
    <div className={`${modal === "false" ? "hidden" : "modal"}`}>
      <div className="signup-box">
        <button
          type="text"
          onClick={() => {
            setModal("false");
          }}
          className="kill"
        >
          X
        </button>
        <div className="headline">
          <h1>S'inscrire</h1>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={username}
            placeholder="Nom d'utilisateur"
            onChange={(event) => setUserName(event.target.value)}
            className="input-field"
          />
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            className="input-field"
          />
          <input
            type="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(event) => setPassword(event.target.value)}
            className="input-field"
          />
          <div className="newsletter">
            <div className="checkbox">
              <input type="checkbox" />
            </div>
            <p>S'inscrire à notre newsletter</p>
          </div>

          <button type="submit" value={"S'inscrire"} className="submit">
            Submit
          </button>
          <div className="error">
            <p>{errorMessage}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
