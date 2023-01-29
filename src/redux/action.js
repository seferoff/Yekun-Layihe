export const ADD_IMAGES = "ADD_IMAGES";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";

const images = [];
const basket = [];


export const addImage = () => ({
  type: ADD_IMAGES,
  payload: images,
});

export const addToBasket = () => ({
  type: ADD_TO_BASKET,
  payload: basket,
});
