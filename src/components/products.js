// Importing desired components
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, setTotalPrice } from "../actions/productActions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Modal from "react-bootstrap/Modal";
import TotalPrice from "./totalPrice";
import "../styling/products.css";

// Array of products
const productsData = [
  {
    id: 1,
    title: "Shoe 1",
    description: "This is a great product.",
    price: 299.99,
    imgSrc:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    colors: ["Red", "Green", "Blue"],
  },
  {
    id: 2,
    title: "Shoe 2",
    description: "This product is amazing.",
    price: 399.99,
    imgSrc:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    colors: ["Yellow", "Purple", "Pink"],
  },
  {
    id: 3,
    title: "Shoe 3",
    description: "This product is fantastic.",
    price: 199.99,
    imgSrc:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    colors: ["Black", "White", "Gray"],
  },
  {
    id: 4,
    title: "Shoe 4",
    description: "You will love this product.",
    price: 499.99,
    imgSrc:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww",
    colors: ["Red", "Yellow", "Green"],
  },
  {
    id: 5,
    title: "Shoe 5",
    description: "An excellent product.",
    price: 249.99,
    imgSrc:
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww",
    colors: ["Blue", "Green", "Purple"],
  },
  {
    id: 6,
    title: "Shoe 6",
    description: "This product is top-notch.",
    price: 599.99,
    imgSrc:
      "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzfGVufDB8fDB8fHww",
    colors: ["Yellow", "Orange", "Red"],
  },
  {
    id: 7,
    title: "Shoe 7",
    description: "A high-quality product.",
    price: 349.99,
    imgSrc:
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNob2VzfGVufDB8fDB8fHww",
    colors: ["Pink", "Purple", "Black"],
  },
  {
    id: 8,
    title: "Shoe 8",
    description: "This product is worth every penny.",
    price: 449.99,
    imgSrc:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNob2VzfGVufDB8fDB8fHww",
    colors: ["White", "Gray", "Blue"],
  },
  {
    id: 9,
    title: "Shoe 9",
    description: "An outstanding product.",
    price: 549.99,
    imgSrc:
      "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHNob2VzfGVufDB8fDB8fHww",
    colors: ["Red", "Black", "White"],
  },
  {
    id: 10,
    title: "Shoe 10",
    description: "The best product ever.",
    price: 649.99,
    imgSrc:
      "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNob2VzfGVufDB8fDB8fHww",
    colors: ["Green", "Yellow", "Blue"],
  },
];

// Creating the Products function
export default function Products() {
  // Handling the state of the totalPrice and purchasedProducts
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.products.totalPrice);
  const purchasedProducts = useSelector((state) => state.products.products);
  // Color selector
  const [selectedColors, setSelectedColors] = useState(
    Array(productsData.length).fill("")
  );
  // Making the warning to "Pick a color" false by default
  const [showColorWarning, setShowColorWarning] = useState(false);

  // Logic for handling the purchase
  const handlePurchase = (product, index) => {
    if (!selectedColors[index]) {
      setShowColorWarning(true);
      return;
    }
    const productWithColor = { ...product, color: selectedColors[index] };
    dispatch(addProduct(productWithColor));
    dispatch(setTotalPrice(totalPrice + product.price));
  };

  // Handling the color select
  const handleColorSelect = (color, index) => {
    const newSelectedColors = [...selectedColors];
    newSelectedColors[index] = color;
    setSelectedColors(newSelectedColors);
  };

  const handleCloseColorWarning = () => setShowColorWarning(false);

  return (
    // Displaying the products by mapping through the productsData and displaying them using Card from bootstrap
    <div>
      <h2 className="ourProducts">PRODUCTS</h2>
      <div className="products-container">
        {productsData.map((product, index) => (
          <Card className="product-card" key={product.id}>
            <Card.Img variant="top" src={product.imgSrc} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text className="product-price">
                <strong>R{product.price.toFixed(2)}</strong>
              </Card.Text>
              <DropdownButton
                id="dropdown-basic-button"
                title={selectedColors[index] || "Choose Colour"}
              >
                {product.colors.map((color) => (
                  <Dropdown.Item
                    key={color}
                    onClick={() => handleColorSelect(color, index)}
                  >
                    {color}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
              <Button
                variant="primary"
                style={{ marginTop: "1rem" }}
                onClick={() => handlePurchase(product, index)}
              >
                Buy
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <TotalPrice totalPrice={totalPrice} />
      {/* Modal for color selection warning */}
      <Modal show={showColorWarning} onHide={handleCloseColorWarning}>
        <Modal.Header closeButton>
          <Modal.Title>Color Selection Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please select a color before purchasing the product.
        </Modal.Body>
        <Modal.Footer>
          {/* Close button for modal */}
          <Button variant="secondary" onClick={handleCloseColorWarning}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
