import React from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import picture from "../Images/i1.png";

const SecendTrendingAndRecommended = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <div className="product-sections">
      {/* Trending Products */}
      <div className="section">
        <h2>Trending Products</h2>
        <div className="product-slider">
          <div className="product-card">
            <img
              src={picture}
              alt="Wireless Earbuds"
              className="product-image"
            />
            <div className="product-info">
              <h4>Wireless Earbuds</h4>
              <p>$50</p>
            </div>

            {/* Buttons that show on hover */}
            <div className="hover-buttons">
              <button onClick={() => navigate("/Details")}>View Details</button>
              <button onClick={() => navigate("/Buynow")}>Buy Now</button>
            </div>
          </div>

          <div className="product-card">
            <img src={picture} alt="Smartwatch" className="product-image" />
            <div className="product-info">
              <h4>Smartwatch</h4>
              <p>$100</p>
            </div>

            {/* Buttons that show on hover */}
            <div className="hover-buttons">
              <button onClick={() => navigate("/Details")}>View Details</button>
              <button onClick={() => navigate("/Buynow")}>Buy Now</button>
            </div>
          </div>

          {/* Repeat for other products */}
        </div>
      </div>
    </div>
  );
};

export default SecendTrendingAndRecommended;
