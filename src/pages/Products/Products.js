import React from "react";
import "./Products.css";
import { useState, useEffect } from "react";
import store from "../../redux/store";
import BuyProduct from "../../Components/BuyProduct/BuyProduct";

const Products = () => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(store.getState().images);
  }, []);

  const getCategoryUrl = async (e) => {
    await fetch(
      `https://fakestoreapi.com/products/category/${e.target.innerText.toLowerCase()}`
    )
      .then((response) => response.json())
      .then((newData) => setData(newData))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="products">
      <main className="products-main">
        <div className="product-nav">
          <button
            type="button"
            className="electronics button"
            onClick={getCategoryUrl}
          >
            Electronics
          </button>
          <button
            type="button"
            className="jewelery button"
            onClick={getCategoryUrl}
          >
            Jewelery
          </button>
          <button
            type="button"
            className="men-clothing button"
            onClick={getCategoryUrl}
          >
            Men's clothing
          </button>
          <button
            type="button"
            className="women-clothing button"
            onClick={getCategoryUrl}
          >
            Women's clothing
          </button>
        </div>
        <div className="products-info">
          {data.length === 0 ? (
            <div className="no-choise-div">
              {images.map((image, index) => (
                <div className="photo-div" key={index}>
                  <img
                    className="no-choise-photos"
                    src={image.url}
                    alt="text"
                  />
                </div>
              ))}
            </div>
          ) : (
            <ul className="product-ul">
              {data.map((item) => (
                <li className="product" key={item.id}>
                  <div className="item title">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="info-container">
                    <div className="left-info">
                      <div className="item-photo">
                        <img
                          className="product-photo"
                          src={item.image}
                          alt={item.title}
                        />
                      </div>
                      <div className="item price">
                        <span className="item-span">Price: </span>
                        {item.price} USD
                      </div>
                      <div className="item rating">
                        <span className="item-span">Rating: </span>
                        {item.rating.rate} <br />{" "}
                        <span className="item-span">Count: </span>
                        {item.rating.count}
                      </div>
                      <BuyProduct product={item} />
                    </div>
                    <div className="right-info">
                      <div className="item description">
                        <span className="item-span">Description: </span>
                        <br /> {item.description}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;
