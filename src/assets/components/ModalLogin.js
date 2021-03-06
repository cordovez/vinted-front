import "./CSS/modal.css";

import { useState } from "react";
import axios from "axios";

const Login = ({ modal2, setModal2, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response);
      if (response.data.token) {
        setUser(response.data.token);
        setModal2("false");
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      if (error.status === 401) {
        setErrorMessage("incorrect email/password combination");
      }
    }
  };

  return (
    <div className={`${modal2 === "false" ? "hidden2" : "modal2"}`}>
      <div className="login-box">
        <button
          className="kill"
          type="text"
          onClick={() => {
            setModal2("false");
          }}
        >
          X
        </button>
        <div className="headline">
          <h1>Se connecter</h1>
        </div>

        <form onSubmit={handleSubmit} className="form">
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

          <button type="submit" value={"Se connecter"} className="submit">
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

export default Login;
