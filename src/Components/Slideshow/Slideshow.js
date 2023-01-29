import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";
import { useState, useEffect } from "react";
import store from "../../redux/store";

const Slideshow = () => {

  const [images, setImages] = useState([])
  useEffect(() => {
    setImages(store.getState().images)
  }, [])

  return (
    <div className="slide-container">
      <Fade>
        {images.map((image, index) => (
          <div key={index}>
            <img
              style={{ width: "100%", aspectRatio: "3/4" }}
              src={image.url}
              alt=""
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
