import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import productsData from "../data/productsData";

function Products({ addToCart }) {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div>
      <h2>Products</h2>
      {showAlert && <div className="alert">Product added to cart!</div>}
      <ProductList products={productsData} addToCart={handleAddToCart} />
      <Link to="/cart">
        <button className="go-to-cart">Go to Cart</button>
      </Link>
    </div>
  );
}

export default Products;
