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
      return offer.product_pictures.map((photo) => {
        return (
          <div className="home-offer-card">
            <img src={Vendor} alt="user" className="vendor" />
            <span className="vendor-social"> Juan Carlos</span>
            <img
              src={photo.secure_url}
              alt="product"
              className="home-product-photo"
            />
            {offer.product_details.map((detail) => {
              return (
                <div>
                  {detail.MARQUE}
                  {detail.ÉTAT}
                  {detail.COULEUR}
                  {detail.EMPLACEMENT}
                </div>
              );
            })}
          </div>
        );
      });
    })
  );
};

export default Catalog;
