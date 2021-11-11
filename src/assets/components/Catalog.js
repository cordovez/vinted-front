import Vendor from "../img/user-empty-state.svg";

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
          <div className="home-offer-card">
            <div className="vendor-badge">
              <img className="vendor-avatar" src={Vendor} alt="product" />{" "}
              <span className="vendor-name">JC Corman</span>
            </div>
            <div>
              <img
                className="home-product-photo"
                src={offer.product_image.secure_url}
                alt="product"
              />
            </div>{" "}
          </div>
        </div>
      );
    })
  );
};

export default Catalog;
