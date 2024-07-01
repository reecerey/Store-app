// Importing required components
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styling/totalPrice.css";

// TotalPrice function to be displayed on multiple pages
export default function TotalPrice({ totalPrice }) {
  return (
    <div className="total-price-container">
      {totalPrice > 0 && (
        <>
          <h2 className="total-price-header">
            Total Price: R{totalPrice.toFixed(2)}
            {/* Cart icon to take users to the cart.js page to see items */}
            <Link to="/cart" className="cart-link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
          </h2>
        </>
      )}
    </div>
  );
}
