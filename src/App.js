import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./assets/components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Offer from "./pages/Offer";
import Login from "./pages/Login";

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
          <Route path="/signup" element={<Signup setUser={setUser} />}></Route>
          <Route path="/login" element={<Login setUser={setUser} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
