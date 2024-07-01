// Root reducer for Redux. Linking other reducers
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
});

export default rootReducer;
