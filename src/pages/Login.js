import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email: email, password: password }
      );
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      if (error.response.status === 401) {
        setErrorMessage("incorrect email/password combination");
      }
    }
  };
  return (
    <div className="container">
      <div className="signup-box">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit}>
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

          <button type="submit" value={"S'connecter"} className="subscribe">
            S'connecter
          </button>
          <p className="error">{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};
export default Login;
