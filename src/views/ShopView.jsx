import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../context/BookContext";

export const ShopView = () => {
  const { clearCart, getTotal, cart, removeCartItem } = useContext(BookContext);
  return (
    <>
      <section className="container">
        <h1>Carrito de compras</h1>
        {cart.length != 0 && (
          <div className="row">
            <div className="col-12 col-md-8 ">
              <h3>{`${cart.length} Libros en el carrito`}</h3>
              <hr />
              {cart.map((item, index) => (
                <div key={index} className="row mb-1">
                  <div className="col-2">
                    <img width="100 px" src={item.img} alt="logo-libro" />
                  </div>
                  <div className="col col-md-7">
                    <div>{item.name}</div>
                    <div>Autor del libro</div>
                  </div>
                  <div className="col col-auto">
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => removeCartItem(index)}
                    >
                      Eliminar
                    </button>
                  </div>
                  <div className="col">
                    <span>{`${item.price} USD$`}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-12 col-md-4">
              <div className=" text-secondary">Total</div>
              <div className="fs-1 fw-bold">{`${getTotal()} $`}</div>
              <NavLink
                to="/payment/checkout"
                className="btn btn-primary w-100 fs-3"
              >
                Checkout
              </NavLink>
              <button
                className="btn btn-danger w-100 mt-2 fs-3"
                onClick={clearCart}
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        )}

        {cart.length == 0 && (
            <div className="card text-center">
              <div className="card-body">
                <h5 class="card-title">Libros Vacios</h5>
                <p class="card-text">Sigue buscando tu libro preferido.</p>
                <NavLink to="/home" className="card-link ">
                  Ir a comprar
                </NavLink>
              </div>
            </div>
          )}
      </section>
    </>
  );
};
