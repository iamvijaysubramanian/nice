import React from "react";

function Cart({ cart }) {
  return (
    <section className="cart">
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <div>
                <span>{item.quantity}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Cart;
