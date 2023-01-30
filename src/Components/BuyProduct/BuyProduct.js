import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_BASKET } from "../../redux/action.js";
import { useState } from "react";
import "./BuyProduct.css"

const BuyProduct = (props) => {
  const [count, setCount] = useState(0);
  const basket = useSelector((state) => state.basket);
  const { product } = props;
  const dispatch = useDispatch();

  const getCount = (e) => {
    if (!e.target.value.includes("-") && !e.target.value.includes("+"))
      return setCount(e.target.value);
  };

  const getNewCount = () => {
    setCount("");
  };

  const increaseCount = () => {
    setCount(() => +count + 1);
  };

  const decreaseCount = () => {
    if (+count > 0) return setCount(() => +count - 1);
  };

  const addBasket = (product) => {
    product.count = +count;
    if (product.count > 0) {
      const newBasket = [...basket.filter((elem) => +elem.id !== +product.id)];
      const currentBasket = [...newBasket, product];
      dispatch({ type: ADD_TO_BASKET, payload: currentBasket });
      localStorage.setItem("basket", JSON.stringify(currentBasket));
    }
  };
  return (
    <div className="buyProduct">
      <div className="buy-product">
        <div className="left-buttons">
        <button className="minus" onClick={decreaseCount}>
          -
        </button>
        <input
          className="buy-input"
          placeholder="count"
          type="number"
          value={count}
          onChange={getCount}
          onDoubleClick={getNewCount}
        ></input>
        <button className="plus" onClick={increaseCount}>
          +
        </button>
        </div>
        <div className="right-buttons">
        <button className="add-to" onClick={() => addBasket(product)}>
          Add to basket
        </button>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
