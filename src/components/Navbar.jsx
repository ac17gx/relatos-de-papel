import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Relatos de Papel
        </Link>
        <div className="collapse navbar-collapse">
          {/* <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favoritos">Favoritos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Acerca de</Link>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}
