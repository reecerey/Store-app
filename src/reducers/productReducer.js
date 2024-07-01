// Reducer to handle the addProduct and totalPrice state
import { ADD_PRODUCT, SET_TOTAL_PRICE } from "../actions/productActions";

// No products by default and totalPrice starts at 0
const initialState = {
  products: [],
  totalPrice: 0,
};

// Reducer Logic
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
