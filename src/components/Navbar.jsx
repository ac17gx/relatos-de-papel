// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CartModal from "../components/Cart";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const { items } = useCart();
  const totalQty = items.reduce((s, it) => s + it.quantity, 0);

  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">Relatos de Papel</NavLink>
            <div className="d-flex align-items-center ms-auto">
              <button
                type="button"
                className="btn btn-light btn-sm d-flex align-items-center cart-button"
                onClick={() => setOpenCart(true)}
              >
                <img
                  className="cart-button__icon"
                  src="/images/carrito-de-compras.png"
                  alt="carrito-de-compras"
                />
                {/* Texto visible solo en pantallas md+ */}
                <span className="d-none d-md-inline">Carrito</span>
 
                {/* Badge siempre visible si hay productos */}
                {totalQty > 0 && (
                  <span className="badge bg-danger ms-1">{totalQty}</span>
                )}
              </button>
            </div>
        </div>
      </nav>

      <CartModal open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}
