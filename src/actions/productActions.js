// Actions for the products
export const ADD_PRODUCT = "ADD_PRODUCT";
export const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const setTotalPrice = (price) => ({
  type: SET_TOTAL_PRICE,
  payload: price,
});
