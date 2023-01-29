import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Products from "./pages/Products/Products.js";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
import Basket from "./pages/Basket/Basket.js";
import Undefined from "./pages/Undefined/Undefined";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sticky">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/*" element={<Undefined />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
