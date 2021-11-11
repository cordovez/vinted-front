import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
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
    <div className="container">
      <div className="home-offer-card">
        <div>
          <img
            className="home-product-photo"
            src={data.product_image.secure_url}
            alt="product"
          />
        </div>
        <div className="infos">
          <div>
            <div className="home-product-info"> {data.product_name}</div>
            <div className="home-product-info">{data.product_description}</div>
            <div className="home-product-info price">
              {data.product_price} €
            </div>
          </div>
        </div>
      </div>
      <div className="buy">
        <div className="home-product-info price">{data.product_price} €</div>
      </div>
    </div>
  );
};
export default Offer;
