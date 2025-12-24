import { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { CartCard } from "./CartCard";

export const Navbar = () => {
  const { cart } = useContext(BookContext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Cierra el card si el mouse sale de él
  useEffect(() => {
    const handleMouseLeave = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.relatedTarget)
      ) {
        setOpen(false);
      }
    };
    const node = dropdownRef.current;
    if (node) node.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      if (node) node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          Relatos de papel
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Inicio
              </NavLink>
            </li>
          </ul>

          {/* Contenedor del carrito */}
          <div
            className="position-relative"
            ref={dropdownRef}
            onMouseEnter={() => setOpen(true)}
          >
            <button className="btn btn-outline-primary">
              🛒 Carrito ({cart.length})
            </button>

            {/* Card que se muestra debajo del botón */}
            {open && (
              <div
                className="card position-absolute"
                style={{
                  right: 0,
                  top: "100%",
                  zIndex: 1000,
                  minWidth: "250px",
                }}
              >
                <CartCard cartItems={cart} />
              </div>
            )}
          </div>

          <form className="d-flex ms-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
