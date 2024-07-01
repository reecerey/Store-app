// Importing desired components
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "../styling/order.css";

// Order function
const Order = () => {
  // Handling the state of the purchased products
  const purchasedProducts = useSelector((state) => state.products.products);
  const location = useLocation();
  // Getting the user input and total price of the cart
  const { addressDetails, shippingMethod, totalPrice } = location.state || {};
  // Getting the random order number
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    // Generate a random order number
    const generateOrderNumber = () => {
      return Math.floor(Math.random() * 1000);
    };
    setOrderNumber(generateOrderNumber());
  }, []);

  return (
    <div className="order-container">
      {/* Creating the order summary */}
      <h2 className="order-header">Order Summary</h2>
      <div className="order-details">
        {/* Info from the cart */}
        <h3>Cart Information</h3>
        <ul>
          {purchasedProducts.map((product, index) => (
            <li key={index} className="order-product">
              <img
                src={product.imgSrc}
                alt={product.title}
                className="order-product-image"
              />
              <div className="order-product-info">
                <h4>{product.title}</h4>
                <p>Price: R{product.price.toFixed(2)}</p>
                <p>Color: {product.color}</p>
              </div>
            </li>
          ))}
        </ul>
        {/* Total price of items */}
        <h3>Total Price: R{totalPrice.toFixed(2)}</h3>
        {/* Shipping method from the user */}
        <h3>Shipping Method: {shippingMethod}</h3>
        <h3>Shipping Details:</h3>
        <p>Address: {addressDetails.address}</p>
        <p>Town: {addressDetails.town}</p>
        <p>City: {addressDetails.city}</p>
        <p>Province: {addressDetails.province}</p>
      </div>
      {/* Randomly generated order number */}
      <div className="order-number">
        <h3>Order Number: #{orderNumber}</h3>
      </div>
    </div>
  );
};

export default Order;
