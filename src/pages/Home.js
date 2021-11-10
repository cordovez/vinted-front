import Logo from "../assets/img/vinted.svg";
const Home = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="vinted-logo" />
        <input
          type="search"
          className="search"
          defaultValue="Recherche des articles"
        ></input>
        <nav className="topnav">
          <button className="white-button">S'inscrire | Se connecter</button>
          <button className="teal-button">Vends Maintenant</button>
        </nav>
      </div>
    </div>
  );
};

export default Home;
