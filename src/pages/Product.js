import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return (
    <div className="product-box">
      <h1>Name of the Product</h1>
      <span>
        The product id is:
        {id}
      </span>
    </div>
  );
};

export default Product;
