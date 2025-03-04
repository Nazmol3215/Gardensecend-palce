import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "../AllPages/Pages";
import Product from "../ProductDetails/Product";
import Checkout from "../ProductDetails/Checkout";
import Contact from "../Homes/Contact";
import Services from "../Homes/Services";
import About from "../Homes/About";
import Home from "../Homes/Home";
import Buynow from "../Components/Buynow";
import Details from "../Components/Details";





function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
        <Route path="/Buynow" element={<Buynow />} />
      </Routes>
    </Router>
  );
}

export default RouterPage;
