import "../assets/components/CSS/publish.css";

import { useState } from "react";
import axios from "axios";

const Publish = ({ userToken }) => {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");
  const [data, setData] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("files", file);
    formData.append("title", title);

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + { userToken },
            "Content-type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      if (error.response.status === 500) {
        console.error("An error exists");
      } else {
        console.error(error.response.data.msg);
      }
    }
  };
  return (
    <div className="container-publish">
      <h1>Vends ton article</h1>
      <form onSubmit={handleSubmit}>
        <div className="load-photo">
          <div className="marching-ants">
            <label className="custom-upload">
              <input
                id="upload"
                type="file"
                onClick={(event) => {
                  setFile(event.target.files[0]);
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
            defaultValue="ex: Chemise Sézane verte"
            className="description"
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
            defaultValue="ex: porté quelquefois, taille correctement"
            className="description"
          ></input>
        </div>

        <div className="box" id="price">
          <h2>Price</h2>
          <input
            type="text-area"
            defaultValue="0,00 €"
            className="description"
          ></input>
        </div>
        <div className="submit">
          <button type="submit">Submit</button>
        </div>
        {data && <img src={data.secure_url} alt="" />}
      </form>
    </div>
  );
};

export default Publish;
