import Vendor from "../img/user-empty-state.svg";
import { Link } from "react-router-dom";
import axios from "axios";

import { useState, useEffect } from "react";

const Catalog = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    data.offers.map((offer) => {
      return (
        <div className="container">
          <Link key={offer._id} to={`/offer/${offer._id}`}>
            <div className="home-offer-card" key={offer._id}>
              <div className="vendor-badge">
                <img className="vendor-avatar" src={Vendor} alt="product" />{" "}
                <span className="vendor-name">
                  {offer.owner.account.username}
                </span>
              </div>
              <div key={offer.product_image.asset_id}>
                <img
                  className="home-product-photo"
                  src={offer.product_image.secure_url}
                  alt="product"
                />
              </div>
              <div className="infos" key={offer._id}>
                <div>
                  <div className="home-product-info"> {offer.product_name}</div>
                  <div className="home-product-info">
                    {offer.product_description}
                  </div>
                  <div className="home-product-info price">
                    {offer.product_price} €
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    })
  );
};

export default Catalog;
