import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-warning px-4 py-3">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3 text-danger" to="/">
            🍕 {props.res_name}
          </Link>
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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Pizza Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order">
                  Order Pizza
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reviews">
                  View Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
