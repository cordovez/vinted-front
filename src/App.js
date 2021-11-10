import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./assets/components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Shop from "./pages/Shop";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Router>
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
          <Route path="/product/:id" element={<Product />}>
            Product
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
