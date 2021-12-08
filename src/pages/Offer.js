import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

import "../assets/components/CSS/offer.css";
import { Link } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://vinted-api-cordovez.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <h1>Data is loading ...</h1>
  ) : (
    <body id="offer">
      <div className="container">
        <div className="offer">
          <div className="offer-image">
            <img
              className="home-product-photo"
              src={data.product_image.secure_url}
              alt="product"
            />
          </div>

          <div className="product">
            <div className="product-price">{data.product_price} €</div>

            <div className="product-info"> {data.product_name}</div>
            <div className="product-info">{data.product_description}</div>
            <Link to="/payment">
              <input type="submit" className="buy" value="Acheter" />
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
};
export default Offer;
