import React from "react";
import { NavLink } from "react-router-dom";

export const CartCard = ({ cartItems }) => {
  // Tomamos solo los 4 primeros items
  const visibleItems = cartItems.slice(0, 4);
  const hasMore = cartItems.length > 4;

  return (
    <div
      className="card position-absolute shadow"
      style={{
        right: 0,
        width: "250px",
        zIndex: 1000,
        borderRadius: "6px",
      }}
    >
      <div
        className="card-body p-2"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="mb-2">El carrito está vacío</p>
            <NavLink to="/home" className="btn btn-success w-100">
              Ir a comprar
            </NavLink>
          </div>
        ) : (
          <>
            {visibleItems.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center mb-2"
              >
                <span>{item.name}</span>
                <span className="fw-bold">${item.price}</span>
              </div>
            ))}

            {hasMore && (
              <p className="text-center text-muted small mb-2">
                +{cartItems.length - 4} más...
              </p>
            )}

            <NavLink to="/cart" className="btn btn-success w-100">
              Ir a carrito
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};
