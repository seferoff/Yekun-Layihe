import React from 'react'
import { useDispatch } from "react-redux";
import { ADD_TO_BASKET } from "../../redux/action.js"
import { useState } from "react";

const BuyProduct = (props) => {

    const [count, setCount] = useState("");
    const dispatch = useDispatch()
    const {product, choise, setChoise} = props;

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
        product.count = +count
        if (product.count > 0) {
          if (choise.map((elem) => +elem.id != product.id)) {
            setChoise([...choise, product])
          }
          else {
            choise.map((elem) => {
              elem.count = +elem.count + product.count
            })
            setChoise([...choise])
          }
        }
      }

      console.log(choise);

  return (
    <div className='buyProduct'>
        <div className="buy-product">
                        <button className="minus" onClick={decreaseCount}>
                          -
                        </button>
                        <input
                          className="buy-input"
                          placeholder="count"
                          type="number"
                          value = {count}
                          onChange={getCount}
                          onDoubleClick={getNewCount}
                        ></input>
                        <button className="plus" onClick={increaseCount}>
                          +
                        </button>
                        <button
                          className="add-to"
                          onClick={() => {addBasket(product,count); dispatch({type: ADD_TO_BASKET, payload: choise});}}
                        >
                          Add
                        </button>
                      </div>
    </div>
  )
}

export default BuyProduct