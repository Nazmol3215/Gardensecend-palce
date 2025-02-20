import React, { useState } from "react";
import rdsgfx1 from "../Images/i4.png";
import rdsgfx2 from "../Images/i3.png";
import rdsgfx3 from "../Images/i14.png";
import rdsgfx4 from "../Images/i17.png";
import rdsgfx5 from "../Images/i19.png";

// Sample image data with titles
const images = [
  { src: rdsgfx3, title: "Image 1" },
  { src: rdsgfx1, title: "Cinque" },
  { src: rdsgfx2, title: "Image 3" },
  { src: rdsgfx3, title: "Image 4" },
  { src: rdsgfx4, title: "Image 5" },
  { src: rdsgfx5, title: "Image 6" },
];

const Slid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous slide
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle thumbnail click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow">
      {/* Main Image Slider */}
      <div className="main-slider">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className="main-image"
        />
        <button className="prev-btn" onClick={goToPrevSlide}>
          &#10094;
        </button>
        <button className="next-btn" onClick={goToNextSlide}>
          &#10095;
        </button>
        <div className="image-title">{images[currentIndex].title}</div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="thumbnail-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.title}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slid;

// CSS Styling
const styles = `
.slideshow {
  width: 400px;
  height: 700px;
  margin: auto;
  margin-bottom: 44px;
}

.main-slider {
  position: relative;
  width: 500px;
  overflow: hidden;
  margin-bottom: 10px;
}

.main-image {
  width: 400px;
  display: block;
  border-radius: 10px;
}

.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 1;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

.image-title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
  background-color: #333;
  color: white;
  border-radius: 0 0 10px 10px;
}

.thumbnail-gallery {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.thumbnail {
  width: 80px;
  height: 50px;
  cursor: pointer;
  opacity: 0.6;
  border-radius: 5px;
  transition: opacity 0.3s ease;
}

.thumbnail.active {
  opacity: 1;
  border: 2px solid #333;
}

.thumbnail:hover {
  opacity: 1;
}
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
