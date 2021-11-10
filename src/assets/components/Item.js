import Jeans from "../img/jeans.jpg";
import Vendor from "../img/user-empty-state.svg";

const Item = () => {
  return (
    <div className="home-offer-card">
      <img src={Vendor} alt="user" className="vendor" />
      <span className="vendor-social"> Juan Carlos</span>

      <img src={Jeans} alt="product" className="home-product" />
      <div className="home-product-info">
        <span>35,00 €</span>
        <span>❤️</span>
        <p>M - L - XL</p>
        <p>Juicy Jeans</p>
      </div>
    </div>
  );
};

export default Item;
