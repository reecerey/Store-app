// Importing desired components
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTotalPrice } from "../actions/productActions";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "../styling/cart.css";

// Creating the Cart Component
export default function Cart() {
  // Calling dispatch from Redux
  const dispatch = useDispatch();
  // Calling navigate from React
  const navigate = useNavigate();
  // Handling the state of the products
  const purchasedProducts = useSelector((state) => state.products.products);
  const initialTotalPrice = useSelector((state) => state.products.totalPrice);
  // Handling the shipping methods and state
  const [shippingMethod, setShippingMethod] = useState("");
  const [showShipping, setShowShipping] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [totalPrice, setTotalPriceState] = useState(initialTotalPrice);
  const [isExpressAdded, setIsExpressAdded] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [addressDetails, setAddressDetails] = useState({
    address: "",
    town: "",
    city: "",
    province: "",
  });

  useEffect(() => {
    // Update the total price in the Redux store whenever it changes locally
    dispatch(setTotalPrice(totalPrice));
  }, [totalPrice, dispatch]);

  const handleShippingChange = (e) => {
    const { value } = e.target;
    setShippingMethod(value);

    if (value === "express" && !isExpressAdded) {
      setTotalPriceState((prevTotal) => prevTotal + 100);
      setIsExpressAdded(true);
    } else if (value === "standard" && isExpressAdded) {
      setTotalPriceState((prevTotal) => prevTotal - 100);
      setIsExpressAdded(false);
    }

    // Show address form once a shipping method is selected
    setShowAddress(true);
  };

  const handleCheckout = () => {
    // Show shipping options on checkout
    setShowShipping(true);
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    // Navigate to order.js with the shipping details and method
    navigate("/order", {
      state: {
        addressDetails,
        shippingMethod,
        totalPrice,
      },
    });
  };

  // Handling the Help button
  const handleShowHelp = () => setShowHelp(true);
  const handleCloseHelp = () => setShowHelp(false);

  return (
    // Shopping cart
    <div className="cart-container">
      <h2 className="cart-header">Shopping Cart</h2>
      {/* Message if there is nothing in the cart */}
      <div className="cart-items">
        {purchasedProducts.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          // Else display this
          <ul>
            {/* Mapping through the purchasedProducts to display their image, title, price and color */}
            {purchasedProducts.map((product, index) => (
              <li key={index}>
                <img src={product.imgSrc} alt={product.title} />
                <div>
                  <h3>{product.title}</h3>
                  <p>Price: R{product.price.toFixed(2)}</p>
                  <p>Color: {product.color}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Total price of items */}
      <div className="cart-total">
        <p>Total Price: R{totalPrice.toFixed(2)}</p>
      </div>
      {/* Help button for shipping details */}
      <Button className="help-button" onClick={handleShowHelp}>
        Help
      </Button>
      {/* Checkout button to put shipping info */}
      {!showShipping && (
        <Button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </Button>
      )}
      {/* Once the shipping method has been chosen in the dropdown menu, the user input is requested for shipping info */}
      {showShipping && (
        <div className="shipping-method-popup">
          <label>Select Shipping Method:</label>
          <select value={shippingMethod} onChange={handleShippingChange}>
            <option value="">Select...</option>
            <option value="standard">Standard Shipping</option>
            <option value="express">Express Shipping (+R100)</option>
          </select>
        </div>
      )}
      {showAddress && (
        <div className="address-popup">
          <h3>Enter Address Details</h3>
          <form onSubmit={handleAddressSubmit}>
            <label>Address:</label>
            <input
              type="text"
              value={addressDetails.address}
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  address: e.target.value,
                })
              }
              required
            />
            <label>Town:</label>
            <input
              type="text"
              value={addressDetails.town}
              onChange={(e) =>
                setAddressDetails({ ...addressDetails, town: e.target.value })
              }
              required
            />
            <label>City:</label>
            <input
              type="text"
              value={addressDetails.city}
              onChange={(e) =>
                setAddressDetails({ ...addressDetails, city: e.target.value })
              }
              required
            />
            <label>Province:</label>
            <input
              type="text"
              value={addressDetails.province}
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  province: e.target.value,
                })
              }
              required
            />
            {/* Once the "Order" button has been clicked, it will take you to order.js for the final statement */}
            <Button type="submit" className="submit-order-button">
              Order
            </Button>
          </form>
        </div>
      )}
      {/* Modal for the shipping info help */}
      <Modal show={showHelp} onHide={handleCloseHelp}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Standard Shipping: Delivered within 5-7 business days.</p>
          <p>
            Express Shipping: Delivered within 1-2 business days. Additional
            cost: R100
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* Close button for the modal */}
          <Button variant="secondary" onClick={handleCloseHelp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
