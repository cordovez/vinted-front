import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./assets/components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";

import { useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [token, setToken] = useState(null);
  const setUser = (token) => {
    if (token) {
      Cookies.set("user-token", token, { expires: 30 });
    } else {
      Cookies.remove("user-token");
    }
    setToken(token);
  };
  return (
    <>
      <Router>
        <Header token={token} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
