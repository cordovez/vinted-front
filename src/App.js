import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header";

import Navigation from "./assets/components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Shop from "./pages/Shop";
import Offer from "./pages/Offer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/contact" element={<Contact />}>
            Contact
          </Route>
          <Route path="/FAQ" element={<FAQ />}>
            FAQ
          </Route>
          <Route path="/shop" element={<Shop />}>
            Shop
          </Route>
          <Route path="/offer/:id" element={<Offer />}>
            Product
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
