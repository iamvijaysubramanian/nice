import React from "react";
import Product from "./Product";

function ProductList({ products, addToCart }) {
  return (
    <section className="products">
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
