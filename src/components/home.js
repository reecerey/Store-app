// Landing page / Home page
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/authActions";
import "../styling/home.css";

// Handling the Home function
export default function Home() {
  const dispatch = useDispatch();
  // Checking if the the user is logged in or not
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  // Handling logout
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="home-container">
      <h2 className="home-header">Shoe Store Homepage</h2>
      {/* If you are logged in, it will say "Welcome {name}" with the name you used to register */}
      <div className="home-login">
        {isLoggedIn ? (
          <>
            <h1>Welcome {user.firstName}</h1>
            <button className="home-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          // Else there will be Login and Sign up buttons
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}
