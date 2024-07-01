// Importing all components needed to be rendered
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/header";
import Home from "./components/home";
import Products from "./components/products";
import About from "./components/about";
import Login from "./components/login";
import SignUp from "./components/signUp";
import Cart from "./components/cart";
import Order from "./components/order";
import "./App.css";

export default function App() {
  // Handling the state of purchasedProducts and totalPrice
  const purchasedProducts = useSelector((state) => state.products.products);
  const totalPrice = useSelector((state) => state.products.totalPrice);

  return (
    // Using components
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/about"
          element={
            <About
              purchasedProducts={purchasedProducts}
              totalPrice={totalPrice}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
}
