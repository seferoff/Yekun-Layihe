import React from "react";
import "./Basket.css";
import { useState, useEffect } from "react";
import store from "../../redux/store";

const Basket = () => {

  const [basket, setBasket] = useState([])

  useEffect(() => {
    setBasket(store.getState().basket)
  }, [])

  console.log(store.getState().basket);
  return (
    <div className="basket">
      
    </div>
  );
};

export default Basket;
