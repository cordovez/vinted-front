import Header from "../assets/components/Header";
import Jeans from "../assets/img/jeans.jpg";

const Product = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="offer-container">
          <div className="offer-picture"></div>
          <img src={Jeans} alt="jeans" className="home-product" />
          <div className="offer-card">
            <p>35,00 €</p>
            <p>Marque</p>
            <p>Taille</p>
            <p>État</p>
            <p>Couleur</p>
            <p>Emplacement</p>
            <button className="acheter">Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
