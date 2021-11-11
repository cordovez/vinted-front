import "../assets/components/CSS/signup.css";
import { useNavigate } from "react-router";

const Signup = () => {
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="signup-box">
        <h1>S'inscrire</h1>
        <form
          onSubmit={() => {
            navigate();
            //   `https://lereacteur-vinted-api.herokuapp.com/user/signup/:${user}/:{$email}/:${password}`
          }}
        >
          <input type="text" placeholder="Nom d'utilisateur" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mot de passe" />

          <input type="checkbox" />

          <p>S'inscrire à notre newsletter</p>

          <button type="submit" onclick="" className="subscribe">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
