import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarList from "./components/NavbarList"; // Import NavbarList only once
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useState } from "react";
import Context from "./context/Context";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Product from "./pages/Product";

function App() {
  const [showCart, setShowCart] = useState(false);
  
  return (
    <Context>
      <div className="App">
        {showCart && <Cart cart={setShowCart} />}
        <NavbarList cart={setShowCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} exact />
          <Route path="/about" element={<About />} />
          {/* Add a valid component or remove this route */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/store/:id" element={<Product />} />
        </Routes>
      </div>
    </Context>
  );
}

export default App;
