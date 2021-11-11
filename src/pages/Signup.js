//   envoyer le body de axios

//   "onchange" on input
//  setState of each onchange
//  onSubmit => (pour faire la requete)
// envoyer le "body" dans la requete

// recevoir le token pour gerer le cookie

import "../assets/components/CSS/signup.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handleUser = (event) => {
    const value = event.target.value;
    setUser(value);
  };
  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          {
            user: user,
            email: email,
            password: password,
          }
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [email, password, user]);

  return isLoading ? (
    <div className="container">
      <div className="signup-box">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user"
            value={user}
            placeholder="Nom d'utilisateur"
            onChange={handleUser}
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleEmail}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Mot de passe"
            onChange={handlePassword}
          />

          <input type="checkbox" />

          <p>S'inscrire à notre newsletter</p>

          <button type="submit" value="Submit" className="subscribe">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  ) : (
    <p>Loading ...</p>
  );
};

export default Signup;
