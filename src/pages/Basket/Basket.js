import React from "react";
import "./Basket.css";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_BASKET } from "../../redux/action.js";

const Basket = () => {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  let num = 0;
  basket.map((item) => {
    num = num + item.count * item.price;
    return num;
  });

  const removeProduct = (item) => {
    const newBasket = [...basket.filter((elem) => +elem.id !== +item.id)];
    dispatch({ type: REMOVE_FROM_BASKET, payload: newBasket });
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  return (
    <div className="basket-main">
      <div className="total-cost">
        <h3 className="cost-h3">
          <span className="item-span">Total cost: </span>
          {num} USD
        </h3>
      </div>
      <ul className="basket-ul">
        {basket.map((item) => (
          <div className="basket-div">
            <li className="basket-li" key={item.id}>
              <div className="basket-item-title">
                <h3 className="basket-h3">{item.title}</h3>
              </div>
              <div className="basket-info">
                <div className="remove-container">
                  <div className="item-photo">
                    <img
                      className="product-photo"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="remove-div">
                    <button
                      className="remove-button"
                      onClick={() => removeProduct(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="item-price">
                  <span className="basket-span">
                    <span className="item-span">Price: </span>
                    {item.price} USD
                  </span>
                  <span className="basket-span">
                    <span className="item-span">Count: </span>
                    {item.count}
                  </span>
                  <span className="basket-span">
                    <span className="item-span">Cost: </span>
                    {item.count * item.price} USD
                  </span>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Basket;
