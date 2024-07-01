// Importing desired components
import React from "react";
import Figure from "react-bootstrap/Figure";
import TotalPrice from "./totalPrice";
import "../styling/about.css";

// Creating the About component. Including purchasedProducts and totalPrice to be displayed on this page
export default function About({ purchasedProducts, totalPrice }) {
  return (
    <div className="about-container">
      <div className="row align-items-start">
        <div className="col-12 col-md-3 text-center">
          {/* Using Figure to create the logo image */}
          <Figure>
            <Figure.Image
              width={100}
              height={100}
              alt="Store Logo"
              src="https://images.unsplash.com/photo-1604066867775-43f48e3957d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHB1bXAlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
              className="img-fluid logo-img"
            />
          </Figure>
        </div>
        {/* About us details */}
        <div className="col-12 col-md-9 text-center text-md-left">
          <h1 className="about-header">About Us</h1>
          <p className="about-description">
            Welcome to our store! We offer a wide range of products to meet your
            needs.
          </p>
        </div>
      </div>
      <div className="row mt-4 text-center">
        <div className="col-12">
          {/* Store images */}
          <h2 className="store-images-header">Store Images</h2>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6 text-center">
          <Figure>
            <Figure.Image
              alt="Store Image 1"
              src="https://images.unsplash.com/photo-1527090526205-beaac8dc3c62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZSUyMHN0b3JlfGVufDB8fDB8fHww"
              className="img-fluid store-image"
            />
          </Figure>
        </div>
        <div className="col-6 text-center">
          <Figure>
            <Figure.Image
              alt="Store Image 2"
              src="https://images.unsplash.com/photo-1596973161814-77290e58ba9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZSUyMHN0b3JlfGVufDB8fDB8fHww"
              className="img-fluid store-image"
            />
          </Figure>
        </div>
      </div>
      <div className="row mt-4">
        {/* Contact info */}
        <div className="col-12 text-center contact-info">
          <p>
            Contact us at:
            <br />
            Email: example@gmail.com
            <br />
            Phone: +27 123 4567
          </p>
        </div>
      </div>
      <TotalPrice totalPrice={totalPrice} />
    </div>
  );
}
