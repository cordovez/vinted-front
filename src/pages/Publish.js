import "../assets/components/CSS/publish.css";
import { Navigate, useNavigate } from "react-router";

import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Publish = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [condition, setCondition] = useState();
  const [city, setCity] = useState();
  const [brand, setBrand] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();

  const [data, setData] = useState();
  const [preview, setPreview] = useState();

  const userToken = Cookies.get("userToken");

  console.log("my user token   ", userToken);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("picture", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + userToken,
            "Content-type": "multipart/form-data",
          },
        }
      );
      if (response.data._id) {
        navigate(`/offer/${response.data._id}`);
      }
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      if (error.response.status === 500) {
        console.error("An error exists");
      } else {
        console.error(error.response.data.message);
      }
    }
  };
  return userToken ? (
    <div className="container-publish">
      <h1>Vends ton article</h1>
      <form onSubmit={handleSubmit}>
        <div className="load-photo">
          <div className="marching-ants">
            <img
              src={preview}
              id="preview"
              alt="product-preview"
              className="hidden"
            />

            <label className="custom-upload">
              <input
                id="upload"
                type="file"
                onChange={(event) => {
                  setFile(event.target.files[0]);
                  setPreview(URL.createObjectURL(event.target.files[0]));
                }}
              />
              <span>+</span>Ajoute une photo
            </label>
          </div>
        </div>
        <div className="box">
          <div className="title">
            <h2>Titre</h2>
          </div>
          <input
            type="text"
            placeholder="ex: Chemise Sézane verte"
            className="description"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
        </div>

        <div className="box">
          <h2>Décris ton article</h2>
          <input
            rows="10"
            cols="50"
            id="text-area"
            type="text-area"
            value={description}
            placeholder="ex: porté quelquefois, taille correctement"
            className="description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></input>
        </div>

        <div className="box" id="brand">
          <div className="brand">
            <h2>Marque</h2>
          </div>
          <input
            type="text"
            placeholder="ex: Gucci"
            className="description"
            value={brand}
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          ></input>
        </div>

        <div className="box">
          <div className="size">
            <h2>Taille</h2>
          </div>
          <input
            type="text"
            className="description"
            value={size}
            onChange={(event) => {
              setSize(event.target.value);
            }}
          ></input>
        </div>

        <div className="box">
          <div className="color">
            <h2>Couleur</h2>
          </div>
          <input
            type="text"
            className="description"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          ></input>
        </div>

        <div className="box">
          <div className="condition">
            <h2>Condition</h2>
          </div>
          <input
            type="text"
            placeholder="ex: presque neuf"
            className="description"
            value={condition}
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          ></input>
        </div>

        <div className="box">
          <div className="city">
            <h2>lieu</h2>
          </div>
          <input
            type="text"
            placeholder="Paris"
            className="description"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          ></input>
        </div>

        <div className="box" id="price">
          <h2>Price</h2>
          <input
            type="text-area"
            className="description"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          ></input>
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
        <div> {data && <img src={data.secure_url} alt="" />}</div>
      </form>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
