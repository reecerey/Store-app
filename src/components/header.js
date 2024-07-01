import React from "react";
import { Link } from "react-router-dom";
import "../styling/header.css";

export default function Header() {
  return (
    <nav className="header-container">
      {/* Using Link to direct users to the other pages when clicked */}
      <Link to="/" className="header-link">
        Home
      </Link>
      <Link to="/products" className="header-link">
        Products
      </Link>
      <Link to="/about" className="header-link">
        About
      </Link>
    </nav>
  );
}
