// Reducer to handle the state and actions of the Login and Logout buttons
import { LOGIN, LOGOUT } from "../actions/authActions";

// Nobody is logged in by default
const initialState = {
  isLoggedIn: false,
  user: null,
};

// Reducer logic
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
